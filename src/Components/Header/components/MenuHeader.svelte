<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Icon from "@iconify/svelte";
  import StoreItem from "./StoreItem.svelte";
  import type { TStore, TDepartment } from "./types";

  /**
   * List of stores displayed in menu
   */
  export let listStore: TStore[] = [];

  /**
   * List of departments displayed in menu
   */
  export let listDepartments: TDepartment[] = [];

  const dispatch = createEventDispatcher();

  function seeMoreDepartments() {
    dispatch("seeMoreDepartments");
  }
</script>

<div class="container">
  <div class="categories-container">
    {#each listDepartments as department}
      <div
        class="department-container"
        class:all={department.lastItemType == "all-departments"}
      >
        <p class="title">{department.name}</p>
        <div class="subdepartment-container">
          {#each department.subdepartments as subdepartment}
            <p class="subdepartment">{subdepartment}</p>
          {/each}
        </div>
        {#if department.lastItemType == "all-departments"}
          <a href="/" class="last-item" onclick={seeMoreDepartments}>
            Ver todos os departamentos
          </a>
        {:else if department.lastItemType == "see-more"}
          <p class="last-item">
            Ver mais
            <Icon
              icon="tabler:chevron-down"
              style="color: #f47920; font-size: 20px;"
            />
          </p>
        {/if}
      </div>
    {/each}
  </div>
  <div class="stores-container">
    {#each listStore as store}
      <StoreItem storeImage={store.image} label={store.label} />
    {/each}
    <div class="more">
      <div class="icon-container">
        <Icon icon="proicons:more" />
      </div>

      <p class="label">Saiba Mais</p>
    </div>
  </div>
</div>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    width: 70vw;
    height: 70vh;
    border-radius: 0.75rem;
    background-color: #fff;

    .categories-container {
      display: grid;
      grid-auto-flow: column;
      grid-template-rows: 1fr 1fr;
      width: 100%;
      height: 100%;
      padding: 1.25rem;
      border-radius: 0 0.75rem 0.75rem 0;

      p {
        margin: 0.25rem 0;
        font-family: "Source Sans 3";
        cursor: pointer;
      }

      .department-container {
        display: flex;
        flex-direction: column;

        .title {
          font-size: 1.125rem;
          font-weight: 700;
          color: #3f3f3f;
        }

        .subdepartment-container {
          display: flex;
          flex-direction: column;
          padding-left: 0.5rem;
          font-size: 1.125rem;
          color: #3f3f3f;
        }

        .last-item {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 2px;
          font-size: 0.875rem;
          color: #3f3f3f;
        }
      }

      .all {
        grid-row: 1 / span 2;
      }
    }

    .stores-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: start;
      gap: 0.625rem;
      height: fit-content;
      width: calc(100% - 5rem);
      padding: 2.5rem;
      background-color: #faf7f4;
      border-radius: 0 0 0.75rem 0.75rem;

      .more {
        display: flex;
        flex-direction: column;
        gap: 0.375rem;
        transition: 500ms;

        .icon-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 5.625rem;
          height: 5.625rem;
          border-radius: 50%;
          cursor: pointer;
          background-color: #fff;
          color: #f47920;
          font-size: 48px;
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

      .more:hover {
        --font-weight: 700;
        translate: 0 -0.25rem;
      }
    }
  }
</style>
