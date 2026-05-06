"use client";

import Link from "next/link";
import { ShoppingCart, Star, Plus } from 'lucide-react';
import { Product } from "@/lib/types";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/context/ToastContext";

interface ProductCardProps {
  product: Product;
}

const badgeColors: Record<string, string> = {
  Fresh: "bg-green-100 text-green-700",
  Organic: "bg-lime-100 text-lime-700",
  Sale: "bg-red-100 text-red-600",
  New: "bg-blue-100 text-blue-600",
  Popular: "bg-amber-100 text-amber-700",
};

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem, getItemQuantity } = useCart();
  const { addToast } = useToast();
  const qty = getItemQuantity(product.id);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product);
    addToast(product.name + " added to cart!", "success");
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <Link href={"/shop/" + product.id} className="group block">
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
        {/* Image */}
        <div className="relative aspect-square bg-gray-50 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-wrap gap-1">
            {product.badges.slice(0, 2).map((badge) => (
              <span
                key={badge}
                className={"text-xs font-semibold px-2 py-0.5 rounded-full " + (badgeColors[badge] || "bg-gray-100 text-gray-600")}
              >
                {badge}
              </span>
            ))}
          </div>
          {discount && (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              -{discount}%
            </div>
          )}
          {qty > 0 && (
            <div className="absolute bottom-2 right-2 bg-green-600 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
              {qty}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="p-3">
          <p className="text-xs text-gray-400 mb-0.5">{product.category}</p>
          <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 leading-snug mb-1">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            <Star size={11} className="text-amber-400 fill-amber-400" />
            <span className="text-xs text-gray-500">{product.rating} ({product.reviewCount})</span>
          </div>

          {/* Price + Add */}
          <div className="flex items-center justify-between">
            <div>
              <span className="text-base font-bold text-gray-900">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-xs text-gray-400 line-through ml-1">${product.originalPrice.toFixed(2)}</span>
              )}
              <p className="text-xs text-gray-400">{product.unit}</p>
            </div>
            <button
              onClick={handleAdd}
              className="w-8 h-8 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center transition-colors shadow-sm"
              aria-label={"Add " + product.name + " to cart"}
            >
              <Plus size={16} />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
