import { useState } from "react";
import './App.css'

function App() {

  const [formData,setFormData] = useState(
    {
      firstName:'' ,
      lastName:'',
      email:'',
      country:'',
      street:'',
      city:'',
      state:'',
      postalCode:'',
      isCandidates:true,
      isComments:true,
      isOffers:true,
      options:""
      
      });

      

      function submitHandler(){
        console.log(formData);
      }

      function changeHandler(event){
        const {name, value,type, checked } = event.target ; 
        setFormData(prevFormData=>{
          return{...prevFormData,
            [name] : type==="checkbox" ? checked : value 
          }
        })
      }
        
  return (


    <div className="border-red-800 border f">
      <form className='flex flex-col' onSubmit={submitHandler}>
        
      <label htmlFor='firstName'>First Name</label>   
      <input type='text' placeholder='Abhishek' id='firstName'
      name="firstName" onChange={changeHandler}>     
      </input>
      <br></br>

      
      <label htmlFor='lastName'>Last Name</label>
      <input type='text' placeholder='singh' id='lastName'
      name="lastName" onChange={changeHandler}>
      </input>
      <br></br>


      <label htmlFor='email'>Email</label>
      <input type='email' placeholder='abhishek@gmail.com' id='email'
      name="email" onChange={changeHandler}> 
      </input>
      <br></br>


      <label htmlFor='country'>Country</label>
      <select id='country' name="country" onChange={changeHandler}>
        <option>India</option>
        <option>Usa</option>
        <option>Mexico</option>
        <option>Russia</option>
      </select>
      <br></br>

      <label htmlFor='street'>Street</label>
      <input type='text' placeholder='123 street' id='street'
      name="street" onChange={changeHandler}>
      </input>
      <br></br>

      <label htmlFor='city'>City</label>
      <input type='text' placeholder='Delhi' id='city'
      name="city" onChange={changeHandler}>
      </input>
      <br></br>

      <label htmlFor='state'>State</label>
      <input type='text' placeholder='Uttar Pradesh' id='state'
      name="state" onChange={changeHandler}>
      </input>
      <br></br>

      <label htmlFor='postalCode'>ZIP / Postal Code</label>
      <input type='text' placeholder='202001' id='postalCode'
      name="postalCode" onChange={changeHandler}>
      </input>
      <br></br>

      <p>By Emial</p>
      <div className='flex'>
        <div className='flex'>
      <input type='checkbox' id='comments' name="isComments" onChange={changeHandler}></input>
      </div>
      <div>
      <label htmlFor='comments'>Comments</label>
      <p>Get notified when someones posts a comment on a posting.</p>
      </div>
      </div>

      <div className='flex'>
        <div className='flex'>
      <input type='checkbox' id='candidates' name="isCandidates" onChange={changeHandler}></input>
      </div>
      <div>
      <label htmlFor='candidates'>Candidates</label>
      <p>Get notified when a candidate applies for a job.</p>
      </div>
      </div>

      <div className='flex'>
        <div className='flex'>
      <input type='checkbox' id='offers' name="isOffers" onChange={changeHandler}></input>
      </div>
      <div>
      <label htmlFor='offers'>Offers</label>
      <p>Get notified when a candidate accepts or rejects an offer.</p>
      </div>
      </div>


      <div>
        <h3>
          Push Notifications
        </h3>
        <p>
          These are delivered via SMS to your mobile phone.
        </p>

        <div>
        <input type="radio" id="everything" name="options"
        value="Everything" onChange={changeHandler} checked={formData.options === "Everything"}></input>
        <label htmlFor="everything">Everything</label>
        </div>

        <div>
        <input type="radio" id="same" name="options"
        value="sameAsEverything" onChange={changeHandler} checked={formData.options === "sameAsEverything"}></input>
        <label htmlFor="same">Same as Everything</label>
        </div>

        <div>
        <input type="radio" id="nopushnotification" name="options" onChange={changeHandler}
        value='noPushNotifications' checked={formData.options === "noPushNotifications"} ></input>
        <label htmlFor="nopushnotification">No push Notifications</label>
        </div>
      </div>

      <button>Save</button>
      </form>
    </div>
  );
}

export default App;
