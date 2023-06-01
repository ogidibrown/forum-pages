import React from 'react'
import { Link } from "react-router-dom";
import { BsGlobe } from 'react-icons/bs';
import { RiInformationLine } from 'react-icons/ri';
import Image from '../assets/profile.jpg';

const Post = () => {
  return (
    <div className='bg-[#000] w-full h-full p-4 flex justify-center'>
      {/*Left*/}
      <div className='w-[950px] flex '>
        <div className='flex flex-col flex-1 gap-3 ' >
          <div className='bg-[#3c3a3a] w-[380px] h-[200px] rounded-[10px] justify-center'>
              <div className='w-[380px] flex flex-col p-3'>
                <h1 className='text-white '>Intro</h1>
                <span className='text-white self-center'>fBulletin <a className='text-blue-500 hover:underline' href="http://apps.facebook.com/fbulletin/">http://apps.facebook.com/fbulletin/</a> is a special forum software developed for Facebook.</span>
              </div>
              <div className='flex justify-center flex-col p-3'>
                <div className='border-t-2 border-gray-500 w-[350px] flex flex-col '></div>
                <div className='flex flex-col  mt-3'>
                <ul>
                    <li className='flex items-center gap-2 mb-5' ><RiInformationLine className='text-white w-[18px] h-[20px]'/><Link className='text-white hover:underline'>Page · App Page</Link></li>
                    <li className='flex items-center gap-2'  ><BsGlobe className='text-white'/><Link className='text-blue-500 hover:underline'>fbulletin.com</Link></li>
                  </ul>
                </div>
              </div>
          </div>
          <div className='bg-[#3c3a3a] w-[380px] h-[400px] rounded-[10px] p-1 flex flex-col'>
            <div className=''>
              <ul className='flex justify-between p-3 items-center '>
                <li><Link className='text-white hover:underline font-bold'><h1>Photos</h1></Link></li>
                <li><Link className='text-blue-500 hover:text-blue-400'>See All Photos</Link></li>
              </ul>
            </div>
            
            <div className=' flex rounded-[10px] max-w-5xl  h-full  '>
              <div className='rounded-[10px] grid grid-cols-3 bg-[#3c3a3a] items-center gap-x-[2px] gap-y-[2px] p-[2px] object-cover w-full h-full '>
              <a href={Image} target="_blank" rel="noopener noreferrer"><img className='rounded-tl-lg h-[110px]' src={Image} alt="profile" /></a> 
              <a href={Image} target="_blank" rel="noopener noreferrer"><img className='h-[110px]' src={Image} alt="profile" /></a> 
              <a href={Image} target="_blank" rel="noopener noreferrer"><img className='rounded-tr-lg h-[110px]' src={Image} alt="profile" /></a> 
              <a href={Image} target="_blank" rel="noopener noreferrer"><img className='h-[110px]' src={Image} alt="profile" /></a> 
              <a href={Image} target="_blank" rel="noopener noreferrer"><img className='h-[110px]' src={Image} alt="profile" /></a> 
              <a href={Image} target="_blank" rel="noopener noreferrer"><img className='h-[110px]' src={Image} alt="profile" /></a> 
              <a href={Image} target="_blank" rel="noopener noreferrer"><img className='rounded-bl-lg h-[110px]' src={Image} alt="profile" /></a> 
              <a href={Image} target="_blank" rel="noopener noreferrer"><img className='h-[110px]' src={Image} alt="profile" /></a> 
              <a href={Image} target="_blank" rel="noopener noreferrer"><img className='rounded-br-lg h-[110px]' src={Image} alt="profile" /></a> 
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Right*/}
      <div className='flex flex-col'>
          

      </div>
    </div>
  )
}

export default Post