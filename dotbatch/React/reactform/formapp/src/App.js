import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// State tracking

function App() {

  // const[firstName,setFirstName]=useState("");
  // const[lastName,setLastName]=useState("");
  


  //   function changeFirstNameHandler(event){
  //     // console.log("Printing First name");
  //     // console.log(event.target.value);
  //     setFirstName(event.target.value);
  //   }

  //   function changeLastNameHandler(event){
  //     // console.log("Printing Last Name");
  //     // console.log(event.target.value);
  //     setLastName(event.target.value);
  //   }

  //   console.log(firstName);
  //   console.log(lastName);

  const[formData,setFormData]=useState({firstName:"",lastName:"",email:"",comments:"",isVisible:true,mode:"",favCar:""});
  // console.log(formData)
  function changeHandler(event){
    const {name,value,checked,type}=event.target
    setFormData(prevFormData=>{
      return{
        ...prevFormData,
        
        [name]: type ==="checkbox" ? checked : value 
      }
    });
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("Finally printing the entireform ka data...")
    console.log(formData);
  }
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input type='text' 
        onChange={changeHandler}
        placeholder='first name' name='firstName'></input>

        <br/>
        <br></br>


        <input type='text' 
        onChange={changeHandler}
        placeholder='last name' name='lastName'></input>

        <br/>
        <br></br>


        <input type='email' 
        onChange={changeHandler}
        placeholder='Email' name='email' value={formData.email}></input>
        <br/>
        <br></br>

        <textarea onChange={changeHandler} name='comments' value={formData.comments}></textarea>
        <br/>
        <br></br>


        <input type='checkbox' 
        onChange={changeHandler}
        name='isVisible' checked={formData.isVisible}></input>
         <label htmlFor='isVisible'>Am I visible ?</label>

         <fieldset>
          <legend>Mode:</legend>
            <input type='radio' onChange={changeHandler} name='mode' value="Offline-Mode" id="Offline-Mode"
            checked={formData.mode==="Offline-Mode"}></input>
            <label htmlFor='Offline-Mode'>Offline Mode</label>

            <input type='radio' onChange={changeHandler} name='mode' value="Online-Mode" id="Online-Mode"
            checked={formData.mode==="Online-Mode"}></input>
            <label htmlFor='Online-Mode'>Online Mode</label>
         </fieldset>

         <label htmlFor='favCar'>Tell me your Favourite Car </label>
         <select 
         onChange={changeHandler}
         name='favCar'
         value={formData.favCar}
         id='favCar'>

         <option value="Scarpio">Scarpio</option>
         <option value="Fortuner">Fortuner</option>
         <option value="Thar">Tharrr</option>
         <option value="Legender">Legender</option>
         <option value="Defender">Defender</option>
          
         </select>

         {/* <input type='submit' value="submit"></input> */}
         <br/><br/>
         <button>Submit</button>

      </form>
    </div>
  );
}

export default App;
