import React from 'react'

function Gallery() {
    return (
        <div className='relative container max-w-full'>
            <div className='grid  grid-cols-2 lg:grid-cols-4' >
                <div className='bg-[url(https://res.cloudinary.com/dvklv1cit/image/upload/v1676897441/Sunnyside/image-gallery-milkbottles_pbp5m3.jpg)]  bg-cover  h-60 lg:h-96'>
                   
                </div>
                <div className='bg-[url(https://res.cloudinary.com/dvklv1cit/image/upload/v1676897440/Sunnyside/image-gallery-orange_vzc3ip.jpg)] bg-cover  h-60 lg:h-96'>

                </div>
                <div className='bg-[url(https://res.cloudinary.com/dvklv1cit/image/upload/v1676897440/Sunnyside/image-gallery-cone_fr8rio.jpg)] bg-cover h-60 lg:h-96'>

                </div>
                <div className='bg-[url(https://res.cloudinary.com/dvklv1cit/image/upload/v1676897440/Sunnyside/image-gallery-sugarcubes_ozxb0t.jpg)] bg-cover h-60 lg:h-96'>

                </div>
            </div>
        </div>
    )
}
export default Gallery    