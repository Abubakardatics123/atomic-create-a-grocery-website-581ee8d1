export type Badge = "Fresh" | "Organic" | "Sale" | "New" | "Popular";

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  originalPrice?: number;
  unit: string;
  image: string;
  description: string;
  badges: Badge[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  featured?: boolean;
}

export type Category =
  | "Fruits"
  | "Vegetables"
  | "Dairy"
  | "Bakery"
  | "Beverages"
  | "Snacks"
  | "Meat"
  | "Frozen";

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}

export type CartAction =
  | { type: "ADD_ITEM"; product: Product }
  | { type: "REMOVE_ITEM"; productId: string }
  | { type: "UPDATE_QUANTITY"; productId: string; quantity: number }
  | { type: "CLEAR_CART" };

export interface Toast {
  id: string;
  message: string;
  type: "success" | "error" | "info";
}
