import React,{ useEffect} from 'react'

const Home = () => {


useEffect(() =>{

  document.title="E-comm web || Home"
},[])  
  return (
    <div className='text-danger' >
      <h2 >Hello SALMAN welcome to my world!!!!!</h2>
      {/* here we can add caurosals */}
    </div>
  )
}

export default Home;
