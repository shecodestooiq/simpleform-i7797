import HW from "./HW";
import { useState } from 'react';

 function Forma() {

  const [formData, setFormData] = useState({name: "",email: "",message: ""});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
    );
};

  return (
    <div style={{
      paddingTop:'20px',
      paddingButton:'20px',
      backgroundColor:'pink',
      borderRadius:'13px',
      height:'40%',
      width:'50%',
     textAlign:'center',
     alignItems:'center',
     marginLeft:'25%',
     marginTop:'15%'
    }}
    
    
    
    
   >
    <form onSubmit={handleSubmit}>
      <label For="name"  style={{ paddingTop:'20px',paddingRight:'20px',paddingButton:'20px',color:'balck',}}> Name  :</label> 
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required style={{ paddingButton:'10px'}}/>
      <br></br>

      <label For="email" style={{ paddingTop:'10px',paddingRight:'20px',paddingButton:'20px',color:'balck',}}> Email :</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}required style={{ paddingButton:'10px'}}/>
      <br></br>
      <label For="message" style={{ paddingTop:'20px',paddingRight:'20px',paddingButton:'20px',color:'balck',}}>Message:</label>
      <textarea id="message" name="message" value={formData.message} onChange={handleChange} required style={{ paddingButton:'10px'}}/>
      <br></br>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

    export default Forma;
    