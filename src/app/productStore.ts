import axios from "axios";
import { create } from "zustand";

interface Product {
  id: string;
  title: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  comments: string;
  images: string[];
}

interface ProductState {
  loading: boolean;
  products: Product[];
  error: string;
  fetchProducts: () => void;
}

export const useProductStore = create<ProductState>((set) => ({
  loading: false,
  products: [],
  error: "",
  fetchProducts: async () => {
    set({ loading: true });
    try {
      const res = await axios.get("http://localhost:3000/products");
      set({ loading: false, products: res.data, error: "" });
    } catch (err) {
      set({ loading: false, products: [], error: (err as Error).message });
    }
  },
}));
