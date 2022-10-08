import '../App.scss';

interface Props {
  card: any;
  handleChoice: any;
}

function Card(props: Props) {

  const handleClick = () => {
    props.handleChoice(props.card)
  }

  return (
      <> 
      <div className={`second__container ${true ? 'flip' : ''} `}> 
        <div className="structure__card">
          <img src={props.card.src} className="image" alt="img"/>
        </div>

        <div className='back__card' onClick={handleClick}></div>
        </div>
      </>
    )
}

export default Card;
