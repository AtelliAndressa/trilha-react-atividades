import { useContext } from "react";
import { MyContext } from "../context/context";

export default function Checkout() {
  const { produtosDoCarrinho } = useContext(MyContext);

  return (
    <div>
      <h1>Checkout</h1>

      <ul>
        {produtosDoCarrinho.map((produto) => {
          return <li key={produto.id}>{produto.title}</li>;
        })}
      </ul>
    </div>
  );
}
