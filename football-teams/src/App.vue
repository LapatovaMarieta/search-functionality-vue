
<template>
  <div class="page">
    <PageHeader />
    <SearchBar />
</div>
</template>

<script >
  import PageHeader from './components/PageHeader.vue';
  import SearchBar from './components/SearchBar.vue';
  import './assets/styles/main.scss'

  export default {
    name: 'App',
    components: {PageHeader, SearchBar},
  }
</script>



