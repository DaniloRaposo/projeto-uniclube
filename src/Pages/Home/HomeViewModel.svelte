<script lang="ts">
  import Home from "./Home.svelte";
  import Image1 from "../../assets/image1.webp";
  import Image2 from "../../assets/image2.webp";

  const images = [Image1, Image2];
  const listCategories = [
    {
      icon: "iconoir:glasses",
      label: "Oticas",
    },
    {
      icon: "tabler:paw",
      label: "Pets",
    },
    {
      icon: "iconoir:glasses",
      label: "Oticas",
    },
    {
      icon: "tabler:paw",
      label: "Pets",
    },
    {
      icon: "iconoir:glasses",
      label: "Oticas",
    },
    {
      icon: "tabler:paw",
      label: "Pets",
    },
  ];
</script>

<Home {images} {listCategories} />
