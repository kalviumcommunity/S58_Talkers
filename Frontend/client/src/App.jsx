
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  
  const [data, setData] = useState(0);

  
  useEffect(()=>{
   
    fetch('http://localhost:3000/GET')
   
    .then(res=> res.json())
   
    .then(res=>{
      console.log(res)
      setData(res)
     })
 
     .catch(err=>{
      console.log(err);
     })
  
    },[])

  return (
    <>
      <div>
        
        {data && data.map((e)=>{
        
        return (<div>
        
            <h1>{e.name} - {e.age}</h1>
        
            <img src={e.img_link} alt="person"/>
        
          </div>)
        
        })}
      </div>
    </>
  )
}

export default App
