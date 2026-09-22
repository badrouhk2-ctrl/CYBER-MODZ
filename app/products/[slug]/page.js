import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "../../products";

export default function ProductPage({ params }) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="product-page">
      <div className="product-container">
        <Link href="/" className="back-link">
          ← Back to CYBER MODZ
        </Link>

        <div className="product-card">
          <div className="product-info">
            <span className="product-category">
              {product.category}
            </span>

            <h1>{product.name}</h1>

            <p className="product-description">
              {product.description}
            </p>

            <div className="product-price">
              ${product.price}
            </div>

            <h2>Features</h2>

            <ul className="features-list">
              {product.features?.map((feature, index) => (
                <li key={index}>✓ {feature}</li>
              ))}
            </ul>

            <h2>Requirements</h2>

            <p className="requirements">
              {product.requirements || "FiveM server"}
            </p>

            <button className="buy-button">
              Buy Now — ${product.price}
            </button>

            <p className="payment-note">
              Secure payment and instant download coming soon.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
    }
