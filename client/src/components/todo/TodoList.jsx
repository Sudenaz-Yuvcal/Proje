function TodoList({ products, toggleProduct, deleteProduct }) {
  return (
    <div className="  w-full bg-white border-2 border-solid">
      <ul className="divide-y divide-slate-100">
        {products.map((p) => (
          <li 
            key={p.id} 
            className=" flex items-center justify-between px-6 py-4 group transition-all hover:bg-slate-50">
              <div className="flex items-center gap-4 flex-1">
              <div className="relative flex items-center">
                   <input
                 type="checkbox" checked={p.completed}onChange={() => toggleProduct(p.id)}
                 className={`
                 appearance-none w-6 h-6 rounded-full border-2 cursor-pointer transition-all
                 ${p.completed 
                  ? "bg-gradient-to-br from-green-300 to-lime-400 border-transparent" 
                 : "border-slate-200 hover:border-blue-400"}`}/>
                {p.completed && (
                  <span className="absolute inset-0 flex items-center justify-center pointer-events-none text-white text-xs font-bold">
                    ✓
                  </span>)}
              </div>
              <span
                className={`text-[15px] font-medium transition-all duration-300 capitalize cursor-pointer
                  ${p.completed 
                    ? "text-slate-300 line-through decoration-slate-300"  : "text-slate-600 "} `}
                onClick={() => toggleProduct(p.id)} >
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