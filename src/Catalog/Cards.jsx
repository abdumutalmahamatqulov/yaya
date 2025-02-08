import { useState } from 'react';
import supurgi from '../assets/supurgi.png';
import { FaExchangeAlt } from 'react-icons/fa';
import { SlBasket } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';


const Cards = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/home/product")
    };
    return (
        <div className="max-w-6xl mx-auto p-4">
            <div className="grid grid-cols-3">
                {/* first step */}
                {[...Array(12)].map((_, index) => (

                    <div key={index} className='bg-[#f5f8ff] w-[355px] h-[319.5px] ruonded-[7.8px] mb-2'>
                        <div className=" mb-[7.8px] ml-5">
                            <h1 className=' text-[#05192B]  font-bold'>Yayra</h1>
                            <img src={supurgi} alt="Supurgi" className='w-[206px] h-[202px] mix-blend-multiply' />
                        </div>
                        <div className='w-[213px] h-[69.5px] mb-[21.7px] ml-5 '>
                            <h1 className='text-[#05192B] text-[12px] font-[700]'>Supurgi</h1>
                            <p className='text-[#05192BB2] font-[400] text-[9.4px] mb-2'>Basin mixer</p>
                            <div className='justify-start flex gap-[5px]'>

                                <button onClick={handleButtonClick} className='bg-[#377DF1] text-white rounded-[7.8px] w-[137px] h-[32.7px] font[700] text-[15.7px] items-center'>Buy now</button>
                                <div className='justify-center flex h-[33px] rounded-[7.8px] items-center gap-[6px] text-[#05192B]'>

                                    <FaExchangeAlt className='text-[20px] w-[33px]' />
                                    <SlBasket className='text-[20px] w-[33px]' />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className='items-center justify-end flex mt-32'>
                    {[1, 2, 3, 4].map((num) => (
                        <button
                            key={num}
                            className={`px-10 rounded-md ${currentPage === num ? 'text-blue-600 font-bold' : 'text-gray-500'}`}
                            onClick={() => setCurrentPage(num)}>{num}</button>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Cards;