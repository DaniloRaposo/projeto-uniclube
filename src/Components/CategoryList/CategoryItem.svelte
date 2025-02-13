<script lang="ts">
  import Icon from "@iconify/svelte";

  /**
   * Label of category item
   */
  export let label = "";

  /**
   * Icon of category item
   */
  export let icon = "";
</script>

<div class="container">
  <div class="icon">
    <Icon
      {icon}
      font-size="55"
      style="color: var(--color, #f47920); transition-duration: 250ms;"
    ></Icon>
  </div>
  <p>{label}</p>
</div>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 6rem;
      height: 6rem;
      border-radius: 50%;
      background-color: var(--background-color, #eae0d5);
      transition-duration: 250ms;
    }

    p {
      color: #737373;
      font-size: 1rem;
      font-weight: var(--label-font, 400);
      transition-duration: 250ms;
      margin: 0.375rem;
    }
  }

  .container:hover {
    --background-color: #f47920;
    --label-font: 700;
    --color: #eae0d5;
  }
</style>
