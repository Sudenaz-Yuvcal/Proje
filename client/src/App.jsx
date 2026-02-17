import { useState } from "react";
import "./App.css";
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

    const newProduct = {
      id: Date.now(),
      name: input,
      completed: false,};

    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts)); };

  const toggleProduct = (id) => {
    const updatedProducts = products.map((p) =>
      p.id === id ? { ...p, completed: !p.completed } : p
    );
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts)); };

  
  const deleteProduct = (id) => {
    const updatedProducts = products.filter((p) => p.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts)); };

  const filteredProducts = products.filter((p) => {
    if (filter === "completed") return p.completed;
    if (filter === "pending") return !p.completed;
    return true;});

  const completeAll = () => {
    const allCompleted = products.every((p) => p.completed);
    const updatedProducts = products.map((p) => ({ ...p, completed: !allCompleted,
    }));
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON .stringify(updatedProducts)) };

  const total = products.length;
  const completedCount = products.filter((p) => p.completed).length;
  const pendingCount = products.filter((p) => !p.completed).length;

  return (
    <div className="shopping">
      <h1>Alışveriş Listesi</h1>

      <TodoFilter
        filter={filter} 
        setFilter={setFilter}
        completeAll={completeAll}/>

      <TodoInput input={input} setInput={setInput} addProduct={addProduct} />

      <TodoList
        products={filteredProducts}
        toggleProduct={toggleProduct}
        deleteProduct={deleteProduct}/>

      <div className="product">
        <p>Toplam Ürün: {total}</p>
        <p>Alınan: {completedCount}</p>
        <p>Alınmayan: {pendingCount}</p>
      </div>
    </div> );}

export default App;
