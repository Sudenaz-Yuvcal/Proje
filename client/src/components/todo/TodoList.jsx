function TodoList({ products, toggleProduct, deleteProduct }) {
  return (
    <div className="  w-full bg-white border-2 border-solid">
      <ul className="divide-y divide-slate-100">
        {products.map((p) => (
          <li key={p.id} className=" flex items-center justify-between px-6 py-4 group transition-all hover:bg-slate-50">
          <div className="flex items-center gap-4 flex-1">
       <div className="flex items-center gap-3"> 
      <div className="relative flex items-center justify-center w-6 h-6 shrink-0"> 
        <input 
      type="checkbox" 
      checked={p.completed}
      onChange={() => toggleProduct(p.id)}
      className={`appearance-none w-full h-full rounded-full border-2 cursor-pointer transition-all duration-300
        ${p.completed 
          ? "bg-gradient-to-br from-green-400 to-lime-500 border-transparent shadow-sm"
          : "bg-white border-slate-200 hover:border-blue-400"
        }`}
                   />
    
        {p.completed && (
      <span className="absolute pointer-events-none text-white text-[10px] font-black">
        ✓
      </span> )}
        </div>
         </div>
  <span
    onClick={() => toggleProduct(p.id)}
    className={`text-[15px] font-medium transition-all duration-300 capitalize cursor-pointer select-none
      ${p.completed 
        ? "text-slate-300 line-through decoration-slate-300" 
        : "text-slate-600 hover:text-slate-900"
      }`}
  >
    {p.name}
  </span>
</div>
            <button
              onClick={() => deleteProduct(p.id)}
              className="border-2 border-solid opacity-0 group-hover:opacity-100 transition-opacity text-slate-300 hover:text-red-400 text-xl px-2"
              title="Sil">
                 ×
            </button>
          </li> ))}
      </ul>
      {products.length === 0 && (
        <div className="py-10 text-center text-slate-400 text-sm italic">
        Henüz bir ürün eklenmemiş.
        </div>)}
    </div>);}

export default TodoList; 