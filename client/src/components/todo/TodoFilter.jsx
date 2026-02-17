function TodoFilter({ filter, setFilter, completeAll }) {
  return (
    <div className="filter">
      <button onClick={() => setFilter("all")}>Hepsi</button>
      <button onClick={() => setFilter("completed")}>Alınan</button>
      <button onClick={() => setFilter("pending")}>Alınmayan</button>
      <button onClick={completeAll}>Hepsini Seç</button> 
    </div>
  );
}

export default TodoFilter;
