function TodoFilter({ filter, setFilter, total, completeAll }) 
{
  return (
    
  <div className="flex items-center justify-between text-sm text-slate-400 font-medium">
      
         <div className="w-1/4"> Kalan {total} </div>

      <div className="flex items-center gap-4">

        <button
          onClick={() => setFilter("all")}
          className={`transition-colors hover:text-slate-600 ${
          filter === "all" ? "text-blue-500 font-bold " : "" }`} >
          Tümü </button>  

        <button
          onClick={() => setFilter("pending")}
          className={`transition-colors hover:text-slate-600 ${
            filter === "pending" ? "text-blue-500 font-bold" : ""}`}>
          Alınacak </button>

        <button
          onClick={() => setFilter("completed")}
          className={`transition-colors hover:text-slate-600 ${
            filter === "completed" ? "text-blue-500 font-bold" : ""}`}>
          Alındı </button>
          
      </div>
      
      <div className="w-1/4 text-right">
      <button onClick={completeAll} 
         className="hover:text-red-500 transition-colors cursor-pointer">
           Tümünü Sil </button>
      </div>

 </div>
  );}

export default TodoFilter; 