import { useEffect, useState } from 'react'
import './App.css'
import { api_url } from './API/api';
import Form from  "../Component/Form";
import Home from '../Component/Home';
import { Route, Routes } from 'react-router-dom';
import UpdateForm from '../Component/UpdateForm';
import RegisterForm from '../Component/Register';
import LoginForm from '../Component/Login';

function App() {
  const [mainData, setMainData] = useState(0);
  const [data, setData] = useState(0);
  const [form,setForm]=useState(true);
  const [flag,setFlag]=useState(true);
  const [login,setLogin]=useState(false);
  let createdBy=[];

  useEffect(()=>{
    fetch(`${api_url}/GET`)
     .then(res=> res.json())
     .then(res=>{
      setData(res);
      setMainData(res);
      
      res.map((ele)=>{
        let flag=true;
        if(createdBy.length==0){
          createdBy.push(ele.created_by)
        }
        else{
          for(let i=0;i<createdBy.length;i++){
            // console.log(ele.created_by==createdBy[i],createdBy)
            if(ele.created_by==createdBy[i]){
              flag=false;
              break;
            }
          }
          if(flag){
            createdBy.push(ele.created_by)
          }
        }
      });
      console.log(createdBy)
     })
     .catch(err=>{
      console.log(err);
     })
  },[]);

  useEffect(()=>{
     fetch(`${api_url}/GET`)
     .then(res=> res.json())
     .then(res=>{
      setData(res);
      setMainData(res)
     })
     .catch(err=>{
      console.log(err);
     })
  },[flag]);

  

  return(
    <>
      <Routes>  
        <Route path="/" element={<Home data={data} setData={setData} mainData={mainData} createdBy={createdBy} setFlag={setFlag} flag={flag} login={login} setLogin={setLogin}/>}></Route>
        <Route path="/post_data" element={<Form/>}></Route>
        <Route path="/update_data/:id" element={<UpdateForm />}></Route>
        <Route path="/register" element={<RegisterForm />}></Route>
        <Route path="/Login" element={<LoginForm login={login} setLogin={setLogin}/>}></Route>
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
