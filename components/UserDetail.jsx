import React from 'react'
import {getRoboImge} from '../robo/getRoboImge'
import { getAddress } from '../robo/getAddress'

export default function userDetail({user}) {


  return (
    
        <div className="hero h-[50%] mt-32 rounded-md bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={getRoboImge(user.username)}
              alt={user.username}
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">{user.username}</h1>
              <p className="py-6"> {getAddress(user.address)}  </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
    
  )
}

