import React, { useEffect, useState } from 'react'
import './SignInSignUp.css'
import Model from './Model.js'
function Home() {
    const [open,setOpen]=useState(false);
    const onClickHandler=()=>{
        setOpen(!open);
    }
    const logout=()=>{
        localStorage.removeItem("signUp")
        window.location.reload()
    }
    const deleteAccount=()=>{ 
        localStorage.clear()
        window.location.reload()
    }
    useEffect(()=>{
        const userData = {
            category: "movies",
            language: "kannada",
            genre: "all",
            sort: "voting"
          };
          const queryString = new URLSearchParams(userData).toString();
          fetch(`https://hoblist.com/api/movieList?${queryString}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          }).then((response) => {response.json()
            console.log(response);
          }).then((data) => alert("API Called successfully"))
      
    },[])
  return (
    <div>
  
        <h1>Welcome {localStorage.getItem('name')}</h1>
        <button className='logout' onClick={logout}>LogOut</button>
        <button className='delete' onClick={deleteAccount}>Delete</button>
        <button className='info' onClick={onClickHandler}>Company Info</button>
        {open && <Model onClickHandler={onClickHandler}/>}
    </div>
  )
}

export default Home