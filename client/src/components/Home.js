import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import one from "../images/1.jpg"

export default function Home() {

  const navigate = useNavigate();
  const [username, setUserName] = useState('');
  const [show,setShow]=useState(false);
  const userHomePage = async () => {
    try {
      const res = await fetch('/getdata', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });
      const data = await res.json();

      console.log(data);
      setUserName(data.name);
      setShow(true);

    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    userHomePage();

  }, []);


  return (
    <>
    <div className='home-page'>
    <div className='home-div'>
          <p className='pt-5'>WELCOME</p>
          <h1>{username}</h1>
          <h1>{show? "Happy,to See you Back.":"I Am The MERN Developer"}</h1>
          <img src={one} alt="my-image" style={{height:400}} />
    </div>

    </div>
     
    </>
  )
}
