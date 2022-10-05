import '../App.scss';
// import Card from './Card';
import image1 from "../images/email.png";
import image2 from "../images/facebook.png";
import image3 from "../images/instagram.png";
import image4 from "../images/menu.png";
import image5 from "../images/phone.png";
import image6 from "../images/whatsapp.png";
import image7 from "../images/www.png";
import image8 from "../images/youtube.png";

function Structure() {

    const cards = [
        {id: 1, name:'phone', src: image1 },
        {id: 2, name:'facebook', src: image2 },
        {id: 3, name:'email', src: image3},
        {id: 4, name:'instagram', src: image4},
        {id: 5, name:'www', src: image5},
        {id: 6, name:'youtube', src: image6},
        {id: 7, name:'menu', src: image7},
        {id: 8, name:'whatsapp', src: image8},
    ]

const doubleCardsArray = [...cards, ...cards]

const handleClick = (id:any) =>{
    console.log("mon id: ", id)
}

  return (
    <div className='structure__container'>
        {doubleCardsArray.map((card, index) => {

            return(
                // <Card />
                <div className="structure__card" onClick={()=>handleClick(index)}>
                    <img src={card.src} className="image" alt="img"/>
                </div>
            )
        } )}
    </div>
  );
}

export default Structure;
