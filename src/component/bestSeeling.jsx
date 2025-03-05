import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../bestseeling.css"

const BestSeeling = () => {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const products = [
    { id: 1, name: "The Hilton Hotel", price: 850 },
    { id: 2, name: "Luxury Suite", price: 950 },
    { id: 3, name: "Ocean View Room", price: 750 },
    { id: 4, name: "Mountain Retreat", price: 650 },
    { id: 5, name: "City Center Hotel", price: 550 },
    { id: 6, name: "Beachfront Villa", price: 1250 },
    { id: 7, name: "Countryside Cottage", price: 450 },
    { id: 8, name: "Penthouse Suite", price: 1550 },
  ];

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
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <a href="#">
                <div className="product-image">
                  <img
                    src="https://t3.ftcdn.net/jpg/02/10/85/26/360_F_210852662_KWN4O1tjxIQt8axc2r82afdSwRSLVy7g.jpg"
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
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSeeling;
