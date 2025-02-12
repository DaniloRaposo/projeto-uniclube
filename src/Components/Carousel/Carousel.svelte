<script lang="ts">
  import Icon from "@iconify/svelte";
  import { tick } from "svelte";

  export let images: Array<string> = [];

  let width: number;
  let currentElement = 0;
  let carousel: HTMLElement;

  function previous(): void {
    // don't move when width is an mobile width
    if (currentElement <= 0 || width < 600) {
      return;
    }

    currentElement -= 1;
    carousel.style.setProperty("transition", "left 250ms");
    carousel.style.setProperty("left", `-${width * currentElement}px`);
  }

  function next(): void {
    // don't move when width is an mobile width
    if (currentElement >= images.length - 1 || width < 600) {
      return;
    }

    currentElement += 1;
    carousel.style.setProperty("transition", "left 250ms");
    carousel.style.setProperty("left", `-${width * currentElement}px`);
  }
</script>

<div class="container">
  <div class="icon left" on:click={previous}>
    <Icon icon="tabler:chevron-left" font-size="20" />
  </div>
  <div class="carousel">
    <div
      class="carousel-container"
      id="carousel-container"
      bind:clientWidth={width}
      bind:this={carousel}
    >
      {#each images as image}
        <img src={image} alt="carousel item" />
      {/each}
    </div>
  </div>
  <div class="icon right" on:click={next}>
    <Icon icon="tabler:chevron-right" font-size="20" />
  </div>
</div>

<style lang="scss">
  .container {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.625rem;
    height: min(18.75rem, 20vh);
    cursor: pointer;

    .carousel {
      width: 100%;
      overflow-x: hidden;

      .carousel-container {
        display: grid;
        position: relative;
        grid-auto-flow: column;
        grid-auto-columns: 100%;
        transition-duration: 250ms;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .icon {
      @media only screen and (max-width: 600px) {
        display: none; // not show icon in mobile screens
      }

      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.75rem;
      height: 3.9375rem;
      border-radius: 1.875rem;
      background-color: #f47920;
      opacity: var(--icon-opacity, 0);
      z-index: 1;
      transition-duration: 300ms;
    }

    .left {
      margin-left: -0.3125rem;
      left: 0;
    }

    .right {
      margin-right: -0.3125rem;
      right: 0;
    }
  }

  .container:hover {
    --icon-opacity: 1;
  }
</style>
