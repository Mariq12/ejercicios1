import '../styles/home.css'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/home2');
    };

    return (
        <div>
            <div className="title-cards">
                <h2>PÁGINA 1</h2>
            </div>
            <div className="container-card">
                <div className="card">
                    <figure>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ9DMNFHxwZcfPXJrJeBMITxPMP3FMZk_ixXzTfzt4G_C-G058" alt="Diseño Gráfico" />
                    </figure>
                    <div className="contenido-card">
                        <h3>Diseño Gráfico</h3>
                        <p>Podemos crear la identidad corporativa de tu empresa. Diseño, Maquetación de folletos, Catálogos, Papelería y mucho más.</p>
                        <button className="btn" onClick={handleButtonClick}>Leer Más</button>
                    </div>
                </div>
                <div className="card">
                    <figure>
                        <img src="https://img.freepik.com/foto-gratis/hombre-negocios-financiero-inspector-secretaria-haciendo-informe-calculo-o-comprobacion-balance-inspector-servicio-rentas-internas-revisando-documento-concepto-auditoria_1423-126.jpg?size=626&ext=jpg" alt="Gestión de Redes" />
                    </figure>
                    <div className="contenido-card">
                        <h3>Gestión de Redes</h3>
                        <p>Nosotros creamos y optimizamos tus perfiles en las Redes Sociales. Importantes para que tu presencia online sea completa.</p>
                        <button className="btn" onClick={handleButtonClick}>Leer Más</button>
                    </div>
                </div>
                <div className="card">
                    <figure>
                        <img src="https://image.freepik.com/foto-gratis/desarrollo-programadores-desarrollo-tecnologias-diseno-codificacion-sitios-web_18497-1090.jpg" alt="Desarrollo Web" />
                    </figure>
                    <div className="contenido-card">
                        <h3>Desarrollo Web</h3>
                        <p>Creamos tu página web utilizando las últimas tecnologías disponibles. Una Web adaptativa a tu móvil o Tablet y con un gestor de contenido fácil.</p>
                        <button  className="btn" onClick={handleButtonClick}>Leer Más</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
