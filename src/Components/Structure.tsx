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
        {id: 1, name:'phone', src: image1, matched: false },
        {id: 2, name:'facebook', src: image2, matched: false },
        {id: 3, name:'email', src: image3, matched: false},
        {id: 4, name:'instagram', src: image4, matched: false},
        {id: 5, name:'www', src: image5, matched: false},
        {id: 6, name:'youtube', src: image6, matched: false},
        {id: 7, name:'menu', src: image7, matched: false},
        {id: 8, name:'whatsapp', src: image8, matched: false},
    ]

// The card we flip
const [flipCard, setFlipCard] = useState<any>(0);

// The mixed card
const [mixedCard, setMixedCard] = useState<any[]>([]);

// The two try 
const [firstTry, setFirstTry] = useState<any>();
const [secondTry, setSecondTry] = useState<any>();

// I made two arrays in one to get 16 cases...
const doubleCardsArray = [...cards, ...cards]

const mixCard = () =>{
    const mixCard = doubleCardsArray.sort(()=>Math.random() - 0.5).map((card) => ({...card, id: Math.random()}))

    setMixedCard(mixCard)
    setFlipCard(0)
} 

const handleChoice = (flipCard: any) => {
    // If the value have been select for first time we update the second try else the first one
    if(firstTry) {
        setSecondTry(flipCard)
    } else {
        setFirstTry(flipCard)
    }
}

useEffect(()=>{
    if(firstTry && secondTry){

        if(firstTry.name === secondTry.name){
            console.log("ca match")
            setMixedCard(prevCard => {
                return prevCard.map(cards =>{
                    if (cards.src === firstTry.src){
                        return {...cards, matched: true}
                    } else {
                        return cards
                    }
                })
            }) 
            // We put variables at 0 for retry
            setFirstTry(null)
            setSecondTry(null)
        } else {
            console.log("ca matched passsss")
            setTimeout(()=>{
                setFirstTry(null)
                setSecondTry(null)
            }, 1000)
        }
    }
},[secondTry, firstTry])

console.log('firstTry', firstTry);

  return (
    <div className='structure__container'>
        {mixedCard.map((card) => {
           return (  
                    <>
                        <Card 
                            card={card} 
                            key={card.id} 
                            handleChoice={handleChoice}
                            switchFace={card === firstTry || card ===secondTry || card.matched}
                        />
                    </> 
                )
            })
    }
    <button onClick={()=>mixCard()}>Play</button>
    </div>

  );
}

export default Structure;
