// src/app/products/[id]/page.tsx
import { demoProducts } from '@/data/products';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// Currency formatter defined INLINE
const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
  }).format(amount);
};

// Function to generate static params for Next.js 13/14
export async function generateStaticParams() {
  return demoProducts.map((product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const productId = parseInt(params.id);
  const product = demoProducts.find(p => p.id === productId);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Product Image Section */}
        <div className="lg:w-1/2 relative h-96 bg-gray-100 rounded-xl overflow-hidden shadow-lg">
          <Image
            src={product.imageUrl}
            alt={product.title}
            fill
            style={{ objectFit: 'contain' }}
            className="transition-opacity duration-500"
            sizes="(max-width: 1024px) 100vw, 50vw"
            onError={(e) => {
              e.currentTarget.src = "/placeholder-product.png";
              e.currentTarget.style.objectFit = 'contain';
            }}
          />
        </div>

        {/* Product Details Section */}
        <div className="lg:w-1/2">
          <p className="text-sm font-medium text-secondary-color uppercase tracking-wider mb-2">
            {product.category}
          </p>
          <h1 className="text-4xl font-bold text-text-color mb-4">
            {product.title}
          </h1>
          <p className="text-3xl font-extrabold text-primary-color mb-6">
            {formatCurrency(product.price)}
          </p>
          
          <h2 className="text-xl font-semibold text-gray-700 mb-3 border-b pb-2">
            Product Description
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            {product.description}
          </p>

          {/* Add to Cart Button */}
          <button
            // onClick={() => addToCart(product)} // Assuming CartContext is not available here
            className="w-full lg:w-auto bg-primary-color text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-secondary-color focus:ring-4 focus:ring-primary-color focus:ring-offset-2"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
