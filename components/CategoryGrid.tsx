import Link from "next/link";
import { categories } from "@/lib/data";

export default function CategoryGrid() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Shop by Category</h2>
            <p className="text-gray-500 mt-1">Find exactly what you need</p>
          </div>
          <Link href="/shop" className="text-sm font-semibold text-green-600 hover:text-green-700 transition-colors">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={"/shop?category=" + cat.name}
              className={"group flex flex-col items-center gap-2 p-4 rounded-2xl border-2 hover:border-green-400 hover:shadow-md transition-all duration-200 " + cat.color}
            >
              <span className="text-3xl group-hover:scale-110 transition-transform duration-200">
                {cat.icon}
              </span>
              <span className="text-xs font-semibold text-gray-700 text-center">{cat.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
