<script lang="ts">
  import Icon from "@iconify/svelte";

  import Logo from "../../assets/Frame.svg";

  let arrowIcon = "tabler:chevron-down";
  let menuOpened = false;

  function openMenu() {
    menuOpened = !menuOpened;
  }
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
  <div class="footer">
    <div class="menu-footer" on:click={openMenu}>
      <Icon
        icon="material-symbols:menu-rounded"
        style="color: #f47920; font-size: 30px;"
      />
      <p class="department">Departamentos</p>
      <Icon icon={arrowIcon} style="color: #f47920; font-size: 22px;" />
      <div class="vline"></div>
      <p>Desconto Cliente Unimed Natal</p>
    </div>
    <div>
      <p>Venda no Uniclube</p>
    </div>
  </div>
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

    p {
      margin: 0;
      color: #3f3f3f;
      font-family: "Source Sans 3";
    }

    .top-line {
      background-color: #f47920;
      width: 100%;
      height: 0.5rem;
    }

    .content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 1.25rem;
      padding-inline: 10%;
      align-items: center;
      height: 100%;
      width: 80%;
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
            font-size: 1rem;
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
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      height: fit-content;
      width: 80%;
      padding: 0.625rem 10%;
      background-color: #f7f3ee;

      .menu-footer {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.375rem;
      }

      p {
        font-size: 1.125rem;
        cursor: pointer;
      }

      .department {
        font-weight: 700;
      }

      .vline {
        border: 1.5px solid #eae0d5;
        border-radius: 1px;
        height: 1.875rem;
        width: 0;
        margin-inline: 1rem;
      }
    }
  }
</style>
