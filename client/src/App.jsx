import { useState } from "react";

import TodoInput from "./components/todo/TodoInput";
import TodoList from "./components/todo/TodoList";
import TodoFilter from "./components/todo/TodoFilter";

function App() {
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem("products");
    return saved ? JSON.parse(saved) : [];
  });

  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  const addProduct = () => {
    if (input.trim() === "") return;
    const newProduct = 
    {
      id: Date.now(),
      name: input,
      completed: false, 
    };
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setInput(""); 
  };

  const toggleProduct = (id) => {
    const updatedProducts = products.map((p) =>
      p.id === id ? { ...p, completed: !p.completed } : p
    );
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  const deleteProduct = (id) => {
    const updatedProducts = products.filter((p) => p.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  const filteredProducts = products.filter((p) => {
    if (filter === "completed") return p.completed;
    if (filter === "pending") return !p.completed;
    return true;
  });

  const completeAll = () => {
    const allCompleted = products.every((p) => p.completed);
    const updatedProducts = products.map((p) => ({
      ...p,
      completed: !allCompleted,
    }));
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };
  const clearAll = () => {
  setProducts([]);
  localStorage.setItem("products", JSON.stringify([])); 
};

  const total = products.length;
  const completedCount = products.filter((p) => p.completed).length;
  const pendingCount = products.filter((p) => !p.completed).length;

  return (
    <div className="min-h-screen bg-[#f8f9fc] py-12 px-4 font-sans text-slate-600">
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-center italic text-2xl font-semibold  rounded-md py-3 mb-6">
        Alışveriş Listesi
      </h1>
        
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-blue-100 border-2 border-solid  p-6 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.04)] text-center transition-transform hover:scale-105">
            <h3 className="text-3xl font-bold text-slate-800">{total}</h3>
            <p className="text-sm text-slate-400 font-medium">Hepsi</p>
          </div>
          <div className="bg-green-100 border-2 border-solid p-6 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.04)] text-center transition-transform hover:scale-105">
            <h3 className="text-3xl font-bold text-slate-800">
              {pendingCount}</h3>
            <p className="text-sm text-slate-400 font-medium">Alınacak</p>
          </div>
          <div className="bg-rose-100 border-2 border-solid p-6 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.04)] text-center transition-transform hover:scale-105">
            <h3 className="text-3xl font-bold text-slate-800">{completedCount}</h3>
            <p className="text-sm text-slate-400 font-medium">Alındı</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.04)] overflow-hidden">
          <TodoInput input={input} setInput={setInput} addProduct={addProduct} />
        </div>

        <div className="bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.04)] overflow-hidden">
          <TodoList
            products={filteredProducts}
            toggleProduct={toggleProduct}
            deleteProduct={deleteProduct} />
          
          <div className="px-6 py-4 border-t border-slate-50">
          <TodoFilter total={pendingCount} filter={filter} setFilter={setFilter} completeAll={clearAll} />
          </div>
        </div>

      </div>
    </div>
  );
}

export default App; 