import { useHistory } from "react-router";
import styled from "styled-components";
import { ProdutoContainer } from "./styles";

/**
 * 1. Exibir o título do produto
 * 2. Exibir a descrição do produto
 * 3. Chamar uma função ao clicar em "Ver detalhes"
 * 4. Chamar uma função ao clicar em "Adicionar ao carrinho"
 */
export default function Produto({ produto, navigate, adicionarAoCarrinho }) {
  const irParaProduto = () => {
    navigate(produto.id);
  };

  const onClickAdicionarAoCarrinho = () => {
    adicionarAoCarrinho(produto);
  };

  return (
    <ProdutoContainer className="card">
      <img
        onClick={irParaProduto}
        src={produto.image}
        className="card-img-top"
        alt="..."
        style={{ maxHeight: 300, padding: 20 }}
      />
      <div className="card-body">
        <h5 className="card-title" onClick={irParaProduto}>
          {produto.title}
        </h5>
        <p className="card-text">{produto.description}</p>
      </div>

      <div className="card-footer">
        <a href="#" onClick={irParaProduto} className="btn btn-primary">
          Ver detalhes
        </a>
        <button
          className="btn btn-secondary"
          onClick={onClickAdicionarAoCarrinho}
        >
          Adicionar ao carrinho
        </button>
      </div>
    </ProdutoContainer>
  );
}

{
  /* <div key={produto.id} style={{ width: "33%" }}>
      <img src={produto.image} alt="" style={{ maxWidth: 100, height: 150 }} />
      <button onClick={() => navigate(produto.id)}>{produto.title}</button>
    </div> */
}



