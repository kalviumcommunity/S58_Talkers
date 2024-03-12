import React from 'react'
import { useParams } from 'react-router-dom';

const UpdateForm = () => {

    const  [name, setName] = React.useState('');
    const [number, setNumber] = React.useState('');
    const  [image, setImage] = React.useState('');

    const params=useParams();
    let id=params.id;
    // console.log(id)


 
    function handleName(e){
     setName(e.target.value)
    }
 
    function handleNumber(e){
     setNumber(e.target.value)
    }
 
    function handleImage(e){
     setImage(e.target.value)
    }

    const handleSubmit=(e)=>{

        e.preventDefault();

        const data={
            name:name,
            sr_no:number,
            img_link:image,
           }

        fetch(`http://localhost:3000/UPDATE/${id}`,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        }).then((res)=>res.json())
        .then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
      

    }

  return (
    <form onSubmit={handleSubmit}>
                
        <input onChange={handleName} type="text" placeholder='Name'/>
        <input onChange={handleNumber} type="number" placeholder='Serial Number'/>
        <input onChange={handleImage} type="text" placeholder='Image Link'/>
        <button type="submit" >Update Entity</button>

    </form>
  )
}

export default UpdateForm