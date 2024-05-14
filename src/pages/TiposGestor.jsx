import { Link } from "react-router-dom"
import "../design/TiposGestor.css"

const Tipos = () => {
    return (
        <div className="principal-TiposGestor">
            <div className="contenedor-TiposGestor">
                <h1 className="h1-TiposGestor">
                    Tipos de gestores de inventario
                </h1>
                <p>
                    El sistema de inventarios es un sistema de seguimiento que informa sobre la cantidad de materias primas, suministros o productos terminados que se tienen disponibles. Garantiza que la cantidad correcta de materiales, con la calidad adecuada, esté disponible en el lugar correcto y en el momento adecuado.
                </p>
                <p>
                    Este sistema se actualiza cada vez que se vende un artículo o se utilizan materias primas para fabricar un producto, y así saber qué se tiene disponible para el día siguiente. También permite ordenar productos con antelación, para poder tener lo que se necesita en todo momento.
                </p>
                <p>
                    Cuando la gente piensa en un sistema de inventarios, es común relacionarlo con la industria minorista. Sin embargo, aunque las tiendas requieren un sistema de inventarios eficaz para poder operar con éxito, este también se usa en muchos otros tipos de negocios, como manufactura, servicios públicos, salud, gobierno y educación.
                </p>
                <p>
                    Como parte de la cadena de suministro, el sistema de inventarios incluye aspectos como el control y la supervisión de las compras (tanto de los proveedores como de los clientes), el mantenimiento del almacenamiento del inventario, el control de la cantidad de productos en venta y el cumplimiento de los pedidos.
                </p>
                <h2>Sistema de inventarios perpetuo</h2>
                <p>
                    Con un sistema de inventarios perpetuo, se actualizan continuamente los registros de inventarios, contando las adiciones y sustracciones cuando los artículos de inventarios son recibidos, vendidos, trasladados de una ubicación a otra, seleccionados para consumirlos y desechados.
                </p>
                <p>
                    Algunas organizaciones prefieren este tipo de sistema porque entrega información actualizada de los inventarios y maneja mejor los conteos de inventarios físicos.
                </p>
                <h2>Sistema de inventarios periódico</h2>
                <p>
                    El sistema de inventarios periódico no rastrea el inventario continuamente, sino que permite a las organizaciones conocer los niveles de inventarios inicial y final, durante un cierto período de tiempo.
                </p>
                <p>
                    Este sistema rastrea el inventario usando conteos físicos. Cuando se completa el inventario físico, el saldo en la cuenta de compras se suma a la cuenta de inventarios y se ajusta para que coincida con el costo del inventario final.
                </p>
                <p>
                    Las empresas pueden elegir si calcular el costo del inventario final utilizando los métodos de contabilidad de inventarios LIFO, FIFO u otro método, teniendo en cuenta que el inventario inicial es el inventario final del período anterior.
                </p>
                <Link to="/Dashboard">
                    <button className="btn-TiposGestor-volver">
                        Volver
                    </button>
                </Link>
            </div>
        </div>
    );
};
export default Tipos;