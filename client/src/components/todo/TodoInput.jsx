function TodoInput({ input, setInput, addProduct }) {
  return (
    <form onSubmit={(e) => { e.preventDefault();
        addProduct(); }}
       className="border-2 border-solid flex items-center justify-between px-6 py-3">

      <input
        className="flex-1 text-[17px] text-slate-600 placeholder-slate-300 focus:outline-none bg-transparent"
        type="text"
        placeholder="Ürün Giriniz"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ textTransform: "capitalize" }}
        />
        
      <button
        type="submit"
        className="bg-black hover:bg-slate-800 text-white px-8 py-2 rounded-full text-sm font-medium transition-all active:scale-95 shadow-lg shadow-black/20">
        Ekle</button>

    </form>);}

export default TodoInput; 