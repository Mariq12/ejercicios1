import '../styles/home3.css';

const Home3 = () => {
    return (
        <div>
            <div className="title-cards">
                <h2>PÁGINA 3</h2>
            </div>
            <div className="home3-container">
                <div className="home3-card">
                    <div className="hom3-content">
                        <h3>Ejemplo de Título</h3>
                        <p>Ejemplo de descripción para Home3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quae laudantium libero iste similique molestiae eaque impedit cupiditate deserunt repellendus!
                        </p>
                    </div>
                    <div className="home3-footer">
                        <button className="btn">Leer Más</button>
                    </div>
                </div>

                <div className="home3-card">
                    <div className="hom3-content">
                        <h3>Ejemplo de Título</h3>
                        <p>Ejemplo de descripción para Home3. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        </p>
                    </div>
                    <div className="home3-footer">
                        <button className="btn">Leer Más</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home3;
