import { useEffect, useState } from 'react';
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
import Card from './Card';

function Structure() {

    let cards: any;

    cards = [
        {id: 1, name:'phone', src: image1 },
        {id: 2, name:'facebook', src: image2 },
        {id: 3, name:'email', src: image3},
        {id: 4, name:'instagram', src: image4},
        {id: 5, name:'www', src: image5},
        {id: 6, name:'youtube', src: image6},
        {id: 7, name:'menu', src: image7},
        {id: 8, name:'whatsapp', src: image8},
    ]

const [flipCard, setFlipCard] = useState<number>(0)
const [matched, setMatched] = useState<any[]>([])
const [mixedCard, setMixedCard] = useState<any[]>([])

// I made two arrays in one to get 16 cases...
const doubleCardsArray = [...cards, ...cards]

// useEffect(()=>{

//     if(secondTry && firstTry?.id === secondTry?.id){
//         setMatched([...matched, firstTry?.id])
//     }

//     if(flipCard.length === 2) setTimeout(()=>setFlipCard([]), 800)

// },[flipCard, matched])

const handleClick = (id:number) =>{
    // I put each ID card i clicked in my array...
    // setFlipCard((cards) => [...cards, id])

    console.log(id)
}

const mixCard = () =>{
    const mixCard = doubleCardsArray.sort(()=>Math.random() - 0.5).map((card) => ({...card, id: Math.random()}))

    setMixedCard(mixCard)
    setFlipCard(0)
} 

console.log(mixedCard)
  return (
    <div className='structure__container'>
        {mixedCard.map((card) => (
                    <>
                        <Card card={card} key={card.id}/>
                    </>
        ))
    }
    <button onClick={()=>mixCard()}>Play</button>
    </div>

  );
}

export default Structure;
