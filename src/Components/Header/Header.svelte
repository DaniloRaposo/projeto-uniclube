<script lang="ts">
  import Icon from "@iconify/svelte";

  import Logo from "../../assets/Frame.svg";
</script>

<div class="container">
  <div class="top-line"></div>
  <div class="content">
    <img src={Logo} alt="logo" />

    <div class="input-container">
      <input placeholder="O que você gostaria hoje?" class="search" />
      <div class="search-icon-container">
        <Icon icon="fluent:search-20-filled" />
      </div>
    </div>

    <div class="info-container">
      <div class="icon-container">
        <Icon icon="humbleicons:location" />
      </div>
      <div class="text">
        <p class="first-line">Onde</p>
        <p>voce está?</p>
      </div>
    </div>

    <div class="info-container">
      <div class="icon-container">
        <Icon icon="charm:person" />
      </div>
      <div class="text">
        <p class="first-line">Faça login</p>
        <p>ou cadastre-se</p>
      </div>
    </div>

    <div class="icon-container">
      <Icon icon="ri:shopping-cart-line" />
    </div>
  </div>
  <div class="footer"></div>
</div>

<link
  href="https://fonts.googleapis.com/css?family=Source Sans 3"
  rel="stylesheet"
/>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    height: 11.25rem;
    width: 100%;
    box-shadow: 3px 3px 3px rgba(230, 230, 230, 0.5);

    .top-line {
      background-color: #f47920;
      width: 100%;
      height: 0.5rem;
    }

    .content {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 1.25rem;
      align-items: center;
      height: 100%;
      width: 100%;
      background-color: #eae0d5;

      .input-container {
        display: grid;
        grid: 1fr / 1fr;
        width: 40%;
        height: 3.375rem;

        & > * {
          grid-column: 1 / 2;
          grid-row: 1 / 2;
        }

        .search-icon-container {
          display: flex;
          flex-direction: row;
          justify-content: end;
          align-items: center;
          padding-inline: 1.25rem;
          color: #ababab;
          font-size: 1.375rem;
        }
      }
      .search {
        border-radius: 1.875rem;
        font-size: 1.125rem;
        font-weight: 700;
        padding-inline: 1.25rem;
        border-color: transparent;
        box-shadow: 3px 4px 3px rgba(100, 100, 100, 0.4);
      }

      .info-container {
        display: flex;
        flex-direction: row;
        gap: 0.375rem;

        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          line-height: 16px;
          p {
            margin: 0;
            color: #3f3f3f;
            font-size: 1rem;
            font-family: "Source Sans 3";
          }

          .first-line {
            font-weight: 700;
          }
        }
      }

      .icon-container {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.375rem;
        height: 2.25rem;
        width: 2.25rem;
        border-radius: 50%;
        background-color: #f7f3ee;
        color: #f47920;
      }
    }

    .footer {
      height: fit-content;
      width: calc(100% - 10rem);
      padding: 0.625rem 5rem;
      background-color: #f7f3ee;
    }
  }
</style>
