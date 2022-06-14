import React from 'react'

const Footer = () => {
    return (
        <footer className='m-0 p-0 mt-52 w-full '>

            <div className='flex space-x-4 bg-gray-200 border-solid p-5 text-gray-700 '>
                <p className='cursor-pointer'>France</p>
            </div>
            <div className='flex  bg-gray-200 border-solid border-t-2 border-gray-300 p-5 text-gray-700 justify-center md:justify-between'>
                <div className='flex space-x-4'>
                <p className='cursor-pointer'>About</p>
                <p className='cursor-pointer'>Advertising</p>
                <p className='cursor-pointer'>Business</p>
                <p className='cursor-pointer'>How Search works</p>
                </div>
               
            </div>


        </footer>
    )
}

export default Footer