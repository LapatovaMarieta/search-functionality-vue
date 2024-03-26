import { createStore } from 'vuex';
import data from '../../data/teams.json';

const store = createStore({
  state: {
    teams: [], // All teams
    myTeams: [] // Teams followed by the user
  },
  mutations: {
    SET_TEAMS(state, teams) {
      state.teams = teams;
    },
    SET_MY_TEAMS(state, myTeams) {
      state.myTeams = myTeams;
    },
    TOGGLE_FOLLOW(state, teamId) {
      const team = state.teams.find(team => team.id === teamId);
      if (team) {
        team.is_following = !team.is_following;
        if (team.is_following) {
          state.myTeams.push(team);
        } else {
          state.myTeams = state.myTeams.filter(t => t.id !== teamId);
        }
      }
    }
  },
  actions: {
    async fetchTeams({ commit }) {
      try {
        // const response = await fetch('/api');
        // const data = await response.json();
        commit('SET_TEAMS', data.football_teams);
      } catch (error) {
        console.error('Error fetching teams:', error);
      }
    },
    toggleFollow({ commit }, teamId) {
      commit('TOGGLE_FOLLOW', teamId);
    }
  },
});

export default store;
