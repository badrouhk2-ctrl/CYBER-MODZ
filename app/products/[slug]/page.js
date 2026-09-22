import Link from "next/link";
import products from "../../products";

export default function ProductsPage() {
  return (
    <main className="products-page">
      <h1>Products</h1>

      <div className="products-grid">
        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/products/${product.slug}`}
            className="product-card"
          >
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
              }
