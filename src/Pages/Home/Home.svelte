<script lang="ts">
  import Carousel from "../../Components/Carousel/Carousel.svelte";
  import CategoryList from "../../Components/CategoryList/CategoryList.svelte";
  import type { TCategoryItem } from "../../Components/CategoryList/types";
  /**
   * images that will be displayed in carousel
   */
  export let images: Array<string> = [];
  /**
   * List of categories
   */
  export let listCategories: TCategoryItem[] = [];
</script>

<div class="container">
  <Carousel {images} />
  <CategoryList {listCategories} />
</div>

<style lang="scss">
  .container {
    margin: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
  }
</style>
