import '../styles/home6.css';

const Home6 = () => {
    return (
        <main className="home6-main">
            <div className="home6-container">
            <div className="home6-card">
                <img className='home6-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ9DMNFHxwZcfPXJrJeBMITxPMP3FMZk_ixXzTfzt4G_C-G058" alt="Diseño Gráfico" />
                <div className="home6-content">
                    <h1>Diseño Gráfico</h1>
                    <p>Podemos crear la <span>identidad corporativa</span> de tu empresa. Diseño, Maquetación de folletos, Catálogos, Papelería y mucho más.</p>
                </div>
            </div>

            <div className="home6-card">
            <img className='home6-img' src="https://img.freepik.com/foto-gratis/hombre-negocios-financiero-inspector-secretaria-haciendo-informe-calculo-o-comprobacion-balance-inspector-servicio-rentas-internas-revisando-documento-concepto-auditoria_1423-126.jpg?size=626&ext=jpg" alt="Gestión de Redes" />
                <div className="home6-content">
                    <h1>Gestión Redes</h1>
                    <p>Nosotros creamos y optimizamos tus <span>perfiles en las Redes Sociales</span>. Importantes para que tu presencia online sea completa.</p>
                </div>
            </div>

            <div className="home6-card">
            <img className='home6-img' src="https://image.freepik.com/foto-gratis/desarrollo-programadores-desarrollo-tecnologias-diseno-codificacion-sitios-web_18497-1090.jpg" alt="Desarrollo Web" />
                <div className="home6-content">
                    <h1>Desarrollo Web</h1>
                    <p>Creamos tu <span>página web utilizando las últimas tecnologías disponibles</span>. Una Web adaptativa a tu móvil o Tablet y con un gestor de contenido fácil.</p>
                </div>
            </div>
        </div>
        </main>
    )
}   

export default Home6;