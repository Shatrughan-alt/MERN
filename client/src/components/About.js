import React, { useEffect, useState } from 'react';
import {  useNavigate } from 'react-router-dom';

import one from "../images/2.jpg";

export default function About() {
    const navigate = useNavigate();
    const [userData,setUserData]=useState({});
    const callAboutPage=async ()=>{
      try{
        const res=await fetch('/about',{
          method:"GET",
          headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
          },
          credentials:"include"
        });
        const data=await res.json();

        console.log(data);
        setUserData(data);
        if(!res.status===200){
          const error=new Error(res.error);
          throw error;
        }

      }
      catch(err){
        console.log(err);
        navigate("/login");
      }
    }

  useEffect(()=>{
    callAboutPage();

  },[]);

  return (
    <>
      <div className='container emp-profile'>
        <form method="GET">
          <div className='row'>
            <div className='col-md-4'>
            <br /><br />
            <div className='profile-img'>
                <img src={one} alt="shatru" style={{ height: 250, width: 250 }} />

            </div>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className='col-md-6'>
              <div className='profile-head'>
              <br /><br />
                <h5>{userData.name}</h5>
                <h6>{userData.work}</h6>
                <p className='profile-rating mt-3 mb-5'>RANKINGS <span>1/10</span></p>

<br /><br /><br /><br /><br /><br />
                <ul className='nav nav-tabs' role="tablist">
                  <li className='nav-item'>
                    <a className='nav-link active' id='home-tab' data-toggle='tab' href="#home" role='tab'>About</a>
                  </li>

                  <li className='nav-item'>
                    <a className='nav-link' id='profile-tab' data-toggle='tab' href="#profile" role='tab'>TimeLine</a>
                  </li>



                </ul>

              </div>
            </div>
            <div className='col-md-2'>
            <input type="submit" name='btnAddMore' className='profile-edit-btn' value='Edit Profile'/>

            </div>
          </div>

          <div className='row'>
            <div className='col-md-4'>
              <div className='profile-work'>
              <p>WORK LINK</p>
              <a href="https://www.youtube.com" target="_shatru">Youtube</a><br />
                <a href="https://www.youtube.com" target="_shatru">Instagram</a><br />

                <a href="https://www.youtube.com" target="_shatru">Technical</a><br />

                <a href="https://www.youtube.com" target="_shatru">Github</a><br />

                <a href="https://www.youtube.com" target="_shatru">Web Developer</a><br />

                <a href="https://www.youtube.com" target="_shatru">Software Engineer</a>

              </div>
            </div>
            

            <div className='col-md-8 pl-5 about-info'>
            <div className='tab-content profile-tab' id="myTabContent">
            <div className='tab-pane fade show active' id="home" role="tabpanel" aria-labelledby='home-tab'>
            <div className='row'>
              <div className='col-md-6'>
                      <label>Roll No</label>

              </div>
              <div className='col-md-6'>
                <p>201500646</p>
              </div>
            </div>

                  <div className='row mt-0'>
                    <div className='col-md-6'>
                      <label>Name</label>

                    </div>
                    <div className='col-md-6'>
                      <p>{userData.name}</p>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-6'>
                      <label>User ID</label>

                    </div>
                    <div className='col-md-6'>
                      <p>8456546465164846516</p>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-md-6'>
                      <label>Email</label>

                    </div>
                    <div className='col-md-6'>
                      <p>a@b.com</p>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-md-6'>
                      <label>Work</label>

                    </div>
                    <div className='col-md-6'>
                      <p>Web Developer</p>
                    </div>
                  </div>
            </div>
           





              
            
           






          
              <div className='tab-pane fade' id="profile" role="tabpanel" aria-labelledby='profile-tab'>
                <div className='row'>
                  <div className='col-md-6'>
                    <label>Experience</label>

                  </div>
                  <div className='col-md-6'>
                    <p>Expert</p>
                  </div>
                </div>

                <div className='row mt-0'>
                  <div className='col-md-6'>
                    <label>Name</label>

                  </div>
                  <div className='col-md-6'>
                    <p>Shatrughan</p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6'>
                    <label>User ID</label>

                  </div>
                  <div className='col-md-6'>
                    <p>8456546465164846516</p>
                  </div>
                </div>

                <div className='row'>
                  <div className='col-md-6'>
                    <label>User ID</label>

                  </div>
                  <div className='col-md-6'>
                    <p>8456546465164846516</p>
                  </div>
                </div>

                <div className='row'>
                  <div className='col-md-6'>
                    <label>User ID</label>

                  </div>
                  <div className='col-md-6'>
                    <p>8456546465164846516</p>
                  </div>
                </div>
              </div>
           




              </div>
            </div>



          </div>
      
        </form>

      </div>
    </>
  )
}












// auth.js
// about.js
