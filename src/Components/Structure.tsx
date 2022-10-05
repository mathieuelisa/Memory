import '../App.scss';


function Structure() {

    const cards = [
        {id: 1, name:'phone'},
        {id: 2, name:'facebook'},
        {id: 3, name:'email'},
        {id: 4, name:'instagram'},
        {id: 5, name:'www'},
        {id: 6, name:'youtube'},
        {id: 7, name:'menu'},
        {id: 8, name:'whatsapp'},
    ]

const doubleCardsArray = [...cards, ...cards]

  return (
    <div className='structure__container'>
        {doubleCardsArray.map((card, index) => {

            return(
                <div key={index} className="structure__card">
                   <div>{card.name}</div>
                </div>
            )
        } )}
    </div>
  );
}

export default Structure;
