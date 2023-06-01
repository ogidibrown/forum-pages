import Navbar from "../components/Navbar";
import HeroImg from '../assets/forum.jpg';
import HeroProf from '../assets/profile.jpg';
import { FaSearch, } from 'react-icons/fa';
import { BsMessenger } from 'react-icons/bs';
import { RiUserFollowFill} from 'react-icons/ri';



const Hero = () => {
  return (
    <div className=" bg-[#4e4b4b] w-full h-[580px]">

        <div className="flex flex-col justify-center ">
            <div className="  bg-from-[#4e4b4b] flex h-[515px] w-full justify-center items-start md:justify-center md:items-center  ">
              <img src={HeroImg} alt="Heroimage" srcset=""  className="h-[418px] w-[1000px] rounded-[5px]"/>
            </div>
            <div className="flex justify-center">
            <div className="flex justify-between absolute bottom-[190px] h-[110px] w-[950px] bg-[#4e4b4b]">
                <div className="flex bg-[red] ">
                  <img src={HeroProf} alt="" className="w-[150px] h-[150px] rounded-[50%] border-[4px] border-gray-500 absolute -top-[55px] " />
                </div>
                
                <div className="flex flex-col self-center ">
                  <h1 className="text-3xl font-semibold text-white pl-[80px] ">Forum for pages and websites</h1>
                  <p className="text-white pl-[80px]">2.7K likes • 2.7K followers</p>
                </div>
                <div className="flex gap-2 items-center  pt-8 cursor-pointer">
                  <div className="bg-[#323232de] w-[95px] h-[33px] text-white flex rounded-[5px] items-center justify-center gap-1 "><RiUserFollowFill/> Following</div>
                <div className="bg-blue-500 w-[95px] h-[33px] text-white flex rounded-[5px] items-center justify-center gap-1"><BsMessenger/> Message</div>
                  <div className=" flex items-center justify-center text-white bg-[#323232de] h-[33px] w-[85px] rounded-[5px] gap-1"><FaSearch /> Search</div>
                </div>
            </div>
            </div>
        </div>
        <div className="mt-[12px]">
        <Navbar />
        </div>
    </div>
  )
}

export default Hero