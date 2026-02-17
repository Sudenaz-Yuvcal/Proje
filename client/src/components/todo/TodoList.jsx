function TodoList({ products, toggleProduct, deleteProduct }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Durum</th>
          <th>Ürün</th>
          <th>Sil</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p) => (
          <tr key={p.id}>
            <td>
              <input
                type="checkbox"
                checked={p.completed}
                onChange={() => toggleProduct(p.id)}
              />
            </td>
            <td
              style={{
                textTransform: "capitalize",
                textDecoration: p.completed ? "line-through" : "none",
              }}
              
            >
              
              {p.name}
            </td>
            <td>
              <button onClick={() => deleteProduct(p.id)}>Sil</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TodoList;
