import React, { useEffect, useState } from 'react'

const hello = () => {
    const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/hello")
      .then((res) => res.json())
      .then((data) => setUsers(data.message));
  }, []);

  return (
    <div className='flex justify-center items-center h-screen bg-gray-800 text-gray-300 text-4xl'>
      <h1>{users}</h1>
      
    </div>
  )
}

export default hello
