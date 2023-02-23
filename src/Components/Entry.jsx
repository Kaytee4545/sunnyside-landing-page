import React from 'react'

function Entry(props) {
    return (
        <div>
            <img className='rounded-full mx-auto h-24 w-24 mt-5' src={props.Pic} alt="testimonialPic" />
           <p className='mt-12 mx-14 lg:mx-auto text-base'>
            {props.Text}
           </p>
            <h2 className='font-bold mt-8 mb-2 text-2xl' >
                {props.name}
            </h2>
            <h6 className='text-base text-gray-400 font-medium'>
                {props.designation}
            </h6> 
        </div>
    )
}

export default Entry