import { Link } from "react-router-dom";
import '../styles/home4.css';

const Home4 = () => {
    return (
        <div className="home4-body"> 
            <div className="title-cards">
                <h1>PÁGINA 4</h1>
            </div>
            <div className="home4-container">
                <div className="home4-card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ9DMNFHxwZcfPXJrJeBMITxPMP3FMZk_ixXzTfzt4G_C-G058" alt="Diseño Gráfico" />
                    <h4>Diseño Gráfico</h4>
                    <p>
                        Podemos crear la identidad corporativa de tu empresa. Diseño, Maquetación de folletos, Catálogos, Papelería y mucho más.
                    </p>
                    <Link to="#" className="btn">Leer más</Link>
                </div>

                <div className="home4-card">
                    <img src="https://img.freepik.com/foto-gratis/hombre-negocios-financiero-inspector-secretaria-haciendo-informe-calculo-o-comprobacion-balance-inspector-servicio-rentas-internas-revisando-documento-concepto-auditoria_1423-126.jpg?size=626&ext=jpg" alt="Gestión de Redes" />
                    <h4>Gestión Redes</h4>
                    <p>
                    <p>Nosotros creamos y optimizamos tus perfiles en las Redes Sociales. Importantes para que tu presencia online sea completa.</p>
                    </p>
                    <Link to="#" className="btn">Leer más</Link>
                </div>
            </div>
        </div>
    )
}

export default Home4;