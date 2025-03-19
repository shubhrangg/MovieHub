import './App.css'

function App() {
  return (
    <>
        <Text display="TMKC" />
        <Text display={"Rajindar"} />
    </>
  );
}

function Text({display}){
  return(
    <div>
      <p>{display}</p>
    </div>
  )
}

export default App
