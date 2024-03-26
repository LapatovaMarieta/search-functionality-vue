<template>
    <div class="search-container">
        <div class="search-content-wrapper">
            <div class="search-header">
                <div class="search-header-container">
                    <div class="user-section">
                        <img src="../assets/img/avatar.png" alt="user-image" >
                        <div class="user-level">Level 5</div>
                    </div>
                    <div>
                        <h3 class="user-name">RichyRich</h3>
                    </div>
                </div>
                <nav class="profile-nav">
                    <div class="active">my teams</div>
                    <div>about</div>
                </nav>
            </div>
            <div class="search-body">
                <div class="search-body-wrapper">
                    <h3 class="search-title">search teams</h3>
                    <div class="search-form">
                        <input type="text" placeholder="Search for a team" v-model="searchQuery" @input="searchTeams">
                        <i class="icon-search">
                            <img src="../assets/img/search.svg" alt="search icon">
                        </i>
                        <i v-if="showCloseIcon" class="icon-close" @click="clearSearch">
                            <img src="../assets/img/close.svg" alt="close icon">
                        </i>
                    </div>
                    <div v-if="showNoResultsMessage && searchQuery !== ''" class="search-no-results">
                        <img src="../assets/img/no-results.svg" alt="No search results">
                        <p>No Teams Found.</p>
                    </div>
                    <div v-if="searchResults.length > 0" class="search-results">
                        <ul>
                            <li v-for="(team, index) in searchResults" 
                                :key="team.id"
                                :class="{ 'highlighted': index === highlightedIndex }"
                                @mouseover="highlightedIndex = index"
                                tabindex="0"
                                @keydown="handleKeyDown"
                            >
                                <img src="../assets/img/team-placeholder.png" alt="Team placeholder" class="team-placeholder-img">
                                <div class="team-info-wrapper">
                                    <div class="team-leagues">
                                        <span v-for="(league, index) in team.leagues" :key="index">
                                            {{ league }}{{ index < team.leagues.length - 1 ? ', ' : '' }}
                                        </span>
                                    </div>
                                    <div class="team-info">
                                        <p class="team-info-name" v-html="highlightMatch(team.name)"></p>
                                        <img class="team-info-stadium-img" src="../assets/img/stadium (1).svg" alt="stadium">
                                        <p class="team-info-stadium" v-html="highlightMatch(team.stadium)"></p>
                                    </div>
                                </div>
                                <button  @click="toggleFollow(team.id)" :class="{'following': team.is_following}" class="btn-follow">{{ team.is_following ? 'Following' : 'Follow' }}</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="fav-teams">
            <div class="fav-teams-wrapper">
                <h3 class="fav-teams-title">my teams</h3>
                <div class="fav-teams-no-results" v-if="myTeams.length == 0">
                    <p class="fav-teams-no-results-message" >
                        You aren`t following any teams yet. 
                    </p>
                </div>
                <div class="fav-teams-results">
                    <ul>
                        <li v-for="team in myTeams" :key="team.id">
                            <img src="../assets/img/team-placeholder.png" alt="Team placeholder" class="team-placeholder-img">
                            <div class="team-content">
                                <p class="team-name">{{team.name}}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
    import '../assets/styles/search.scss'

    export default {
    name: 'SearchBar',
    data () {
        return {
            searchQuery: '',
            searchResults: [],
            showNoResultsMessage: false,
            showCloseIcon: false,
            highlightedIndex: -1,
        };
    },
    mounted() {
        this.$store.dispatch('fetchTeams');
    },
    computed: {
        teams() {
            return this.$store.state.teams;
        },
        myTeams() {
            return this.$store.state.myTeams;
        }
    },
    methods: {
        searchTeams() {
            const query = this.searchQuery.toLowerCase().trim();
            if (!query) {
                this.searchResults = [];
                this.showCloseIcon = false;
                this.showNoResultsMessage = false;
                return;
            } else {
                this.showCloseIcon = true;
                this.searchResults = this.teams.filter(team => {
                    return (
                    team.name.toLowerCase().startsWith(query) ||
                    team.stadium.toLowerCase().startsWith(query) ||
                    team.leagues.some(league => league.toLowerCase().startsWith(query))
                    );
                });
                this.showNoResultsMessage = this.searchResults.length === 0;
            }
        },
        toggleFollow(teamId) {
            this.$store.dispatch('toggleFollow', teamId);
        },
        clearSearch() {
            this.searchQuery= '';
            this.showCloseIcon = false;
            this.searchResults = [];
        },
        handleKeyDown(event) {
            switch (event.key) {
                case 'ArrowUp':
                    event.preventDefault();
                    this.highlightedIndex = Math.max(this.highlightedIndex - 1, 0);
                    break;
                case 'ArrowDown':
                    event.preventDefault();
                    this.highlightedIndex = Math.min(this.highlightedIndex + 1, this.searchResults.length - 1);
                    break;
            }
        },
        highlightMatch(letters) {
            const query = this.searchQuery.toLowerCase();
            const regex = new RegExp(`(^${query})`, 'gi');
            return letters.replace(regex, '<span class="highlighted-letters">$1</span>');
        },
    },
  }
</script>
