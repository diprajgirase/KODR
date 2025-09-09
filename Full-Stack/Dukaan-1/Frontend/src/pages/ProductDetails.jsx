import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./ProductDetails.css";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await axios.get(`http://localhost:3000/api/products/${id}`);
        console.log(res);
        
        setProduct(res.data.product); 
      } catch (err) {
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found</p>;

  const priceFmt = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: product.price.currency
  }).format(product.price.amount / 100);

  const activeImage = product.images?.[activeIndex];
  const out = product.stock <= 0;

  return (
    <div className="pd-shell">
      <div className="pd-media">
        {activeImage ? (
          <img src={activeImage} alt={product.title} className="pd-main-img" />
        ) : (
          <div className="pd-main-img" aria-hidden="true" />
        )}

        {product.images && product.images.length > 1 && (
          <div className="pd-thumbs">
            {product.images.map((img, i) => (
              <button
                key={i}
                type="button"
                className={`pd-thumb ${i === activeIndex ? "active" : ""}`}
                onClick={() => setActiveIndex(i)}
              >
                <img src={img} alt="" />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="pd-info">
        <h1 className="pd-title">{product.title}</h1>
        <div className={`pd-stock ${out ? "out" : ""}`}>
          {out ? "Out of stock" : `${product.stock} in stock`}
        </div>
        <div className="pd-price">{priceFmt}</div>
        <p className="pd-desc">{product.description}</p>
        <button className="btn-buy" disabled={out}>
          {out ? "Unavailable" : "Buy now"}
        </button>
      </div>
    </div>
  );
}
