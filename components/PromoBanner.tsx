import Link from "next/link";
import { ArrowRight } from 'lucide-react';

export default function PromoBanner() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Promo 1 */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-600 to-green-400 p-8 text-white">
            <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-white/10 rounded-full" />
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full" />
            <div className="relative z-10">
              <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                LIMITED TIME
              </span>
              <h3 className="text-2xl font-extrabold mb-2">Fresh Organic Produce</h3>
              <p className="text-green-100 text-sm mb-4">Up to 30% off on all organic fruits and vegetables this week only.</p>
              <Link
                href="/shop?category=Fruits"
                className="inline-flex items-center gap-2 bg-white text-green-700 font-bold text-sm px-5 py-2.5 rounded-full hover:bg-green-50 transition-colors"
              >
                Shop Now <ArrowRight size={16} />
              </Link>
            </div>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 text-7xl opacity-30">🥦</div>
          </div>

          {/* Promo 2 */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500 to-orange-400 p-8 text-white">
            <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-white/10 rounded-full" />
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full" />
            <div className="relative z-10">
              <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                DAILY DEAL
              </span>
              <h3 className="text-2xl font-extrabold mb-2">Bakery Fresh Daily</h3>
              <p className="text-amber-100 text-sm mb-4">Artisan breads, pastries, and muffins baked fresh every morning.</p>
              <Link
                href="/shop?category=Bakery"
                className="inline-flex items-center gap-2 bg-white text-amber-700 font-bold text-sm px-5 py-2.5 rounded-full hover:bg-amber-50 transition-colors"
              >
                Explore Bakery <ArrowRight size={16} />
              </Link>
            </div>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 text-7xl opacity-30">🥐</div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "500+", label: "Fresh Products" },
            { value: "10k+", label: "Happy Customers" },
            { value: "2hr", label: "Delivery Time" },
            { value: "100%", label: "Fresh Guarantee" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4 bg-gray-50 rounded-2xl">
              <p className="text-2xl font-extrabold text-green-700">{stat.value}</p>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
