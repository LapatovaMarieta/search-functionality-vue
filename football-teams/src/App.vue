
<template>
  <div class="page">
    <Header />
    <SearchBar />
</div>
</template>

<script >
  import Header from './components/Header.vue';
  import SearchBar from './components/SearchBar.vue';
  import './assets/styles/main.scss'

  export default {
    name: 'App',
    components: {Header, SearchBar},
  }
</script>



