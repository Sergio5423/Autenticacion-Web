import { Link } from "react-router-dom"
import "../design/Contable.css";

const Estrategias = () => {
    return (
        <div className="principal-Cont">
            <div className="contenedor-Cont">
                <h1 className="h1-Cont">
                    ¿Que es un software contable?
                </h1>
                <p>
                    La contabilidad, es una materia muy delicada y que conlleva años de práctica, estudio y experiencia para poder desarrollarla completamente de forma adecuada. Por ello, en la gran mayoría de los países del mundo, es una profesión que requiere de certificación universitaria con muchos años de estudio.
                </p>
                <p>
                    Sin duda, un software contable significa una gran ayuda para administrar la contabilidad de las empresas. En la actualidad, la tarea de un contador ha sido simplificada debido al uso de programas específicos para contabilidad, y que permiten manejar con mayor facilidad los movimientos y operaciones diarias de las empresas que administran.
                </p>
                <p>
                    Un software contable, es un sistema informático que se implementa con el fin de simplificar, organizar y facilitar las tareas de contabilidad de una organización.
                </p>
                <p>
                    La facilidad de uso de un sistema contable, permite que puedan utilizarlos incluso aquellos individuos que no tengan los conocimientos o estudios necesarios en materia de contabilidad, o empresas pequeñas, como Startups o Pymes, que no puedan contar con un contador o equipo contable exclusivo.
                </p>
                <p>
                    De esta forma, el trabajo de contabilidad de estos negocios es mucho mas sencillo de manejar.
                </p>
                <p>
                    Dependiendo del funcionamiento del software, así como de su propósito principal, existen cientos de alternativas que se adaptan mejor a la forma de un determinado negocio o tipo de empresa, así como también hay programas que pueden ser utilizados de forma genérica, para muchos tipos de negocios totalmente distintos.
                </p>
                <h2 className="h2-Cont">Características del software de contabilidad</h2>
                <p>
                    Un software de contabilidad, puede favorecer sin duda a nuestro negocio en muchos ámbitos. Actualmente, existen cientos de programas que podremos encontrar si realizamos una búsqueda por internet.
                </p>
                <p>
                    Sin embargo, podemos preguntarnos cuáles son los mejores, o cuáles realmente significan una mejora real y valiosa a nuestro negocio o emprendimiento.
                </p>
                <p>
                    Existen ciertas características que cualquier software contable debería cubrir como mínimo: 1) Facilidad de uso, 2) Informes, 3) Flexibilidad, 4) Seguridad, 5) Integración y 6) Portabilidad.
                </p>
                <p>
                    Facilidad de uso
                    Cuando buscamos un software para manejar los datos y la contabilidad de nuestra empresa, una de las principales cosas que esperamos del mismo es que sea sencillo de utilizar.
                </p>
                <p>
                    Estamos buscando simplificar esta área de nuestra empresa con esta herramienta, no dificultarla aún mas, claro está.
                </p>
                <p>
                    Por ello, una de las características principales que tenemos que buscar en un programa contable, es que sea fácil de utilizar y claro de entender.
                </p>
                <p>
                    Existen muchas alternativas, por lo que, si no nos convence un determinado programa, podemos intentar con otro, y así sucesivamente hasta hallar uno que se adecúe a nuestras posibilidades y que sea de nuestro agrado.
                </p>
                <p>
                    El principal beneficio de un software contable es automatizar el trabajo que antes se hacía de forma manual.
                </p>
                <p>
                    Además, debe ser lo suficientemente sencillo de manejar para que pueda hacerlo cualquier persona, sin que tenga que tener conocimientos elevados de informática o manejo de ordenadores, a fin de efectuar el trabajo de forma más rápida y con menos errores.
                </p>
                <Link to="/Dashboard">
                    <button className="btn-cont-volver">
                        Volver
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Estrategias;