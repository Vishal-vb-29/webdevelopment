import "./App.css";
import { useState } from "react";

function App() {

  const[formData,setFormData]=useState({firstName:"",lastName:"",email:"",country:"India",streetAddress:"",city:"",state:"",postalCode:"",comments:false,candidates:false,offers:false,pushNotifications:""});


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
    <div className="flex flex-col items-center mt-2">
      <form onSubmit={submitHandler}>
      <label htmlFor='firstName'>First Name</label><br/>
      <input type='text' 
        onChange={changeHandler}
        placeholder='first name' name='firstName' className="outline"></input>
        <br/>

        <label htmlFor='lastName'>Last Name</label><br/>
        <input type='text' 
        onChange={changeHandler}
        placeholder='last name' name='lastName' className="outline"></input>
        <br></br>

        <label htmlFor='email'>Email</label><br/>
        <input type='email' 
        onChange={changeHandler}
        placeholder='example12@gmail.com' name='email' value={formData.email} className="outline"></input>
        <br/>

        <label htmlFor='country'>Country</label><br/>
        <select 
         onChange={changeHandler}
         name='country'
         value={formData.country}
         id='country' className="outline">
         <option value="India">India</option>
         <option value="USA">USA</option>
         <option value="Canada">Canada</option>
         <option value="Mexico">Mexico</option>
         </select>
         <br/>

        <label htmlFor="streetAddress">Street Address</label><br/>
        <input type='text' 
        onChange={changeHandler}
        placeholder='1234 Main Street' id="streetAddress" name='streetAddress' value={formData.streetAddress} className="outline"></input>
        <br/>

        <label htmlFor="city">City</label><br/>
        <input type='text' 
        onChange={changeHandler}
        placeholder='Dhar' id="city" name='city' value={formData.city} className="outline"></input>
        <br/>

        <label htmlFor="state">State/Province</label><br/>
        <input type='text' 
        onChange={changeHandler}
        placeholder='Madhya Pradesh' id="state" name='state' value={formData.state} className="outline"></input>
        <br/>

        <label htmlFor="postalCode">Postal Code</label><br/>
        <input type='text' 
        onChange={changeHandler}
        placeholder='454001' id="postalCode" name='postalCode' value={formData.postalCode} className="outline"></input>
        <br/><br/>

        <fieldset>
          <legend>By Email</legend>
          <div className="flex">
          <input type="checkbox" name="comments" id="comments" checked ={formData.comments} onChange={changeHandler}></input>
          <div>
            <label htmlFor="comments">Comments</label>
            <p>Get notified when someones posts a comment on a posting.</p>
          </div>
          </div>

          <div className="flex">
          <input type="checkbox" name="candidates" id="candidates" checked={formData.candidates} onChange={changeHandler}></input>
          <div>
            <label htmlFor="candidates">Candidates</label>
            <p>Get notified when a candidates applies for a job.</p>
          </div>
          </div>

          <div className="flex">
          <input type="checkbox" name="offers" id="offers" checked={formData.offers} onChange={changeHandler}></input>
          <div>
            <label htmlFor="offers">Offers</label>
            <p>Get notified when a candidates accepts or rejects an offer.</p>
          </div>
          </div>

        </fieldset>
        <br/><br/>
        <fieldset>
          <legend>Push Notifications</legend>
          <p>These are delivered via SMS to your mobile phone.</p>
          <br/>

          <input type="radio"
          id="pushEverything"
          name="pushNotifications"
          value="Same as email"
          onChange={changeHandler}></input>
          <label htmlFor="pushEverything">Everything</label>
          <br/>

          <input type="radio"
          id="pushEmail"
          name="pushNotifications"
          value="Everything"
          onChange={changeHandler}></input>
          <label htmlFor="pushEmail">Same as email</label>
          <br/>

          <input type="radio"
          id="pushNothing"
          name="pushNotifications"
          value="No push Notifications"
          onChange={changeHandler}></input>
          <label htmlFor="pushNothing">No push Notifications</label>
        </fieldset>
        <button className="bg-black text-white font-bold p-5 rounded py-2 ">Save</button>


    </form>  
    
    </div>
    
  );
}

export default App;
