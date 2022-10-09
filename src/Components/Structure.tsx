import { useEffect, useState } from 'react';

import '../App.scss';

import image1 from "../images/email.png";
import image2 from "../images/facebook.png";
import image3 from "../images/instagram.png";
import image4 from "../images/menu.png";
import image5 from "../images/phone.png";
import image6 from "../images/whatsapp.png";
import image7 from "../images/www.png";
import image8 from "../images/youtube.png";

// Components
import Card from './Card';
import Modal from './Modal';
import ProgressBar from './ProgressBar';

function Structure() {
    let cards: any;

    cards = [
        {id: 1, name:'phone', src: image1, matched: false},
        {id: 2, name:'facebook', src: image2, matched: false},
        {id: 3, name:'email', src: image3, matched: false},
        {id: 4, name:'instagram', src: image4, matched: false},
        {id: 5, name:'www', src: image5, matched: false},
        {id: 6, name:'youtube', src: image6, matched: false},
        {id: 7, name:'menu', src: image7, matched: false},
        {id: 8, name:'whatsapp', src: image8, matched: false},
    ]

// The mixed card
const [mixedCard, setMixedCard] = useState<{ id: number, name: string, src: string, matched: boolean }[]>([]);

// The two tries
const [firstTry, setFirstTry] = useState<any>();
const [secondTry, setSecondTry] = useState<any>();

// Modal for play again if you lose
const [modal, setModal] = useState<boolean>(false)

// ProgressBar
const [valueProgressBar, setValueProgressBar] = useState<number>(0)

// Two arrays in one to get 16 cases
const doubleCardsArray = [...cards, ...cards]

const mixCard = () =>{
    const mixCard = doubleCardsArray.sort(()=>Math.random() - 0.5).map((card) => ({...card, id: Math.random()}))

    setMixedCard(mixCard)

    // Progress bar with 100sec
    setInterval(() => {
      const progress: any = setValueProgressBar((oldValue: any) => {
          const newValue = oldValue + 1 

          if (newValue === 101) {
                clearInterval(progress)
                setModal(true)
            } else {
                return newValue
            }
        })
    }, 1000)
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

            setFirstTry(null)
            setSecondTry(null)
        } else {
            setTimeout(()=>{
                setFirstTry(null)
                setSecondTry(null)
            }, 1000)
        }
    }
},[secondTry, firstTry])

  return (
    <> 
        <button onClick={()=>mixCard()} className="button-play">Jouer</button>
            <ProgressBar valueProgressBar={valueProgressBar} />
        {modal && <Modal/>}
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
                    </>)
                })
            }
        </div>
    </>
  );
}

export default Structure;
