import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../bestseeling.css"
import axios from "axios";

const BestSeeling = () => {


  const [bestseelingproduct, setbestseelingproduct] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/bestseelingproduct")
      .then(res => {
        console.log("✅ API response:", res.data);
        setbestseelingproduct(res.data.bestseelingProduct  );
      })
      .catch(err => {
        console.error("❌ Error fetching bestseelingproduct:", err);
      });
  }, []);
  console.log("bestseelingproduct",bestseelingproduct)



  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  


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
       

        {bestseelingproduct.map((bestseeling) => (
           <div  className="product-card">
          
           <div className="product-image">
             <img
               src={bestseeling.image}
               alt={bestseeling.name}
             />
             <div className="product-overlay">
               <button className="add-to-cart">Add to Cart</button>
             </div>
           </div>
           <div className="product-info">
             <h2>{bestseeling.name}</h2>
             <p className="product-price">{bestseeling.price}</p>
           </div>

       </div>
        ))}
           
      
        </div>
      </div>
    </section>
  );
};

export default BestSeeling;
