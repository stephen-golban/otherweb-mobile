export interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
  description: string;
  category: ProductCategory;
}

export interface ProductCategory {
  id: number;
  name: string;
  image: string;
}
