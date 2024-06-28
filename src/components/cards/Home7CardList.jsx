import Home7Card from "./home7Card";
import './home7CardList.css';

const Home7CardList = () => {
    return (
        <div className='home7-cardList'>
            <Home7Card name="Javascript desde Cero" date="20.06.2024" logo="meter7.png" price="10.00"/>
            <Home7Card name="Java" date="20.12.2023" logo="meter1.png" price="10.00"/>
            <Home7Card name="Flutter" date="20.11.2023" logo="meter4-.png" price="10.00"/>
            <Home7Card name="React JS desde Cero" date="20.06.2024" logo="meter8.png" price="10.00"/>
        </div>
    );
}

export default Home7CardList;