import { useEffect, useState } from "react";
import axios from "axios";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/product")
      .then(res => {
        setProducts(res.data.data);
      })
      .catch(err => {
        console.error("Error fetching products:", err);
      });
    }, []);
    
    console.log("Fetched products:", products);
  return (
    <section className="py-12 px-4">
      <h1 className="mb-12 font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black">
        Category
      </h1>
      <div className="flex items-center justify-center flex-wrap gap-6">
        {products.map((product) => (
       <div  className="w-full sm:w-80 md:w-72">
              <article className="rounded-xl bg-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <a href="" className="block">
                  <div className="relative overflow-hidden rounded-t-xl group">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="mt-1 p-4">
                    <h1 className="text-black font-bold text-2xl">{product.name}</h1>
                    <h2 className="text-slate-700 mt-2">shose</h2>
                    <p className="text-slate-400 mt-1 text-sm"></p>
                    <div className="mt-3 flex items-center justify-between flex-wrap sm:flex-nowrap gap-2">
                      <p>
                        <span className="text-lg font-bold text-blue-500">{product.price}</span>
                        <span className="text-slate-400 text-sm"></span>
                      </p>
                      <button className="w-full sm:w-auto bg-black hover:bg-gray-900 text-white text-xs sm:text-sm md:text-base font-medium py-1.5 sm:py-2 px-3 sm:px-4 rounded-md transition-all duration-300">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </a>
              </article>
            </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
