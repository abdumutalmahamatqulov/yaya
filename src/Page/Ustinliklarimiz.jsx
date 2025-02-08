import Yuldiz from '../assets/Yuldiz.png';
import Medal from '../assets/Medal.png';
import Lampochga from '../assets/Lampochga.png';
import { IoIosStar } from 'react-icons/io';
import { GiRibbonMedal } from 'react-icons/gi';
import { HiLightBulb } from 'react-icons/hi';

const Ustinliklarimiz = () => {
    return (
        <div className=" border-black border  mb-[157px] max-w-6xl mx-auto ">
            <div className='border w-full flex justify-between items-center'>
                <div className='text-2xl'>
                    <p>Among leave law <br /> built now. </p>
                </div>
                <div className='flex gap-3 justify-center items-center'>
                    <IoIosStar />
                    <p className=''>Villoge did remove enjoyed</p>
                </div>
                <div className='flex gap-3 justify-center items-center'>
                    <GiRibbonMedal />
                    <p className=''>Nay likely lenght sooner</p>
                </div>
                <div className='flex gap-3 justify-center items-center'>
                    <HiLightBulb />
                    <p className=''>Expense windows adopted</p>
                </div>
            </div>
        </div>
    )
}
export default Ustinliklarimiz;