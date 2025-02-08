import supurgi from '../assets/supurgi.png';
import { FaExchangeAlt, FaLongArrowAltRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Buy from './Buy';


const Products = () => {
    const navigate = useNavigate();

    const handleNextPage = () => {
        navigate("/home/catalog");
    }

    return (
        <div className="max-w-6xl mx-auto p-4">
            <div className='flex justify-between'>

                <p className='text-[#05192B] text-[42px] font-[800] mb-[30px]'>O’xshash mahsulotlar</p>
                <button onClick={handleNextPage} className='flex justify-center items-center gap-2 mb-[47px] bg-[#377DF1] text-white rounded-[10px] w-[150px] h-[41px]'>Barchasi <FaLongArrowAltRight /></button>
            </div>
            <div className="grid grid-cols-4">
                {/* first step */}
                {[...Array(8)].map((_, index) => (

                    <div key={index} className='bg-[#f5f8ff] w-[255px] h-[319.5px] ruonded-[7.8px] mb-[32px]'>
                        <div className="mb-[7.8px] ml-5">
                            <h1 className=' text-[#05192B]  font-bold'>Yayra</h1>
                            <img src={supurgi} alt="Supurgi" className='w-[206px] h-[202px] bg-transparent' />
                        </div>
                        <div className='w-[213px] h-[69.5px] mb-[21.7px] ml-5 '>
                            <h1 className='text-[#05192B] text-[12px] font-[700]'>Supurgi</h1>
                            <p className='text-[#05192BB2] font-[400] text-[9.4px] mb-2'>Basin mixer</p>
                            <div className='justify-start flex gap-[5px]'>

                                <button className='bg-[#377DF1] text-white rounded-[7.8px] w-[137px] h-[32.7px] font[700] text-[15.7px] items-center'>Harid qilish</button>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Products;