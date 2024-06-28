import './home7Card.css';

const Home7Card = (data) => {
    return (
      <div className='home7-card'>
          <div className="home7-card_logo">
              <img src={`http://localhost:5173/src/assets/${data.logo}`} alt="" />
          </div>
          <div className="home7-card_data">
              <h2>{data.name}</h2>
              <p>{data.date} | {data.price} </p>
          </div>
      </div>
    )
  }

export default Home7Card;