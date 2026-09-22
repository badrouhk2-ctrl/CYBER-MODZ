import Link from "next/link";
import products from "../../../products";

export default async function ProductPage({ params }) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <main className="products-page">
        <h1>Product Not Found</h1>
        <Link href="/">← Back to Home</Link>
      </main>
    );
  }

  return (
    <main className="products-page">
      <Link href="/" className="productBtn">
        ← Back to Products
      </Link>

      <div className="product-card">
        <div className="thumb">
          {product.icon}
          <span>CYBER MODZ</span>
        </div>

        <div className="cardBody">
          <div className="tag">{product.category}</div>

          <h1>{product.name}</h1>

          <p>{product.description}</p>

          <h2>{product.price}</h2>

          <h3>Features</h3>
          <ul>
            {product.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          <h3>Requirements</h3>
          <ul>
            {product.requirements.map((requirement) => (
              <li key={requirement}>{requirement}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
            }
