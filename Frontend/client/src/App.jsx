import { useEffect, useState } from 'react'
import './App.css'
import { api_url } from './API/api';
import Form from  "../Component/Form";
import Home from '../Component/Home';
import { Route, Routes } from 'react-router-dom';

function App() {

  const [data, setData] = useState(0);
  const [form,setForm]=useState(true)


  useEffect(()=>{
     fetch(`${api_url}/GET`)
     .then(res=> res.json())
     .then(res=>{
      console.log(res)
      setData(res)
     })
     .catch(err=>{
      console.log(err);
     })
  },[])

  return(
    <>
      <Routes>
        <Route path="/" element={<Home data={data}/>}></Route>
        <Route path="/post_data" element={<Form/>}></Route>
      </Routes>
    </>
  )

  
    // <>
    // {
    //   if(form){
    //    return ( <Form form={form} setForm={setForm}/>)
    //   }else{
    //     return (
    //       <Home data={data}/>
    //   )
    //   }
    // }
    
      
    {/* </> */}
  // )
}

export default App
