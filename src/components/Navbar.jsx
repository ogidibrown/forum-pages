import { AiFillCaretDown, AiOutlineSmallDash } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useState,useEffect,useRef } from 'react';

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
const dropdownRef = useRef(null);
const downRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
 
  const [Open, setOpen] = useState(false);

  const dotDropdown = () => {
    setOpen(!Open);
  };

  useEffect(() => {
    // Event listener to handle clicks outside the dropdown
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }else if(downRef.current && !downRef.current.contains(event.target)){
        setOpen(false);
      }
    };

    // Attach the event listener on component mount
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);



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
            <li ref={dropdownRef}>
              <Link  className='flex items-center gap-[4px]' onClick={toggleDropdown}>More <AiFillCaretDown /></Link>
              {isOpen && (

                  <ul  onClick={()=>setIsOpen(false)} className='w-[340px] p-5 mt-2 rounded-[10px] absolute bg-[#3c3a3a] shadow-gray-500'>
                  {MoreLinks.map((link)=>(
                  <li  className='hover:text-gray-500 block text-white gap-4'>
                    <Link to={link.link}>{link.name}</Link>
                  </li>
                ))}
                  </ul>
              )}
            </li>
          </ul>  
        </div>
      
         <div ref={downRef} className='w-[40px] h-[40px]  bg-[#323232de] flex items-center justify-center rounded-[5px] cursor-pointer'>
  
             
              <Link className='flex items-center gap-[4px]' onClick={dotDropdown}><AiOutlineSmallDash className='w-[30px] h-[30px] text-[#fff]'/></Link>
              {Open && (

                  <ul   className='w-[340px] p-5 -mb-[11.8rem] rounded-[10px] absolute bg-[#3c3a3a] shadow-gray-500 gap-2  ' >
                    <li onClick={()=>setOpen(false)} className='hover:text-gray-500'><Link>Find support or report"</Link></li>
                    <li onClick={()=>setOpen(false)} className='hover:text-gray-500'><Link>Block</Link></li>
                    <li onClick={()=>setOpen(false)} className='hover:text-gray-500'><Link>Invite friends</Link></li>
                    <li onClick={()=>setOpen(false)} className='hover:text-gray-500'><Link>Like</Link></li>
                  </ul>
              )}
            
         </div>
    </nav>
    </div>
  )
}

export default Navbar