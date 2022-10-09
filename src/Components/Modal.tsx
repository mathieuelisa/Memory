import '../App.scss';

function Modal() {

  // We refresh the page for play again
  const refreshPage = () => {
    window.location.reload()
  }

  return (
      <> 
        <div className='modal__container'>
          <div className='modal'>
              <div className='modal-title'>PERDU</div>
              <div>Désolé, le temps est écoulé.</div>
              <button onClick={refreshPage} className="modal-button">Réessayer ?</button>
          </div>
        </div>
      </>
    )
}

export default Modal;
