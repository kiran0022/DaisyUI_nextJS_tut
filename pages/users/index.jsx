import React from "react";
import { useState, useEffect } from "react";
import UsersList from "../../components/UsersList";

export async function getServerSideProps(context) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: {
      users,
    }, // will be passed to the page component as props
  };
}

export default function users({users}) {
  // const [users, setUsers] = useState([]);

  // useEffect(async () => {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //   const users = await res.json();
  //   setUsers(users);
  // }, []);

  return (
    <div>
      <UsersList users={users} />
    </div>
  );
}
