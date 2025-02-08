import { FaQuoteRight } from 'react-icons/fa';
import img from '../assets/feedbackImg.png'

const Feedback = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="flex flex-col justify-center items-center w-full ">
                <p className="text-[#377DF1] font-[700] text-[16px] text-center">
                    Testimonials
                </p>
                <h1 className="text-[#05192B] text-[40px] font-[700] mt-[11px] mb-[60px] text-center">
                    Check what our clients are saying
                </h1>
                <div className="rounded-tl-[138px] flex items-center justify-between rounded-br-[138px] border border-black w-[1127px] h-[446px] bg-[#05192B]">
                    <div className="border-[#377DF1] overflow-hidden border-[12px]  w-[257px] h-[259px] rounded-tl-[70px] ml-[-130px] rounded-br-[70px] ">
                        <img src={img} alt="" />
                    </div>
                    <div className='text-white mr-[13px] items-center justify-center mb-20'>
                        <h1 className='text-[48px] w-[700] mb-[15px]'>Orifjon Solijonov</h1>
                        <p className='w-[758px] h-[62px] text-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className='text-blue-700 mb-[230px] mr-[95px] w-[65px]'>

                        <FaQuoteRight  className='text-[60px]'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Feedback;