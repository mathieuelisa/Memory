const ProgressBar = (props: any) => {
  const {valueProgressBar} = props

  const progressBar__container = {
    width: '380px',
    height: '20px',
    border: '1px solid rgb(40, 39, 39)',
    borderRadius: '10px',
    marginTop: '20px',
  };

  const progressBar__inside = {
      backgroundColor: 'rgb(40, 39, 39)',
      height: '20px',
      borderRadius: '15px',
      width: `${valueProgressBar}%`,
  }

  return (
      <> 
        <div style={progressBar__container}>
          <div style={progressBar__inside}></div>
        </div>
      </>
    )
}

export default ProgressBar;
