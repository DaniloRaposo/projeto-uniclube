<script lang="ts">
  import Router from "svelte-spa-router";
  import Header from "./Components/Header/Header.svelte";

  import routes from "./routes";
</script>

<main>
  <div class="router-container">
    <div class="header">
      <Header />
    </div>
    <div class="content">
      <Router {routes} />
    </div>
  </div>
</main>

<style lang="scss">
  .router-container {
    width: 100%;
    height: 100%;
    position: relative;

    .header {
      width: 100%;
      height: fit-content;
      position: sticky;
      top: 0;
      z-index: 1000;
    }
  }
</style>
