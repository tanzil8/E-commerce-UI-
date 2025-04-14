import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../FlashProduct.css"
import { useEffect, useState } from "react";
import axios from "axios";


const FlashProduct = () => {


  const [flashProducts, setflashProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/flashproducts")
      .then(res => {
        console.log("✅ API response:", res.data);
        setflashProducts(res.data.flashData);
      })
      .catch(err => {
        console.error("❌ Error fetching flashProducts:", err);
      });
  }, []);
  console.log("flashProducts",flashProducts)


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
       

{flashProducts.map((flashProduct) => (
   <div  className="product-card">
         
           <div className="product-image">
             <img
               src={flashProduct.img}
               alt={flashProduct.name}
             />
             <div className="product-overlay">
               <button className="add-to-cart">Add to Cart</button>
             </div>
           </div>
           <div className="product-info">
             <h2>{flashProduct.name}</h2>
             <p className="product-price">{flashProduct.price}</p>
           </div>
        
       </div>
      ))}
      
 
   </div>
    </div>
  </section>
  );
};

export default FlashProduct;
