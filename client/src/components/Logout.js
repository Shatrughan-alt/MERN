import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../App';

export default function Logout() {



    const {state,dispatch}=useContext(UserContext);


    // using promises not ny using async and await


    const navigate=useNavigate();
    useEffect(()=>{
        fetch('/logout',{
            method:"GET",
            headers:{
                // Accept:"appliaction/json",
                "Content-Type":"application/json"
            },
            // credential:"include"
        }).then((res)=>{
            dispatch({type:"USER",payload:false});
            navigate("/login",{replace:true});
            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        }).catch((error)=>{
            console.log(error);
        })
    })

  return (
    <div>
      Logout ka page
    </div>
  )
}
