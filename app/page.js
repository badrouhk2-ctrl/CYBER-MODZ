const products = [
  { name: "Cyber Vehicle Pack", category: "Vehicles", price: "$9.99", icon: "🚗" },
  { name: "Urban EUP Pack", category: "EUP / Clothes", price: "$7.99", icon: "👕" },
  { name: "Cyber MLO Pack", category: "Maps / MLO", price: "$12.99", icon: "🏙️" },
  { name: "Premium Script Pack", category: "Scripts", price: "$14.99", icon: "⚙️" },
  { name: "Tactical Weapon Pack", category: "Weapons", price: "$8.99", icon: "🔫" },
  { name: "Graphics Preset", category: "Graphics", price: "$5.99", icon: "🎨" },
];

function ProductCard({ p }) {
  return (
    <article className="card">
      <div className="thumb">{p.icon}<span>CYBER MODZ</span></div>
      <div className="cardBody">
        <div className="tag">{p.category}</div>
        <h3>{p.name}</h3>
        <p>Premium FiveM content with clean installation and support.</p>
        <div className="cardBottom">
          <strong>{p.price}</strong>
          <button>View Product</button>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="logo" href="#">CYBER<span>MODZ</span></a>
        <nav>
          <a href="#products">Products</a>
          <a href="#categories">Categories</a>
          <a href="#faq">FAQ</a>
          <a href="#support">Support</a>
        </nav>
        <div className="navBtns">
          <button className="ghost">Login</button>
          <button className="primary">Discord</button>
        </div>
      </header>

      <section className="hero">
        <div className="glow one"></div><div className="glow two"></div>
        <div className="heroText">
          <div className="eyebrow">● FIVE M COMMUNITY</div>
          <h1>UPGRADE YOUR<br/><span>FIVE M EXPERIENCE.</span></h1>
          <p>Discover premium vehicles, EUP, maps, scripts and graphics for your server. Built for creators who want more.</p>
          <div className="heroBtns">
            <a className="primary big" href="#products">Explore Mods →</a>
            <a className="ghost big" href="#support">Join Discord</a>
          </div>
          <div className="stats">
            <div><b>500+</b><small>Products</small></div>
            <div><b>10K+</b><small>Users</small></div>
            <div><b>24/7</b><small>Support</small></div>
          </div>
        </div>
        <div className="heroVisual">
          <div className="visualBox"><div className="scan"></div><b>CYBER<br/>MODZ</b><small>PREMIUM STORE</small></div>
        </div>
      </section>

      <section id="categories" className="section">
        <div className="sectionHead"><div><span className="mini">BROWSE</span><h2>Categories</h2></div><span className="muted">Find what your server needs.</span></div>
        <div className="categories">
          {["🚗 Vehicles","👕 EUP / Clothes","🏙️ Maps / MLO","⚙️ Scripts","🔫 Weapons","🎨 Graphics"].map(x => <a href="#products" key={x}>{x}<span>→</span></a>)}
        </div>
      </section>

      <section id="products" className="section products">
        <div className="sectionHead"><div><span className="mini">SHOP</span><h2>Featured Mods</h2></div><a className="viewAll" href="#">View all →</a></div>
        <div className="grid">{products.map(p => <ProductCard key={p.name} p={p}/>)}</div>
      </section>

      <section className="banner">
        <div><span className="mini">CYBER MODZ COMMUNITY</span><h2>Need help with your server?</h2><p>Join our Discord for updates, support and new releases.</p></div>
        <a className="primary big" href="#support">Join Discord →</a>
      </section>

      <section id="faq" className="section faq">
        <div className="sectionHead"><div><span className="mini">HELP</span><h2>FAQ</h2></div></div>
        <details><summary>How do I receive my product?</summary><p>After a future checkout integration, your purchase and license will appear in your account dashboard.</p></details>
        <details><summary>Are the products compatible with FiveM?</summary><p>Product compatibility and requirements will be shown on each product page.</p></details>
        <details><summary>Where can I get support?</summary><p>Use the CYBER MODZ Discord community for support and updates.</p></details>
      </section>

      <footer id="support">
        <div className="logo">CYBER<span>MODZ</span></div>
        <p>Premium FiveM resources for creators.</p>
        <div className="footerLinks"><a href="#products">Products</a><a href="#faq">FAQ</a><a href="#">Terms</a><a href="#">Privacy</a></div>
        <small>© 2026 CYBER MODZ. All rights reserved.</small>
      </footer>
    </main>
  );
}
