<script lang="ts">
  import Router from "svelte-spa-router";
  import Header from "./Components/Header/Header.svelte";
  import Image1 from "./assets/riocenter.webp";
  import Image2 from "./assets/ecologica.webp";
  import type {
    TStore,
    TDepartment,
  } from "./Components/Header/components/types.ts";

  import routes from "./routes";

  const listStore: TStore[] = [
    { image: Image1, label: "Rio Center" },
    { image: Image2, label: "Ecologica" },
  ];

  const listDepartments: TDepartment[] = [
    {
      name: "Saúde e Bem-estar",
      subdepartments: ["Beleza", "Cuidados Pessoais", "Esportes e Aventuras"],
      lastItemType: "see-more",
    },
    {
      name: "Estilo",
      subdepartments: ["Vestuário", "Calçados", "Bijuteria e Acessórios"],
      lastItemType: "see-more",
    },
    {
      name: "Casa",
      subdepartments: [
        "Casa, Jardim e Limpeza",
        "Móveis e Decoração",
        "Construção",
      ],
      lastItemType: "see-more",
    },
    {
      name: "Tincidut",
      subdepartments: ["Tempor", "Consequat"],
      lastItemType: "see-more",
    },
    {
      name: "Eletro",
      subdepartments: [
        "Eletrodomésticos",
        "Celulares, Tablets, ...",
        "Câmeras e Acessórios",
      ],
      lastItemType: "see-more",
    },
    {
      name: "Ipsum Lorem",
      subdepartments: ["Sit Amet", "Consequat", "Pellentesque"],
      lastItemType: "see-more",
    },
    {
      name: "Mais Departamentos",
      subdepartments: [
        "Petshop",
        "Produtos Regionais",
        "Brinquedos e Jogos",
        "Livros",
        "Música e Hobbies",
        "Bebês",
        "Alimentos e Bebidas",
        "Agro e Industria",
      ],
      lastItemType: "all-departments",
    },
  ];
</script>

<main>
  <div class="router-container">
    <div class="header">
      <Header {listStore} {listDepartments} />
    </div>
    <div class="content">
      <Router {routes} />
    </div>
  </div>
</main>

<style lang="scss">
  .router-container {
    width: 100%;
    height: 100%;
    position: relative;

    .header {
      width: 100%;
      height: fit-content;
      position: sticky;
      top: 0;
      z-index: 1000;
    }
  }
</style>
