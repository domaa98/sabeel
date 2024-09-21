import { Link } from 'react-router-dom';
import './Card.css'


const Card = ({image1 , title1 , buttonName ,to}) => {

  return (
    
    <div className="card">

      <div className="card-row image-row">
        <img src={image1} alt='' className="card-image" />
      </div>

      <div className="card-row title-row">
        <h3 className="card-title">{title1}</h3>
      </div>
      
      <div className="card-row button-row">
        <Link to={to}>
        <button className="card-button" >
           {buttonName}
        </button>
        </Link>
      </div>

    </div>
  );

  
}

export default Card
