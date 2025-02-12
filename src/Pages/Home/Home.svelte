<script lang="ts">
  import Carousel from "../../Components/Carousel/Carousel.svelte";
  // images that will be displayed in carousel
  export let images: Array<string> = [];
</script>

<div class="container">
  <Carousel {images} />
</div>

<style lang="scss">
  .container {
    margin: 15%;
  }
</style>
