export const dynamic = "force-dynamic";
import HeroBanner from "@/components/HeroBanner";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import PromoBanner from "@/components/PromoBanner";
import { products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export default function HomePage() {
  const saleProducts = products.filter((p) => p.badges.includes("Sale")).slice(0, 4);
  const organicProducts = products.filter((p) => p.badges.includes("Organic")).slice(0, 4);

  return (
    <div>
      <HeroBanner />
      <CategoryGrid />
      <FeaturedProducts />
      <PromoBanner />

      {/* Sale Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                <span className="text-red-500">🔥</span> Today&apos;s Deals
              </h2>
              <p className="text-gray-500 mt-1">Limited time offers — grab them before they&apos;re gone</p>
            </div>
            <Link href="/shop" className="text-sm font-semibold text-green-600 hover:text-green-700 transition-colors">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {saleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Organic Section */}
      <section className="py-12 bg-lime-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                <span>🌿</span> Organic Picks
              </h2>
              <p className="text-gray-500 mt-1">Certified organic, grown without pesticides</p>
            </div>
            <Link href="/shop?badge=Organic" className="text-sm font-semibold text-green-600 hover:text-green-700 transition-colors">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {organicProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / App CTA */}
      <section className="py-16 bg-green-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-3">Get Fresh Deals in Your Inbox</h2>
          <p className="text-green-200 mb-8">Subscribe to our newsletter and get 10% off your first order plus weekly deals.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-5 py-3 rounded-full text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-lime-400"
            />
            <button
              type="submit"
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-3 rounded-full transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-green-300 text-xs mt-4">No spam, unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  );
}
