import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../FlashProduct.css"
import { useEffect } from "react";
import axios from "axios";


const FlashProduct = () => {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFlashProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/flashproducts"); // Fetch products
        setProducts(response.data); // Update state
      } catch (error) {
        console.error("Error fetching flash products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFlashProducts();
  }, []);

  if (loading) return <p>Loading...</p>;

  const scroll = (direction) => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(container.scrollLeft < container.scrollWidth - container.clientWidth - 10);
    }
  };


  return (
    <section className="flash-product">
    <h1 className="">Best Seeling Product</h1>

    <div className="relative">
      {showLeftArrow && (
        <button className="scroll-button left" onClick={() => scroll("left")}>
          <ChevronLeft className="icon" />
          <span className="sr-only">Scroll left</span>
        </button>
      )}

      {showRightArrow && (
        <button className="scroll-button right" onClick={() => scroll("right")}>
          <ChevronRight className="icon" />
          <span className="sr-only">Scroll right</span>
        </button>
      )}

      <div ref={scrollContainerRef} className="scroll-container" onScroll={handleScroll}>
        {products.flashData.map((product) => (
          <div key={product.id} className="product-card">
           
              <div className="product-image">
                <img
                  src={product.img}
                  alt={product.name}
                />
                <div className="product-overlay">
                  <button className="add-to-cart">Add to Cart</button>
                </div>
              </div>
              <div className="product-info">
                <h2>{product.name}</h2>
                <p className="product-price">${product.price}</p>
              </div>
        
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default FlashProduct;
