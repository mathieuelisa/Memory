import '../App.scss';

interface Props {
  card: any
}

function Card(props: Props) {

  return (
      <> 
      <div className={`second__container ${false ? 'flip' : ''} `}> 
        <div className="structure__card">
          <img src={props.card.src} className="image" alt="img"/>
        </div>

        <div className='back__card'></div>
        </div>
      </>
    )
}

export default Card;
