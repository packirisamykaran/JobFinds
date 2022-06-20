import React, { useEffect } from 'react'
import "../styles/Profile.css"
import { useState } from 'react'
import { profile } from '../types'
import { arrayBuffer } from 'stream/consumers'
import { media } from '../asset'


export default function Profile() {

  const [profile, setprofile] = useState<profile>();


  useEffect(()=>{

    const getProfile = async()=>{
      

    }

  })

  
  if(!profile){
    return <img src={media.loading} className="loading" alt="" />
  }

  return (
    <div className="profile-page">
        <div className="container">    
            <div className="profile-items">
              <div className="uname-name-loc">
                <img className='profile-picture' src="https://cdn-icons-png.flaticon.com/512/64/64572.png" alt="" />
                <div className="name">{profile.firstName} {profile.lastName}</div>
                <div className="username">{profile.username}</div>
                <div className="location">{profile.country}</div>
              </div>
            </div>
            <div className="profile-items">
              <div className="title-pay-bio">
                <div className="title">Full-stack Web Developer</div>
                <div className="expected-pay">
                  {profile.expectedPay}
                </div>
                <div className="bio">
                  {profile.bio}
                </div>
              </div>
            </div>
            <div className="profile-items">
              <div className="skills">{
                profile.skills.map((skill, index)=> <div className='skill' key={index}>{skill}</div>)
              }</div>
            </div>
            <div className="profile-items">
              <div className="experience">
                {profile.experience.map((job, index)=>(
                  <div className="job" key={index}>
                    <div className="title-company">
                      <div className="title">{job.title}</div>
                      <div className="company">{job.company}</div>
                    </div>
                    <div className="time">
                      {}
                    </div>
                    <div className="description">
                      {job.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="profile-items">
              <div className="qualifications">
                <div className="quali">
                  <div className="title">
                    masters in computer science
                  </div>
                  <div className="institution">
                    Harvard University
                  </div>
                  <div className="duration">
                    2018 - 2020
                  </div>
                </div>
              </div>
            </div>
            <div className="profile-items">
              <div className="certifications">
                <div className="cert">
                  <div className="title">
                    Java certification
                  </div>
                  <div className="association">
                    oracle
                  </div>
                  <div className="year-attained">
                    2020
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}
