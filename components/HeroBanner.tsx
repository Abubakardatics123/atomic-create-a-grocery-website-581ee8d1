import Link from "next/link";
import { ArrowRight, Star, Truck, Shield } from 'lucide-react';

export default function HeroBanner() {
  return (
    <section className="relative bg-gradient-to-br from-green-700 via-green-600 to-green-500 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-lime-300 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="text-white space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              <Star size={14} className="text-amber-300 fill-amber-300" />
              <span>Free delivery on orders over $35</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Fresh Groceries
              <span className="block text-lime-300">Delivered Fast</span>
            </h1>
            <p className="text-green-100 text-lg leading-relaxed max-w-md">
              Shop from hundreds of fresh, organic, and locally sourced products. From farm to your table in under 2 hours.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 bg-white text-green-700 hover:bg-green-50 font-bold px-6 py-3 rounded-full transition-colors shadow-lg"
              >
                Shop Now
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/shop?category=Fruits"
                className="inline-flex items-center gap-2 border-2 border-white/50 text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-full transition-colors"
              >
                Browse Deals
              </Link>
            </div>
            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 pt-2">
              <div className="flex items-center gap-2 text-green-100 text-sm">
                <Truck size={16} className="text-lime-300" />
                <span>Same-day delivery</span>
              </div>
              <div className="flex items-center gap-2 text-green-100 text-sm">
                <Shield size={16} className="text-lime-300" />
                <span>100% fresh guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-green-100 text-sm">
                <Star size={16} className="text-lime-300 fill-lime-300" />
                <span>4.9/5 from 10k+ reviews</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-white/10 rounded-3xl backdrop-blur-sm" />
              <img
                src="/images/fresh-grocery-basket-colorful.jpg"
                alt="Fresh grocery basket with colorful produce"
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
              {/* Floating cards */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-xl">🥦</div>
                <div>
                  <p className="text-xs text-gray-500">Today&apos;s Pick</p>
                  <p className="text-sm font-bold text-gray-800">Organic Veggies</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-3">
                <p className="text-xs text-gray-500">Orders Today</p>
                <p className="text-lg font-extrabold text-green-600">1,240+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
