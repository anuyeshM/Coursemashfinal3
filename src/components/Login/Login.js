import React, {useState} from "react"
import "./login.css"
import axios from "../../../node_modules/axios"
import { useHistory } from "react-router-dom"

import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "../../../node_modules/mdb-react-ui-kit";

const Login = ({ setLoginUser}) => {

    const history = useHistory()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:3033/login", user)
        .then(res => {
            alert(res.data.message)
            
            history.push("/Community")
        })
    }

    return (
    

            <>
            <MDBContainer>
<MDBRow>
    <div class="login">
  <MDBCol md="6">
    <form>
      <p className="h4 text-center mb-4">Sign in</p>
      <label htmlFor="defaultFormLoginEmailEx" className="grey-text mb-5">
       
      </label>
      <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
      <br />
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
       
      </label>
       <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
      <div className="text-center m-4">
        <MDBBtn color="success" type="submit" onClick={login}>
         LOGIN
        </MDBBtn>
        <MDBBtn color="indigo" type="submit" onClick={() => history.push("/register")}>
         SIGN UP
        </MDBBtn>
      </div>
    </form>
  </MDBCol>
  </div>

</MDBRow>
</MDBContainer>

            </>
     
   



    )
}

export default Login;