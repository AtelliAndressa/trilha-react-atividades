import React, { useContext } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Produto from "./Produto";
import { MyContext } from "../../context/context";

import { ThemeProvider } from 'styled-components';
import { light } from "../../styles/themes/light";
import { dark } from "../../styles/themes/dark";
import GlobalStyle from "../../styles/global"
import Switch from "react-switch";

const getProducts = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
};

function Produtos() {
  const [theme, setTheme] = useState(light)
  const [produtos, setProdutos] = useState([]);
  // @todo esse produtos precisa vir do "portal"
  
  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light )
  };

  const { produtosDoCarrinho, adicionarProdutoAoCarrinho } =
    useContext(MyContext);

    // const adicionarProdutoAoCarrinho = contexto.adicionarProdutoAoCarrinho

  const history = useHistory();

  console.log(history);

  const run = async () => {
    setProdutos(await getProducts());
  };

  useEffect(() => {
    run();
  }, []);

  const irParaProduto = (idProduto) => {
    history.push(`/produtos/${idProduto}`);
  };

  return (
    <ThemeProvider theme={theme}>

    <div style={{ padding: 20 }}>  
    <div >
                <Switch
                    onChange={toggleTheme}
                    checked={theme.title === 'dark'}
                    checkedIcon={false}
                    uncheckedIcon={false}     
                />
            </div>     
      <h1>Produtos </h1>
      <h2>{produtosDoCarrinho.length} produto(s) no carrinho</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
        {produtos.map((produto) => {
          return (
            <Produto
              key={produto.id}
              produto={produto}
              navigate={irParaProduto}
              adicionarAoCarrinho={adicionarProdutoAoCarrinho}
            />
          );
        })}
      </div>
    </div>
    <GlobalStyle />
    </ThemeProvider>
  );
}

export default Produtos;
