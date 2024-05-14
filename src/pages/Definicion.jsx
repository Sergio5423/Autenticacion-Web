import { Link } from "react-router-dom";
import "../design/Definicion.css";

const Definicion = () => {
    return (
        <div className="principal-def">
            <div className="contenedor-def">
                <h1 className="h1-def">
                    ¿Que es un gestor de inventario?
                </h1>
                <p className="texto-1-def">
                    El control de inventarios es un sistema que permite que una empresa gestione las existencias que almacena. De esta forma, además de saber qué tiene, identifica cuáles productos debe mover más rápido, cuáles son los que escasean, cómo es su rotación y en cuáles invierte más recursos para su correcto almacenaje.

                    El inventario es fundamental para cualquier organización. Todas las empresas deben implementar este proceso, aunque al inicio sea una tarea que requiere tiempo.
                </p>
                <div className="contenedor-imagen">
                    <img src="https://i.pinimg.com/564x/81/18/04/811804e6938bd1edec99fabce23205f1.jpg" alt="dashboard" />
                </div>
                <p className="texto-2-def">
                    El control de inventarios ayuda a mantener un balance en las existencias de un almacén y los productos o artículos que tienen mayor demanda. Puede reducir costos porque refleja oportunamente lo que no tiene una rotación saludable y lo que debe surtirse lo más pronto posible; esto evita retrasos en los pedidos o que se estropeen materias primas por un almacenamiento deficiente o prolongado.

                    Además, no da lugar a fraudes o malentendidos: se tiene lo que se necesita y lo que muestra el inventario, sin errores.

                    Sin importar el tipo de sistema de control de inventarios, o la empresa que lo utilice, existen algunos elementos clave que comparten todos.
                </p>
                <Link to="/Dashboard">
                    <button className="btn-def-volver">
                        Volver
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Definicion;