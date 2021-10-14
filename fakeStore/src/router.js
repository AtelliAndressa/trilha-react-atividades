import Produtos from "./componentes/Produtos/Produtos";
import DetalheProduto from "./page/DetalheProduto";
import Checkout from "./page/Checkout";

export const rotas = [
    {
      path:"/produtos/:id",
      component: DetalheProduto,
      title:'Detalhe do Produto',
      isVisible: false,
    },
    {
        path:"/produtos",
        component: Produtos,
        title:'Produtos',
        isVisible: true,
    },
    {
        path:"/users",
        component: Users,
        title:'Users',
        isVisible: true,
    },
    {
      path:"/checkout",
      component: Checkout,
      title:'Checkout',
      isVisible: true,
  },

    {
        path:"/",
        component: Home,
        title:'Home',
        isVisible: true,
    }
];

function Home() {
    return <h2>Home</h2>;
  }
  
  function About() {
    return <h2>About</h2>;
  }
  
  function Users() {
      console.log(window.location)
    return <h2>Users</h2>;
  }