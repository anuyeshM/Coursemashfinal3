import React, { useState } from "react"

import axios from "axios"
import { useHistory } from "react-router-dom"



import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "../../../node_modules/mdb-react-ui-kit";

const Register = () => {

    const history = useHistory()
   


    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if( name && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:3031/register", user)
            .then( res => {
                alert(res.data.message)
               
                
                   
  
            }).catch(function (error) {
                console.log(error);
              });
        } else {
            alert("invlid input")
        }
        
    }
    const pushing = () =>{
        history.push('/Community');
    }

    return (
<MDBContainer>
<MDBRow>
    <div class="register">
  <MDBCol md="6">
    <form>
    {console.log("User", user)}
      <p className="h4 text-center mb-4">Sign up</p>
      <label htmlFor="defaultFormLoginEmailEx" className="grey-text mb-5">
       
      </label>
      <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
      <br />
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <label htmlFor="defaultFormLoginPasswordEx" className="grey-text mb-4">
       
      </label>
      <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
      <br />
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <label htmlFor="defaultFormLoginPasswordEx" className="grey-text mb-3">
       
      </label>
      
      <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
      <br />
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
       
      </label>
      <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
      <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
       
      </label>
      <div className="text-center m-4">
        <MDBBtn color="success" type="submit" onClick={() => {
          register();
         pushing();
        }}>
         REGISTER
        </MDBBtn>
        <MDBBtn color="indigo" type="submit" onClick={() => history.push("/Profile")}>
         LOG IN
        </MDBBtn>
      </div>
    </form>
  </MDBCol>
  </div>

</MDBRow>
</MDBContainer>
        
    )
}

export default Register;
