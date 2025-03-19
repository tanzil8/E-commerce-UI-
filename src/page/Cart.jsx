"use client";

import { useState } from "react";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "../component/Navbar";
import Footer from "../component/footer";

export default function ShoppingCart() {
  const [items, setItems] = useState([
    { id: 1, name: "Green Capsicum", price: 14.0, quantity: 5, image: "https://iili.io/3FqLBsI.png" },
    { id: 2, name: "Red Tomatoes", price: 8.0, quantity: 3, image: "https://iili.io/3FqLBsI.png" },
    { id: 3, name: "Yellow Lemon", price: 6.0, quantity: 2, image: "https://iili.io/3FqLBsI.png" },
  ]);

  const updateQuantity = (id, change) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const getTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <section className="dark:bg-[#0A2025] p-4">
        <h1 className="mb-16 mt-16 ml-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black">
          Shopping Cart
        </h1>

        {items.length === 0 ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center justify-center mt-16"
          >
            <ShoppingBag size={80} className="text-gray-300 dark:text-gray-600 mb-4" />
            <p className="text-gray-500 dark:text-gray-400 text-xl">Your cart is empty</p>
            <button className="mt-6 px-6 py-3 bg-[#00b206] text-white rounded-lg hover:bg-[#008b05] transition-all duration-300">
              Continue Shopping
            </button>
          </motion.div>
        ) : (
          <div className="flex flex-col lg:flex-row items-start mt-8 gap-6 w-full">
            {/* Cart Table */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="bg-white dark:bg-[#0C2A30] p-4 w-full lg:w-[800px] rounded-xl shadow-md overflow-x-auto"
            >
              <div className="w-full min-w-[600px]">
                <table className="w-full rounded-xl">
                  <thead>
                    <tr className="text-center border-b border-gray-400 text-[#7f7f7f] dark:text-gray-300 text-sm font-medium uppercase">
                      <th className="text-left px-2 py-2 w-[200px]">Product</th>
                      <th className="px-2 py-2 w-[100px]">Price</th>
                      <th className="px-2 py-2 w-[120px]">Quantity</th>
                      <th className="px-2 py-2 w-[150px]">Subtotal</th>
                      <th className="px-2 py-2 w-[50px]"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <motion.tr
                        key={item.id}
                        className="text-center hover:bg-gray-100 dark:hover:bg-[#0A2025] transition-colors duration-200"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, x: -100 }}
                        layout
                      >
                        <td className="px-2 py-2 text-left flex items-center gap-2">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-[60px] h-[60px] rounded-lg shadow object-cover"
                          />
                          <span className="text-[#191919] dark:text-white">{item.name}</span>
                        </td>
                        <td className="px-2 py-2 text-[#191919] dark:text-white">${item.price.toFixed(2)}</td>
                        <td className="px-2 py-2">
                          <div className="flex justify-center items-center gap-2 w-full">
                            <motion.button
                              whileTap={{ scale: 0.9 }}
                              onClick={() => updateQuantity(item.id, -1)}
                              className="p-1.5 bg-gray-200 dark:bg-gray-700 flex-shrink-0"
                            >
                              <Minus size={16} />
                            </motion.button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <motion.button
                              whileTap={{ scale: 0.9 }}
                              onClick={() => updateQuantity(item.id, 1)}
                              className="p-1.5 bg-gray-200 dark:bg-gray-700 flex-shrink-0"
                            >
                              <Plus size={16} />
                            </motion.button>
                          </div>
                        </td>
                        <td className="px-2 py-2 font-medium text-[#191919] dark:text-white">
                          ${(item.price * item.quantity).toFixed(2)}
                        </td>
                        <td className="px-2 py-2">
                          <motion.button
                            whileHover={{ rotate: 12 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-700 transition-colors duration-200"
                          >
                            <Trash2 size={18} />
                          </motion.button>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Cart Summary */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="w-full lg:w-[400px] bg-white dark:bg-[#0C2A30] rounded-lg p-6 shadow-md"
            >
              <h2 className="text-xl font-medium">Cart Total</h2>
              <div className="py-3 flex justify-between border-b">
                <span>Subtotal:</span>
                <span className="font-semibold">${getTotal()}</span>
              </div>
              <div className="py-3 flex justify-between border-b">
                <span>Shipping:</span>
                <span className="font-semibold">Free</span>
              </div>
              <div className="py-3 flex justify-between">
                <span>Total:</span>
                <span className="font-semibold text-xl">${getTotal()}</span>
              </div>
              <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
              className="w-full mt-5 px-6 py-3 bg-red-800 text-white rounded-lg hover:bg-red-900 transition-all duration-300 hover:shadow-lg">
                Proceed to Checkout
              </motion.button>
              <motion.button
              whileHover={{ scale: 1.02 }}
              className="w-full mt-3 px-6 py-3 bg-transparent border border-gray-300 dark:border-gray-600 text-[#191919] dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-[#0A2025] transition-all duration-300"
            >
              Continue Shopping
            </motion.button>
            </motion.div>
          </div>
        )}
      </section>
      <div className="mt-16">
      <Footer />
      </div>
    </div>
  );
}
