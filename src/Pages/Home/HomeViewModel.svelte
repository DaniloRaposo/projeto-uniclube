<script lang="ts">
  import Home from "./Home.svelte";
  import type { TProduct } from "../../Components/ProductCard/types";
  import Image1 from "../../assets/image1.webp";
  import Image2 from "../../assets/image2.webp";
  import Produto1 from "../../assets/produto1.png";
  import Produto2 from "../../assets/produto2.png";
  import Produto3 from "../../assets/produto3.png";
  import Produto4 from "../../assets/produto4.png";
  import Produto5 from "../../assets/produto5.png";

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
  const listProducts: TProduct[] = [
    {
      image: Produto1,
      price: 29.61,
      shopName: "Sr. Castanha",
      shopLink: "",
      subtitleType: "discount",
      title: "Garrafa de areia colorida",
      priceLabel: "R$ 32,90",
      subtitle: "3x R$ 6,33 sem juros no cartão ou R$ 18,50 no pix",
      discountPercent: 10,
    },
    {
      image: Produto2,
      price: 49.9,
      shopName: "Dandara",
      shopLink: "",
      subtitleType: "text",
      title: "Bolsas variadas de fibra de Açaí",
      priceLabel: "A partir de",
      subtitle: "2x R$ 24,95 sem juros no cartão ou R$ 38,50 no pix",
      discountPercent: 0,
    },
    {
      image: Produto3,
      price: 14.9,
      shopName: "Patricia Arte",
      shopLink: "",
      subtitleType: "discount",
      title: "Galinha e pintinhos de barro feitas a mão",
      priceLabel: "R$ 32,90",
      subtitle: "ou 13,00 no pix",
      discountPercent: 10,
    },
    {
      image: Produto4,
      price: 29.9,
      shopName: "Sebastiao Salgado",
      shopLink: "",
      subtitleType: "text",
      title: "Panelas de barro de São Gonçado do Amarante",
      priceLabel: "Apenas",
      subtitle: "2x R$ 16,95 no cartão ou R$ 23,90 no pix",
      discountPercent: 0,
    },
    {
      image: Produto5,
      price: 9.9,
      shopName: "Manu Intimates",
      shopLink: "",
      subtitleType: "text",
      title: "Artesanato de bonecas negras feitas com cabaça",
      priceLabel: "A partir de",
      subtitle: "ou 2x R$ 7,45 no cartão",
      discountPercent: 0,
    },
  ];
</script>

<Home {images} {listCategories} {listProducts} />
