import React from 'react'

function TripList({ trips }) {
  return (
    <ul className="max-w-max mx-auto flex gap-x-[70px] mt-20">
        {trips && trips.map((trip) => {
            return (
                <li className='shadow-2xl shadow-teal-700 px-5 py-5' key={trip.title}>
                    <h2 className='text-white text-center'>{trip.title}</h2>
                    <p className='text-yellow-500 text-center'>{trip.price}</p>
                    <p className=' text-center'>{trip.loc}</p>
                </li>
                
            )
        })}
    </ul>
  )
}

export default TripList