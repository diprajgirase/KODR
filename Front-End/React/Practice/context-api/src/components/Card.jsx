import React from 'react'

const Card = ({ item }) => {
    console.log("itemwala", item)
    return (
        <div className='flex h-[50%] w-[20%] bg-blue-300 m-10 rounded'>
            
                <div className='h-[200px] rounded  p-5'>
                    <h2><span className='text-red-700'>Name:</span> {item.username} </h2>
                    <p><span className='text-red-700'>Email: </span>{item.email} </p>
                </div>

        </div>
    )
}

export default Card