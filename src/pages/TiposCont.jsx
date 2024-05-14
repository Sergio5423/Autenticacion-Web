import { Link } from "react-router-dom"
import "../design/TiposCont.css"

const Tipos = () => {
    return (
        <div className="principal-TiposCont">
            <div className="contenedor-TiposCont">
                <h1 className="h1-TiposCont">
                    Tipos de software contable
                </h1>
                <p>
                    Mucho se habla sobre los beneficios de utilizar un software contable en una empresa y las propiedades que estos programas tienen para simplificar el trabajo de los contadores; sin embargo, entre tanta información a veces no es clara la forma en la que un emprendedor realmente se puede favorecer y cuáles son los tipos de software de contabilidad existentes. En este artículo te explicamos.
                </p>
                <p>
                    Antes de empezar a nombrarlos, es importante pensar cuál es la necesidad que se pretende solventar al buscar uno de estos programas, ya que intuitivamente podemos hablar de niveles de especialidad y especificidad que dependen del usuario, si se trata de llevar contabilidad doméstica, un profesional que cobra honorarios, una microempresa, una sucursal o una empresa con varios puntos de venta.
                </p>
                <h2>Excel</h2>
                <p>
                    Es tal vez uno de los programas informáticos más conocidos en el mundo gracias al sin fin de posibilidades que ofrecen sus herramientas de forma gratuita; sin embargo, manejar Excel a nivel avanzado es un oficio digno de preparación técnica, ya que no es intuitivo ni se puede manejar sin haberse capacitado concienzudamente para dicho fin.
                </p>
                <p>
                    La plataforma básica de Excel es la hoja de cálculo, instrumento que fue diseñado para simular los sistemas de cálculo en papel que anteriormente se utilizaban para manejar datos contables y que está formada por una matriz de dos dimensiones, es decir: filas y columnas.
                </p>
                <p>
                    No obstante, técnicamente Excel no es un software contable, sino que fue un programa al que se le empezó a dar este uso y se popularizó al punto de convertirse en la herramienta principal de los contadores y, en su defecto, de los administradores.
                </p>
                <p>
                    Actualmente, utilizar Excel para llevar la contabilidad de una empresa es una práctica anticuada teniendo en cuenta que ya existen herramientas especializadas para ejecutar tareas contables, con plantillas y calculo predeterminados creados de acuerdo a la legislación y las múltiples variables que un profesional contable debe tener en cuenta para trabajar.
                </p>
                <p>
                    Además, porque al emplear Excel el usuario está obligado a digitar toda la información manualmente invirtiendo tiempo y energía en labores operativas que se vuelven dispendiosas y que se pueden evitar fácilmente utilizando un software contable y administrativo.
                </p>
                <h2>ERP</h2>
                <p>
                    ERP, Enterprise Resource Planning en inglés, es un sistema de planificación de recursos empresariales, utilizado para gestionar y monitorear las tareas de las diferentes áreas en una empresa; desde la producción hasta la distribución de productos, pasando por la administración, nómina, etc.
                </p>
                <p>
                    La función principal de una ERP es centralizar la información y los procesos, de modo que se pueda tener mayor control sobre el total de la compañía sin importar la especialización de cada departamento y trabajador, con lo que se puede lograr mayor eficiencia y uso acertado de los recursos.
                </p>
                <h2>Software contable en la nube</h2>
                <p>
                    Los software contables en la nube son la evolución de los software tradicionales, ya que fueron creados para manejar toda la información financiera de una empresa o persona natural desde una sola plataforma, simplificando procesos, generando cálculos y automatizando operaciones para quitarle carga operativa a los usuarios desde la nube, es decir, utilizando internet.
                </p>
                <p>
                    Esta característica representa un valor agregado, ya que se elimina la necesidad de instalar un programa en un computador y comprar una licencia como se hacía hasta hace poco. Lo cual generaba un costo alto y requería que se dispusiera de computadores con ciertas características que pudieran soportar esta carga, ya fuera por parte de la memoria o del procesador de los equipos.
                </p>
                <p>
                    Además, con un software tradicional se necesitaba disponer de tiempo para realizar las instalaciones en cada uno de los equipos que se fueran a destinar para este fin, por lo que además se corría el peligro de que, si el equipo sufría una falla, la información corriera peligro.
                </p>
                <Link to="/Dashboard">
                    <button className="btn-Tiposcont-volver">
                        Volver
                    </button>
                </Link>
            </div>
        </div>
    );
};
export default Tipos;