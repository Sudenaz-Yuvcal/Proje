
function TodoInput({ input, setInput, addProduct }) {
  return (
    <div className="add">
      <input
        type="text"
        placeholder="Ürün giriniz"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ textTransform: "capitalize" }} 
      />
      <button onClick={addProduct}>Ekle</button>
    </div>
  );
}

export default TodoInput;
