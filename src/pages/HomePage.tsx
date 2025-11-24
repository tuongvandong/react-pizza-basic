import { useEffect, useState } from "react";
import "../assets/HomePage.css";
const HomePage = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://tiki.vn/api/personalish/v1/blocks/listings?limit=40&include=advertisement&aggregations=2&version=home-persionalized&trackity_id=75b2dc14-8abf-ab24-25b7-cc7368533a1a&category=1795&page=1&urlKey=dien-thoai-smartphone"
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);
  if (loading) {
    return <h2>Đang tải</h2>;
  }
  return (
    <div className="list-container">
      {products.map((p) => (
        <div className="product-card" key={p.id}>
          <img src={p.thumbnail_url} alt={p.name} className="product-img" />
          <h3 className="product-name">{p.name}</h3>

          <div className="product-price">
            <span className="price">{p.price.toLocaleString()}₫</span>

            {/* {p.original_price > p.price && (
              <span className="old-price">
                {p.original_price.toLocaleString()}₫
              </span>
            )} */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
