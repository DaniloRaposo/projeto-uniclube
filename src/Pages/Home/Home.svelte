<script lang="ts">
  import Carousel from "../../Components/Carousel/Carousel.svelte";
  import CategoryList from "../../Components/CategoryList/CategoryList.svelte";
  import ProductCard from "../../Components/ProductCard/ProductCard.svelte";
  import type { TCategoryItem } from "../../Components/CategoryList/types.ts";
  import type { TProduct } from "../../Components/ProductCard/types.ts";
  /**
   * images that will be displayed in carousel
   */
  export let images: Array<string> = [];
  /**
   * List of categories
   */
  export let listCategories: TCategoryItem[] = [];

  export let listProducts: TProduct[] = [];
</script>

<div class="container">
  <Carousel {images} />
  <CategoryList {listCategories} />

  <div class="discounts-container">
    <p class="label">Descontos cliente <b>Unimed Natal</b></p>
    <div class="card-container">
      {#each listProducts as product}
        <ProductCard
          image={product.image}
          price={product.price}
          shopName={product.shopName}
          shopLink={product.shopLink}
          subtitleType={product.subtitleType}
          title={product.title}
          priceLabel={product.priceLabel}
          subtitle={product.subtitle}
          discountPercent={product.discountPercent}
        />
      {/each}
    </div>
  </div>
</div>

<link
  href="https://fonts.googleapis.com/css?family=Source Sans 3"
  rel="stylesheet"
/>

<style lang="scss">
  .container {
    @media only screen and (max-width: 600px) {
      --padding: 0.625rem;
    }

    width: calc(100% - 2 * var(--padding, 3.75rem));
    padding: var(--padding, 3.75rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
    background-color: #ffffff;

    .discounts-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 2.5rem;
      gap: 0.9375rem;
      background: url("../../assets/unimed.png");
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 0.3125rem;

      .label {
        color: #ffffff;
        font-family: "Source Sans 3";
        font-size: 1.875rem;
        margin: 0;
      }
      .card-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0.625rem;
        height: fit-content;
      }
    }
  }
</style>
