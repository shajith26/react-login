import React, { useState } from 'react';



const Login = () => {

  const [username, setusername]= useState("");
  const [user,addUser]=useState([]);
  const [userpwd, setpassword]=useState("");
  const [error, seterror]=useState('');

  // const handleUserName = (ev) => {
  //   console.log("ev",ev);
  //   setusername(ev.target.value);
  // };

  // const handleUserPwd= (eve) => {
  //   console.log("eve",eve);
  //   setpassword(eve.target.value);
  // };
  const handleSubmit = (ev) => {
    ev.preventDefault();
    // if(username==="" || userpwd===""){
    //   seterror("invalid user id or password");
    //   return;
    // }
      seterror(""); 


      const temp={
        username:username,
        userpwd:userpwd
      }
      addUser([...user,temp]);    
    
     
    console.log("state",temp);
  }

  const handleInputChange = (ev) => {
    console.log("ev",ev)
    if(ev.target.value === ""){
      seterror("invalid")
    }else{
      seterror("");
    }
    if(ev.target.value === "username"){
      setusername(ev.target.value)
    }else{
      setpassword(ev.target.value)
    }
  }

  return (
    <div>
        <div>Login</div> 
        <form onSubmit={handleSubmit}>
        <div><input placeholder={"ID"} name="name" onChange={handleInputChange} /></div>
        <div><input placeholder={"password"} type="password" name="password" onChange={handleInputChange} /></div>
        <input type="submit"/>
        <h3>{error}</h3>
        {/* <div><button onClick={()=> handleSubmit()}>Submit</button></div> */}
        </form>
    </div>
  )
}

export default Login