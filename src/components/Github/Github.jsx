import React from 'react'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {  // useEffect synchronize a component with external file
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json()) // .then is used to handle API calls
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    {/* <img src={data.avatar_url} alt="Git picture" width={300} /> */}
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}
