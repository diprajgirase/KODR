import React from 'react';

const Card = (props) => {
    // console.log(props)  

    return (
        <div className='text-black inline-block p-6 text-center rounded m-2'>
            <div className='bg-blue-900  p-7'>  
                <img className='h-32 w-32 rounded-full mb-3' src="" alt="" />
                <h1 className='text-2xl font-semibold mb-4' >{props.name}</h1>
                <h2>{props.city},{props.age}</h2>
                <h3>{props.profession}</h3>
                <button className='mt-5 bg-red-400 text-white px-4 py-2 rounded font-medium' >Add Friend</button>
            </div>
        </div>
    );
};

export default Card;