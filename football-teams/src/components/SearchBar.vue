<template>
    <div class="search-container">
        <div class="content-wrapper">
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
                    <div class="active">MY TEAMS</div>
                    <div>ABOUT</div>
                </nav>
            </div>
            <div class="search">
                <div class="search-wrapper">
                    <h3 class="search-title">search teams</h3>
                    <div class="search-form">
                        <input type="text" placeholder="Search for a team">
                        <i class="icon-search">
                            <img src="../assets/img/search.svg" alt="search icon">
                        </i>
                        <i class="icon-close">
                            <img src="../assets/img/close.svg" alt="close icon">
                        </i>
                    </div>
                    <div class="search-results">
                        <ul>
                            <li>
                                <img src="../assets/img/team-placeholder.png" alt="Team placeholder" class="team-placeholder">
                                <div class="team-info">
                                    <div class="team-leagues">
                                        <p>Primera Division, Champions League</p>
                                    </div>
                                    <div class="team">
                                        <p class="team-name">Barcelona</p>
                                        <img class="img-stadium" src="../assets/img/stadium (1).svg" alt="stadium">
                                        <p class="team-stadium">Camp Nou</p>
                                    </div>
                                </div>
                                <button class="btn-follow">Follow</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <TeamList />
        </div>
    </div>
</template>

<script>
    import '../assets/styles/search.scss'
    import TeamList from './TeamList.vue';

    export default {
    name: 'SearchBar',
    components: {TeamList},
  }
</script>