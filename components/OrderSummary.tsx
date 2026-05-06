"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, Truck, Tag } from 'lucide-react';

interface OrderSummaryProps {
  showCheckoutButton?: boolean;
  showItems?: boolean;
}

export default function OrderSummary({
  showCheckoutButton = true,
  showItems = false,
}: OrderSummaryProps) {
  const { state, subtotal } = useCart();
  const delivery = subtotal >= 35 ? 0 : 4.99;
  const tax = subtotal * 0.08;
  const total = subtotal + delivery + tax;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-4">
      <h2 className="text-lg font-bold text-gray-900">Order Summary</h2>

      {showItems && state.items.length > 0 && (
        <div className="space-y-2 pb-4 border-b border-gray-100">
          {state.items.map((item) => (
            <div key={item.product.id} className="flex items-center justify-between text-sm">
              <span className="text-gray-600 line-clamp-1 flex-1 mr-2">
                {item.product.name} x{item.quantity}
              </span>
              <span className="font-medium text-gray-800 shrink-0">
                ${(item.product.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      )}

      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="flex items-center gap-2 text-gray-600">
            <ShoppingCart size={14} />
            Subtotal ({state.items.reduce((s, i) => s + i.quantity, 0)} items)
          </span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="flex items-center gap-2 text-gray-600">
            <Truck size={14} />
            Delivery
          </span>
          <span className="font-medium">
            {delivery === 0 ? (
              <span className="text-green-600">FREE</span>
            ) : (
              "$" + delivery.toFixed(2)
            )}
          </span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="flex items-center gap-2 text-gray-600">
            <Tag size={14} />
            Tax (8%)
          </span>
          <span className="font-medium">${tax.toFixed(2)}</span>
        </div>
        {subtotal < 35 && subtotal > 0 && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-700">
            Add ${(35 - subtotal).toFixed(2)} more for free delivery!
          </div>
        )}
      </div>

      <div className="border-t border-gray-100 pt-4">
        <div className="flex items-center justify-between">
          <span className="font-bold text-gray-900">Total</span>
          <span className="text-xl font-extrabold text-green-700">${total.toFixed(2)}</span>
        </div>
      </div>

      {showCheckoutButton && (
        <Link
          href="/checkout"
          className="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 rounded-full transition-colors shadow-md"
        >
          Proceed to Checkout
        </Link>
      )}
    </div>
  );
}
