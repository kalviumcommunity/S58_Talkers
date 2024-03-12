import React from 'react'
import './Form.css'

function Form(props){

  let form=props.form;
  let setForm=props.setForm;

   const  [name, setName] = React.useState('');
   const [number, setNumber] = React.useState('');
   const  [image, setImage] = React.useState('');

   function handleName(e){
    setName(e.target.value)
   }

   function handleNumber(e){
    setNumber(e.target.value)
   }

   function handleImage(e){
    setImage(e.target.value)
   }

   function handleSubmit(e){
    e.preventDefault();

    const data={
      name:name,
      sr_no:number,
      img_link:image,
     }

    fetch('http://localhost:3000/POST', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      alert("Data Submitted Successfully");
      window.location.reload();
    })
    .catch(error => {
      console.error('Error:', error);
    });
   }
  
   

    return(
        <>
            <form onSubmit={handleSubmit}>
                
                <input onChange={handleName} type="text" placeholder='Name'/>
                <input onChange={handleNumber} type="number" placeholder='Serial Number'/>
                <input onChange={handleImage} type="text" placeholder='Image Link'/>
                <button type="submit" >Add Entity</button>
            </form>
        </>
    )
}
export default Form;