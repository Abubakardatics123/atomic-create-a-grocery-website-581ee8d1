import { getRelatedProducts } from "@/lib/data";
import ProductCard from "./ProductCard";

interface RelatedProductsProps {
  productId: string;
  category: string;
}

export default function RelatedProducts({ productId, category }: RelatedProductsProps) {
  const related = getRelatedProducts(productId, category);

  if (related.length === 0) return null;

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">You Might Also Like</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {related.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
