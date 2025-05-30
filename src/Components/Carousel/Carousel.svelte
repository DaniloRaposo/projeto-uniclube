<script lang="ts">
  import Icon from "@iconify/svelte";
  import { tick } from "svelte";

  export let images: Array<string> = [];

  let width: number;
  let currentElement = 0;
  let carousel: HTMLElement;
  let initPosition = 0;
  let initMousePosition = 0;

  let initMove = false;

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

  function initDrag(ev: MouseEvent) {
    carousel.style.setProperty("transition", "all 0s");
    initPosition = -1 * width * currentElement;
    initMousePosition = ev.clientX;
    initMove = true;
  }

  function scroll(ev: MouseEvent) {
    if (initMove) {
      carousel.style.setProperty(
        "left",
        `${Math.min(
          0,
          Math.max(
            -1 * width * (images.length - 1),
            initPosition + (ev.clientX - initMousePosition)
          )
        )}px`
      );
    }
  }

  function endDrag() {
    let currentPosition = Number(
      getComputedStyle(carousel).left.replace("px", "")
    );

    currentPosition = Math.round(currentPosition / width) * -1;

    currentElement = Math.min(Math.max(0, currentPosition), images.length - 1);

    carousel.style.setProperty("transition", "left 250ms");
    initMove = false;
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
      on:dragstart={(ev) => initDrag(ev)}
      on:dragover={(ev) => scroll(ev)}
      on:dragend={endDrag}
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
    @media only screen and (max-width: 1000px) {
      --width: 95vw;git config pull.rebase truegit config pull.rebase true
      --height: 12.5rem;git config pull.rebase true
      --max-width: 95vw;git config pull.rebase true
    }

    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.625rem;
    max-width: min(var(--max-width, 80vw), 75rem);
    width: var(--width);
    height: var(--height);
    git config pull.rebase true    cursor: pointer;

    .carousel {
      width: 100%;
      overflow-x: hidden;

      .carousel-container {
        display: grid;
        position: relative;
        grid-auto-flow: column;
        grid-auto-columns: 100%;

        img {
          width: var(--width, 100%);
          height: var(--height, 100%);
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
      color: #fff;
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
