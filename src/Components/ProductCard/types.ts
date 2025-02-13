export type TProduct = {
  image: string;
  price: number;
  shopName: string;
  shopLink: string;
  subtitleType: "discount" | "text";
  title: string;
  priceLabel: string;
  subtitle: string;
  discountPercent: number;
};
