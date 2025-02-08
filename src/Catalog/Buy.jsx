import supurgi from '../assets/supurgi.png';
import Products from './Products';
import { BsStarFill } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import { TbAlignBoxTopCenter } from 'react-icons/tb';
import { FaCheck } from 'react-icons/fa';
import colorData from '../assets/colorData';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Images from '../assets/Images';
import Forma from '../Page/Forma';


const sizeData = [
    { name: 'Small', dimensions: '10x10', fileSize: '12.5MB' },
    { name: 'Medium', dimensions: '20x20', fileSize: '24.8MB' },
    { name: 'Large', dimensions: '30x30', fileSize: '32.2MB' }
];
const formatData = ['PDF', 'PNG', 'JPG'];


function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="absolute  top-1/2 right-4 transform -translate-y-1/2 bg-[#FFFFFF] text-[#377df1] p-4 rounded-full cursor-pointer z-10"
            onClick={onClick}
        >
            <IoIosArrowForward />

        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="absolute  top-1/2 left-4 transform -translate-y-1/2 bg-[#FFFFFF] text-[#377df1] p-4 rounded-full cursor-pointer z-10"
            onClick={onClick}
        >
            <IoIosArrowBack />
        </div>
    );
}

const Buy = () => {
    const defaultImages = Object.values(Images)[0];

    const [selectedImages, setSelectedImages] = useState(colorData[0]?.images||defaultImages);
    const [selectedSize, setSelectedSize] = useState(sizeData[2]);
    const [selectedFormat, setSelectedFormat] = useState(formatData[0]);
    const [isSizeDropdownOpen, setIsSizeDropdownOpen] = useState(false);
    const [isFormatDropdownOpen, setIsFormatDropdownOpen] = useState(false);
    const [isModelOpen, setIsModelOpen] = useState(false);

    useEffect(() =>{
        console.log('edfjnikernvg',isModelOpen);
        
    },[isModelOpen])

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        adaptiveHeight: true
    };
    // Color



    const handleChange = (event) => {
        const selectedColorName = event.target.value;
        const selectedColor = colorData?.filter(color => color?.name === selectedColorName);

        setSelectedImages(selectedColor && Array.isArray(selectedColor[0].images) && selectedColor[0]?.images?.length > 0 ? selectedColor[0].images : defaultImages);
    };



    const handleOrder = () => {
        console.log("button clicked",isModelOpen);
        
        setIsModelOpen(true)
        // alert(`Order placed|\nColor: ${selectedImages === colorData[0].images ? 'Blue' : 'Green'}\nSize${selectedSize.name}\nFormat:${selectedFormat}`);
    };
    return (
        <>
            <div className="max-w-6xl mx-auto p-4">
                <div className='flex justify-between w-full mt-24 gap-[50px]'>
                    {/* {data.map()} */}
                    <div className="w-[732px] h-[500px] rounded-[50px] border-4 border-[#377DF1] flex justify-center items-center">
                        <div className='slider-container'>
                            <Slider {...settings}>
                                {(Array.isArray(selectedImages) && selectedImages||defaultImages)?.map((image, index) =>
                                (
                                    <div div key={index} className='flex justify-center items-center'>
                                        <div className='w-[600px] h-[400px] flex justify-center overflow-hidden ml-12 items-center'>
                                            <img src={image} alt={`Slide ${index + 1}`} className='w-full h-full object-contain' />
                                        </div>
                                    </div>
                                )
                                )}
                            </Slider>
                        </div>
                    </div>
                    <div >
                        <div className='w-[456px]'>
                            <h1 className='font-[600] h-[40px] text-[40px] mt-[-10px]'>Floororganic - 108</h1>
                            <p className='text-[#3E3E59] h-[40px]  font-[400] text-[16px] mt-7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt et dolore</p>
                        </div>
                        <div className='mt-4'>
                            <div className='justify-start flex gap-2 items-center'>
                                {[...Array(5)].map((_, i) => (
                                    <BsStarFill key={i} className='text-[#FD7E14]' />
                                ))}
                                <p className='text-[#605F5F] font-[600]'>23ta baholar</p>
                            </div>
                            <div className='w-[456px]'>
                                <div className='border-b-4 h-[100px]'>
                                {/* <button className='mt-6 mb-6 bg-[#377DF1] rounded-[50px] w-[456px] h-10 text-white' onClick={handleOrder}>Buyurtma Berish</button> */}

                                    <button
                                        onClick={handleOrder} className='mt-6 mb-6 bg-[#377DF1] rounded-[50px] w-[456px] h-10 text-white '>Buyurtma berish
                                    </button>
                                </div>
                                <div className=' space-y-6'>
                                    <div className='flex justify-between h-14 mb-6 border-b-4 text-[25px]'>
                                        <select onChange={handleChange} className='flex justify-between w-full'>
                                            <option value="" className='flex justify-between'>
                                                Select
                                            </option>
                                            {colorData.map((option, idx) => (
                                                <option key={idx} value={option?.name}>
                                                    {option?.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className='border-b-4 pb-4'>
                                        <div
                                            onClick={() => setIsSizeDropdownOpen(!isSizeDropdownOpen)}
                                            className="flex justify-between items-center cursor-pointer"
                                        >
                                            <h2 className="font-semibold text-2xl">{selectedSize.name} ({selectedSize.dimensions})</h2>
                                            <IoIosArrowDown className={`w-6 h-6 transition-transform ${isSizeDropdownOpen ? 'rotate-180' : ''}`} />
                                        </div>
                                        {isSizeDropdownOpen && (
                                            <div className='absolute bg-white shadow-lg rounded-md mt-2 z-20'>
                                                {sizeData.map((size, idx) => (
                                                    <div
                                                        key={idx}
                                                        onClick={() => {
                                                            setSelectedSize(size);
                                                            setIsSizeDropdownOpen(false);
                                                        }}
                                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                                    >
                                                        {size.name} ({size.dimensions})
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    <div className='flex items-center gap-6'>
                                        <TbAlignBoxTopCenter className="text-4xl" />
                                        <span className="text-2xl font-semibold">{selectedSize.fileSize}</span>
                                        <div className="relative">
                                            <div
                                                onClick={() => setIsFormatDropdownOpen(!isFormatDropdownOpen)}
                                                className="flex items-center gap-2 cursor-pointer"
                                            >
                                                <FaCheck className="text-3xl" />
                                                <span className="text-2xl font-semibold">{selectedFormat}</span>
                                            </div>
                                            {isFormatDropdownOpen && (
                                                <div className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-2 z-20">
                                                    {formatData.map((format, idx) => (
                                                        <div
                                                            key={idx}
                                                            onClick={() => {
                                                                setSelectedFormat(format
                                                                );
                                                                setIsFormatDropdownOpen(false);
                                                            }}
                                                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer whitespace-nowrap"
                                                        >
                                                            {format}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
            <Products />
            <Forma />

    {isModelOpen && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[9999]">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Buyurtma Tafsilotlari</h2>
            <p><strong>Rang:</strong> {selectedImages === colorData[0].images ? 'Blue' : 'Green'}</p>
            <p><strong>Hajmi:</strong> {selectedSize.name} ({selectedSize.dimensions})</p>
            <p><strong>SizeFile:</strong> {selectedSize.name}({selectedSize.fileSize})</p>
            <p><strong>Format:</strong> {selectedFormat}</p>
            <button onClick={() => setIsModelOpen(false)} className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md w-full">Yopish</button>
        </div>
    </div>
)}
        </>
    )
}
export default Buy;
