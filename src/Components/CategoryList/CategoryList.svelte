<script lang="ts">
  import CategoryItem from "./CategoryItem.svelte";
  import type { TCategoryItem } from "./types";

  export let listCategories: TCategoryItem[] = [];
</script>

<div class="container">
  {#each listCategories as category}
    <CategoryItem icon={category.icon} label={category.label} />
  {/each}
</div>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.25rem;
    max-width: 95vw;
    overflow-x: scroll;
  }
</style>
