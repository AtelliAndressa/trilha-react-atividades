import { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../context/context";
import { rotas } from "../router";

export default function Navbar() {
  // @todo esses produtos precisam vir do "portal"
  // const { produtosDoCarrinho } = useContext(MyContext);

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            {rotas
              .filter((route) => route.isVisible)
              .map((route) => {
                return (
                  <li class="nav-item">
                    <Link
                      class="nav-link active"
                      aria-current="page"
                      to={route.path}
                    >
                      {route.title}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
        <span>{[].length} produto(s)</span>
      </div>
    </nav>
  );
}