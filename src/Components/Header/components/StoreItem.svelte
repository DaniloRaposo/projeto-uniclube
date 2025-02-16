<script lang="ts">
  /**
   * Path with image of the store
   */
  export let storeImage = "";

  export let label = "";
</script>

<div class="container">
  <div class="image-container">
    <img src={storeImage} />
  </div>

  <p class="label">{label}</p>
</div>

<link
  href="https://fonts.googleapis.com/css?family=Source Sans 3"
  rel="stylesheet"
/>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
    transition: 500ms;

    .image-container {
      width: 5.625rem;
      height: 5.625rem;
      border-radius: 50%;
      cursor: pointer;

      img {
        width: 5.625rem;
        height: 5.625rem;
        border-radius: 50%;
      }
    }

    .label {
      text-align: center;
      font-size: 1rem;
      font-weight: var(--font-weight, 400);
      margin: 0;
      color: #3f3f3f;
      font-family: "Source Sans 3";
    }
  }

  .container:hover {
    --font-weight: 700;

    translate: 0 -0.25rem;
  }
</style>
