<script lang="ts">
  import HeaderComponent from "./components/HeaderComponent.svelte";
  import MenuHeader from "./components/MenuHeader.svelte";
  import { fade } from "svelte/transition";
  import type { TStore, TDepartment } from "./components/types";

  /**
   * List of stores displayed in menu
   */
  export let listStore: TStore[] = [];

  /**
   * List of departments displayed in menu
   */
  export let listDepartments: TDepartment[] = [];

  let menuOpened = false;
  let blur: HTMLElement;

  function openMenu() {
    menuOpened = !menuOpened;
  }

  function closeMenu(ev: Event) {
    if (ev.target === blur && menuOpened) {
      menuOpened = false;
    }
  }
</script>

<div class="container">
  <div class="header">
    <HeaderComponent on:openMenu={openMenu} bind:opened={menuOpened} />
  </div>
  {#if menuOpened}
    <div
      bind:this={blur}
      class:blur={menuOpened}
      on:click={(ev) => closeMenu(ev)}
    ></div>
    <div class="menu" in:fade={{ duration: 250 }}>
      <MenuHeader {listStore} {listDepartments} />
    </div>
  {/if}
</div>

<style lang="scss">
  .container {
    position: relative;

    .blur {
      background-color: rgba(10, 10, 10, 0.4);
      position: absolute;
      width: 100%;
      height: 100vh;
      top: 0;
      z-index: 100;
      transition: 500ms;
    }

    .header {
      position: relative;
      width: 100%;
      z-index: 1000;
    }

    .menu {
      position: absolute;
      top: 95%;
      left: 15%;
      z-index: 1500;
    }
  }
</style>
