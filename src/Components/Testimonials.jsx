import React from 'react'
import testimonialInfos from './testimonialFile'
import Entry from './Entry'

function Testimonials() {
    function createEntry(testimonialInfo) {
        return (
            <Entry
                key={testimonialInfo.id}
                Pic={testimonialInfo.Pic}
                Text={testimonialInfo.Text}
                name={testimonialInfo.name}
                designation={testimonialInfo.designation}
            />
        )
    }
    return (
        < div className='container relative mx-auto h-full text-center pb-24 bg-pink-50 max-w-full' >
            <h1 className='text-3xl pt-28 text-gray-400 font-semibold'>
                CLIENT TESTIMONIALS
            </h1>
            <div className='grid md:grid-cols-1 lg:grid-cols-3 max-w-5xl mx-auto gap-8 mt-20'>
                {testimonialInfos.map(createEntry)}
            </div>
        </div >
    )
}

export default Testimonials