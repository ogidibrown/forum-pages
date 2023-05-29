import { AiOutlineSmallDash } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {

let Links = [
  {name:"Posts", link:"/"},
  {name:"About", link:"/about"},
  {name:"Mentions", link:"/mentions"},
  {name:"Followers", link:"/followers"},
  {name:"Photos", link:"/photos"},
  {name:"Videos", link:"/videos"},
];

let MoreLinks = [
  {name:"Live", link:"/live"},
  {name:"Music", link:"/music"},
  {name:"Questions", link:"/questions"},
  {name:"Check-ins", link:"/checkins"},
  {name:"Sports", link:"/sports"},
  {name:"Films", link:"/films"},
  {name:"Tv Programms", link:"/tv"},
  {name:"Books", link:"/books"},
  {name:"Likes", link:"/likes"},
  {name:"Reviews given", link:"/reviews"},
];

const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className='flex justify-center   bg-[#4e4b4b]'>
    <nav className="fixed bottom-[138px] flex h-[50px] w-[950px] shadow-gray-500 justify-between p-[10px] items-center text-white border-t-[1px] outline-none ">
        <div className='flex justify-between'>
          <ul className='flex gap-5 items-center h-full'>
            {Links.map((link)=>(
              <li className='hover:text-gray-500'>
                <Link to={link.link}>{link.name}</Link>
              </li>
            ))}
            <li>
              <Link onClick={toggleDropdown}>More</Link>
              {isOpen && (

                  <ul className='w-[340px] p-5 mt-2 rounded-[10px] absolute bg-[#4e4b4b] shadow-gray-500'>
                  {MoreLinks.map((link)=>(
                  <li className='hover:text-gray-500 block text-white gap-4'>
                    <Link to={link.link}>{link.name}</Link>
                  </li>
                ))}
                  </ul>
              )}
            </li>
          </ul>  
        </div>
      
         <div  className='w-[40px] h-[40px]  bg-[#323232de] flex items-center justify-center rounded-[5px] cursor-pointer'>
             <AiOutlineSmallDash className='w-[30px] h-[30px] text-[#fff]'/>
         </div>
    </nav>
    </div>
  )
}

export default Navbar