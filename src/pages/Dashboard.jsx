import { useAuth } from "../AuthProvider";
import { Link } from "react-router-dom";
import "../design/Dashboard.css";

const Dashboard = () => {
    const auth = useAuth();
    return (
        <main className="principal-d">
            <div className="contenedor-d">
                <h1 className="h1-bienvenido">Bienvenido! {auth.user}</h1>
                <div>                    
                    <Link to="/Definicion">
                        <button className="btn-quees">
                            ¿Que es un gestor de inventario?
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to="/Contable">
                        <button className="btn-contable">
                            ¿Que es un software contable?
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to="/TiposCont">
                        <button className="btn-tiposCont">
                            Tipos de software contable
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to="/TiposGestor">
                        <button className="btn-tiposGestor">
                            Tipos de gestores de inventario
                        </button>
                    </Link>
                </div>
                <div>
                    <button onClick={() => auth.logOut()} className="btn-submit">
                        Cerrar sesión
                    </button>
                </div>
            </div>
        </main>
    );
};
export default Dashboard;