import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

const getProduct = async (id) => {
  const result = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return result.data;
};

export default function DetalheProduto() {
  const [produto, setProduto] = useState(null);

  const params = useParams();

  const sayHello = () => console.log("oi");

  useEffect(async () => {
    setProduto(await getProduct(params.id));
  }, []);

  const id = params.id;

  if (produto === null) {
    return <h1>Carregando...</h1>;
  }

  return (
    <>
      <h1>{produto.title} </h1>
      <img src={produto.image} alt="" style={{ height: 300, maxWidth: 300 }} />
    </>
  );
}


