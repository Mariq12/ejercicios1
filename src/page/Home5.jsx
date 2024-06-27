import '../styles/home5.css';

const Home5 = () => {
    return (
        <main className="home5-main">
            <div className="title-cards">
                    <h1>PÁGINA 5</h1>
                </div>
            <section className="home5-container">
                
                <article className="home5-card">
                    <div className="home5-card-img image1"></div>
                    <h2>Diseño Gráfico</h2>
                    <p>
                        Podemos crear la identidad corporativa de tu empresa. Diseño, Maquetación de folletos, Catálogos, Papelería y mucho más.
                    </p>
                    <a className="home5-card-btn">Leer más</a>
                </article>

                <article className="home5-card">
                    <div className="home5-card-img image2"></div>
                    <h2>Gestión de Redes</h2>
                    <p>
                        Nosotros creamos y optimizamos tus perfiles en las Redes Sociales. Importantes para que tu presencia online sea completa.
                    </p>
                    <a className="home5-card-btn">Leer más</a>
                </article>

                <article className="home5-card">
                    <div className="home5-card-img image3"></div>
                    <h2>Desarrollo Web</h2>
                    <p>
                    tecnologías disponibles. Una Web adaptativa a tu móvil o Tablet y con un gestor de contenido fácil.
                    </p>
                    <a className="home5-card-btn">Leer más</a>
                </article>
            </section>
        </main>
    );
};

export default Home5;
