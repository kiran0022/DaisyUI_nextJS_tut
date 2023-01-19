import React from "react";
import Image from 'next/image'
import {getRoboImge} from "../robo/getRoboImge";
import { useRouter } from "next/router";
import { getAddress } from "../robo/getAddress";


export default function UsersList({ users }) {
  const router = useRouter();
  return (
    <div>
      {users.map((user) => (
        <div key={user.id} className="card lg:card-side bg-base-100 shadow-2xl m-12">
        <figure><Image
        // layout="fill"
        width= {200}
        height={200}
         src={getRoboImge(user.username)} alt={user.username} /></figure>
        <div className="card-body">
          <h2 className="card-title">{user.name}</h2>
          <p>{user.email}</p>
          <p>{getAddress(user.address)}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={ () => router.push( `/users/${user.id}`)}>Listen</button>
          </div>
        </div>
      </div>
      ))}
    </div>
    
  );
}
