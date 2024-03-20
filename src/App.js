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

      
      

      function submitHandler(event){
        event.preventDefault();
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


    <div>
      <div className="mx-auto my-3 w-full md:max-w-[50%] p-8 shadow-sm  rounded-lg">
      <form className='flex flex-col gap-2'>
        
      <label htmlFor='firstName'>First Name</label>   
      <input type='text' placeholder='Abhishek' id='firstName'
      name="firstName" onChange={changeHandler} className="border-blue-600 border rounded-lg h-9 px-3">     
      </input>
      <br></br>

      
      <label htmlFor='lastName'>Last Name</label>
      <input type='text' placeholder='singh' id='lastName'
      name="lastName" onChange={changeHandler} className="border-blue-600 border rounded-lg h-9 px-3">
      </input>
      <br></br>


      <label htmlFor='email'>Email</label>
      <input type='email' placeholder='abhishek@gmail.com' id='email'
      name="email" onChange={changeHandler} className="border-blue-600 border rounded-lg h-9 px-3"> 
      </input>
      <br></br>


      <label htmlFor='country'>Country</label>
      <select id='country' name="country" onChange={changeHandler} className="border-blue-600 border rrounded-lg h-9 px-3">
        <option>India</option>
        <option>Usa</option>
        <option>Mexico</option>
        <option>Russia</option>
      </select>
      <br></br>

      <label htmlFor='street'>Street</label>
      <input type='text' placeholder='123 street' id='street'
      name="street" onChange={changeHandler} className="border-blue-600 border rounded-lg h-9 px-3">
      </input>
      <br></br>

      <label htmlFor='city'>City</label>
      <input type='text' placeholder='Delhi' id='city'
      name="city" onChange={changeHandler } className="border-blue-600 border rounded-lg h-9 px-3">
      </input>
      <br></br>

      <label htmlFor='state'>State</label>
      <input type='text' placeholder='Uttar Pradesh' id='state'
      name="state" onChange={changeHandler} className="border-blue-600 border rounded-lg h-9 px-3">
      </input>
      <br></br>

      <label htmlFor='postalCode'>ZIP / Postal Code</label>
      <input type='text' placeholder='202001' id='postalCode'
      name="postalCode" onChange={changeHandler} className="border-blue-600 border rounded-lg h-9 px-3">
      </input>
      <br></br>

      <p>By Email</p>
      <div className='flex'>
        <div className='flex h-6 item-center'>
      <input type='checkbox' id='comments' name="isComments" onChange={changeHandler}></input>
      </div>
      <div className="ml-3 text-sm leading-6">
      <label htmlFor='comments' className="font-medium text-gray-900">Comments</label>
      <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
      </div>
      </div>

      <div className='flex'>
        <div className='flex h-6 items-center'>
      <input type='checkbox' id='candidates' name="isCandidates" onChange={changeHandler}></input>
      </div>
      <div className="ml-3 text-sm leading-6">
      <label htmlFor='candidates' className="font-medium text-gray-900">Candidates</label>
      <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
      </div>
      </div>

      <div className='flex'>
        <div className='flex h-6 items-center'>
      <input type='checkbox' id='offers' name="isOffers" onChange={changeHandler}></input>
      </div>
      <div className="ml-3 leading-6 text-sm">
      <label htmlFor='offers' className="font-medium text-gray-900">Offers</label>
      <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
      </div>
      </div>


      <div>
        <div className="text-sm leading-6">
        <h3 className="font-medium text-lg text-gray-900">
          Push Notifications
        </h3>
        <p className="text-gray-500">
          These are delivered via SMS to your mobile phone.
        </p>
        </div>

        <div className="my-3">
        <input type="radio" id="everything" name="options"
        value="Everything" onChange={changeHandler} checked={formData.options === "Everything"}></input>
        <label htmlFor="everything" className="ml-2 text-sm text-gray-900 font-medium">Everything</label>
        </div>

        <div className="my-3">
        <input type="radio" id="same" name="options"
        value="sameAsEverything" onChange={changeHandler} checked={formData.options === "sameAsEverything"}></input>
        <label htmlFor="same" className="ml-2 text-sm text-gray-900 font-medium">Same as Everything</label>
        </div>

        <div className="my-3">
        <input type="radio" id="nopushnotification" name="options" onChange={changeHandler}
        value='noPushNotifications' checked={formData.options === "noPushNotifications"} ></input>
        <label htmlFor="nopushnotification" className="ml-2 text-sm text-gray-900 font-medium">No push Notifications</label>
        </div>
      </div>

      <button className="bg-blue-500 text-white h-8 w-16 font-medium text-lg rounded-lg" onClick={submitHandler}>Save</button>
      </form>
      </div>
    </div>
  );
}

export default App;
