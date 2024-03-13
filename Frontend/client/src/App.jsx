import { useEffect, useState } from 'react'
import './App.css'
import { api_url } from './API/api';
import Form from  "../Component/Form";
import Home from '../Component/Home';
import { Route, Routes } from 'react-router-dom';
import UpdateForm from '../Component/UpdateForm';
import RegisterForm from '../Component/Register';

function App() {

  const [data, setData] = useState(0);
  const [form,setForm]=useState(true);
  const [flag,setFlag]=useState(true)


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
  },[flag])

  return(
    <>
      <Routes>
        <Route path="/" element={<Home data={data} setFlag={setFlag} flag={flag} />}></Route>
        <Route path="/post_data" element={<Form/>}></Route>
        <Route path="/update_data/:id" element={<UpdateForm />}></Route>
        <Route path="/register" element={<RegisterForm />}></Route>
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
