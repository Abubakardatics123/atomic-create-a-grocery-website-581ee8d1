"use client";

import Link from "next/link";
import { Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from "@/lib/types";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/context/ToastContext";
import QuantitySelector from "./QuantitySelector";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();
  const { addToast } = useToast();
  const { product, quantity } = item;

  const handleRemove = () => {
    removeItem(product.id);
    addToast(product.name + " removed from cart", "error");
  };

  return (
    <div className="flex items-center gap-4 py-4 border-b border-gray-100 last:border-0">
      <Link href={"/shop/" + product.id} className="shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-20 h-20 object-cover rounded-xl bg-gray-50"
        />
      </Link>
      <div className="flex-1 min-w-0">
        <Link href={"/shop/" + product.id}>
          <h3 className="font-semibold text-gray-800 text-sm hover:text-green-700 transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-gray-400 mt-0.5">{product.unit}</p>
        <div className="flex items-center justify-between mt-2">
          <QuantitySelector
            quantity={quantity}
            onIncrease={() => updateQuantity(product.id, quantity + 1)}
            onDecrease={() => updateQuantity(product.id, quantity - 1)}
            size="sm"
          />
          <div className="text-right">
            <p className="font-bold text-gray-900">${(product.price * quantity).toFixed(2)}</p>
            <p className="text-xs text-gray-400">${product.price.toFixed(2)} each</p>
          </div>
        </div>
      </div>
      <button
        onClick={handleRemove}
        className="shrink-0 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
        aria-label={"Remove " + product.name + " from cart"}
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
}
