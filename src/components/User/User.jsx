import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams() // The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>. Child routes inherit all params from their parent routes.
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>(User: {userid})</div>
  )
}
// useid koe database run karana ho wahan use ho gi, url mn user check k liye bi usee hoti he

export default User;
