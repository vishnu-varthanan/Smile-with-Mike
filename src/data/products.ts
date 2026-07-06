export interface Product {
  id: string;
  name: string;
  price: number;
  tag: string;
}

export const PRODUCTS: Product[] = [
  { id: "tee-classic", name: "Classic Mike Tee", price: 599, tag: "Bestseller" },
  { id: "sticker-pack", name: "Sticker Pack (x8)", price: 149, tag: "New" },
  { id: "hoodie-mike", name: "Mike Hoodie", price: 1299, tag: "Bestseller" },
  { id: "print-a3", name: "A3 Character Print", price: 349, tag: "" },
  { id: "totebag", name: "Customized T-shirt", price: 449, tag: "New" },
  { id: "phonecase", name: "Phone Case", price: 399, tag: "" },
];
