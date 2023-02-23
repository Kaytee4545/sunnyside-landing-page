import React from 'react'

function BelowHeader() {
    return (
        <div className='container relative max-w-full'>
            <div className='flex  flex-col-reverse sm:flex-row items-center'>
                <div className='bg-slate-50  h-[35rem] w-full'>
                    <h2 className='mt-[0.7rem] md:mt-[3rem] lg:mt-[5rem] text-[3rem]  p-12 font-bold sm:content-center sm:text-center'>
                        Transform your brand
                    </h2>
                    <p className=' text-xl mb-9 content-center mx-[12%]  text-slate-700'>
                        We are a full-service agency specializing in helping  brands grow fast. Engage your clients through  compelling visuals that do most of the marketing
                        for you.
                    </p>
                    <a href="#/" className='text-center font-extrabold ml-[15%] tracking-widest md:tracking-wider'> LEARN MORE </a>
                    <hr className='border-[3px] border-solid w-[32%] lg:w-[19.5%] ml-[14%] -mt-2 rounded-full border-yellow-200 hover:border-yellow-500 '></hr>
                </div>
                <div className='bg-[url(https://res.cloudinary.com/dvklv1cit/image/upload/v1676055232/Sunnyside/image-transform_t7sz0f.jpg)] bg-center h-[30rem] md:lg:h-[35rem] w-full'>

                </div>
            </div>
            <div className='grid md:grid-cols-1 lg:grid-cols-2'>

                <div className='bg-[url(https://res.cloudinary.com/dvklv1cit/image/upload/v1676055480/Sunnyside/image-stand-out_ur6b6e.jpg)] bg-center h-[30rem] md:lg:h-[35rem] w-full'>

                </div>
                <div className='bg-slate-50  h-[35rem] w-full'>
                    <h2 className='mt-[3rem] lg:mt-[5rem] text-[2.3rem]  p-12 font-bold sm:content-center sm:text-center'>
                        Stand out to the right audience
                    </h2>
                    <p className=' text-xl mb-9 content-center mx-[12%]  text-slate-700'>
                        Using a collaborative formulae for designers, researchers, photographers, videographers and copywriters. We'll build and expand your brand in digital places.
                    </p>
                    <a href="#/" className='text-center font-extrabold ml-[15%] tracking-widest md:tracking-wider'> LEARN MORE </a>
                    <hr className='border-[3px] border-solid w-[32%] lg:w-[19.5%] ml-[14%] -mt-2 rounded-full border-pink-200 hover:border-pink-400 '></hr>
                </div>
                <div className='bg-[url(https://res.cloudinary.com/dvklv1cit/image/upload/v1676055479/Sunnyside/image-graphic-design_caozcs.jpg)] bg-center h-[35rem] w-full'>
                    <div className='lg:mt-[57%] mt-[85%]'>
                        <h2 className='font-bold text-2xl mx-[25%] lg:mx-[33%] ' >
                            Graphics Design
                        </h2>
                        <p className=' mx-[5%] lg:mx-[15%] text-lg mt-5 text-justify'>
                            Great design makes you memorable. We deliver artworks that underscores your brand message and captures potential clients' attention.
                        </p>
                    </div>

                </div>
                <div className='bg-[url(https://res.cloudinary.com/dvklv1cit/image/upload/v1676055479/Sunnyside/image-photography_h1uusk.jpg)] bg-center h-[35rem] w-full'>
                    <div className='lg:mt-[57%] mt-[90%]'>
                        <h2 className='font-bold text-3xl lg:text-2xl text-center' >
                            Photography
                        </h2>
                        <p className=' mx-[5%] lg:mx-[20%] text-lg mt-5 text-center'>
                            Increase your credibility by getting the most stunning, high quality images that improve your business image.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BelowHeader