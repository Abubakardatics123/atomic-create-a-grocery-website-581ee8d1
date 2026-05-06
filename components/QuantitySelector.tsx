"use client";

import { Minus, Plus } from 'lucide-react';

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  min?: number;
  max?: number;
  size?: "sm" | "md" | "lg";
}

export default function QuantitySelector({
  quantity,
  onIncrease,
  onDecrease,
  min = 1,
  max = 99,
  size = "md",
}: QuantitySelectorProps) {
  const btnSize = size === "sm" ? "w-7 h-7" : size === "lg" ? "w-10 h-10" : "w-9 h-9";
  const textSize = size === "sm" ? "text-sm w-6" : size === "lg" ? "text-lg w-10" : "text-base w-8";
  const iconSize = size === "sm" ? 12 : size === "lg" ? 18 : 16;

  return (
    <div className="flex items-center gap-1 bg-gray-100 rounded-full p-1">
      <button
        onClick={onDecrease}
        disabled={quantity <= min}
        className={"rounded-full bg-white shadow-sm flex items-center justify-center text-gray-700 hover:bg-green-50 hover:text-green-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors " + btnSize}
        aria-label="Decrease quantity"
      >
        <Minus size={iconSize} />
      </button>
      <span className={"text-center font-bold text-gray-800 " + textSize}>{quantity}</span>
      <button
        onClick={onIncrease}
        disabled={quantity >= max}
        className={"rounded-full bg-white shadow-sm flex items-center justify-center text-gray-700 hover:bg-green-50 hover:text-green-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors " + btnSize}
        aria-label="Increase quantity"
      >
        <Plus size={iconSize} />
      </button>
    </div>
  );
}
