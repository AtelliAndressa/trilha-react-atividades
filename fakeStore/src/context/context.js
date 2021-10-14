import React, { useCallback, useEffect, useMemo, useState } from "react";
// https://pt-br.reactjs.org/docs/context.html#reactcreatecontext

// criando a caixinha
export const MyContext = React.createContext({
  produtosNoCarrinho: [],
  usuario: null,
});

// criando um componente que define o que tem na caxinha e o que acontece com a caixinha

// useContext(MyContext)
export function MyProvider({ children }) {
  const [produtosDoCarrinho, setProdutosDoCarrinho] = useState([]);

  const adicionarProdutoAoCarrinho = (produto) => {
    setProdutosDoCarrinho((prevState) => {
      if (prevState.find((p) => p.id === produto.id)) {
        return prevState;
      }

      return prevState.concat(produto);
    });
  };

  return (
    <MyContext.Provider
      value={{
        produtosDoCarrinho,
        adicionarProdutoAoCarrinho,
        usuario: null,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}