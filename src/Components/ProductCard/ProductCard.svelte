<script lang="ts">
  export let image = "";

  export let price = 0;

  export let shopName = "";

  export let shopLink = "";

  /**
   * select if the subtitle above price will be
   * a discount or a text
   */
  export let subtitleType: "discount" | "text";

  export let title = "";

  export let priceLabel = "";

  export let subtitle = "";

  /**
   * Display percentage of discount
   */
  export let discountPercent = 0;
</script>

<div class="container">
  <div class="image-container">
    <img src={image} alt="produto" />
  </div>
  <div class="product-info">
    <p class="title">{title}</p>

    <div class="price-container">
      {#if subtitleType === "text"}
        <p class="subtitle">{subtitle}</p>
      {:else if subtitleType == "discount"}
        <div class="discount-container">
          <p class="subtitle discount">{subtitle}</p>
          <p class="percent">{discountPercent}% OFF</p>
        </div>
      {/if}
      <p class="price">R$ {price.toFixed(2)}</p>
    </div>

    <p class="subtitle">{priceLabel}</p>

    <p class="subtitle">Vendido por <a href={shopLink}>{shopName}</a></p>
  </div>
</div>

<style lang="scss">
  .container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    gap: 0;
    width: 12.5rem;
    border-radius: 0.3125rem;
    background-color: #ffffff;

    p {
      margin: 0;
    }

    .image-container {
      border-radius: 0.3125rem 0 0 0.3125rem;
      width: 100%;

      img {
        width: 100%;
      }
    }

    .product-info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      margin: 1.25rem;

      .title,
      .price {
        color: #3f3f3f;
      }

      .subtitle {
        color: #737373;
        font-size: 0.875rem;
      }

      .discount {
        color: #cc0a12;
      }

      .title {
        font-size: 1.125rem;
      }

      .price {
        font-size: 1.625rem;
      }
    }
  }
</style>
