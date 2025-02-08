import frame from '../assets/Frame.png';
import gul from '../assets/Gul.png';
import setting from '../assets/Setting.png';
import strelka from '../assets/strelka.png';

const Categories = () => {
    return (
        <div className='mx-auto max-w-6xl h-[600px] mb-[370px] mt-[120px]'>
            <div className=" w-full h-full  ">
                <div className="flex flex-col items-center justify-center gap-3">
                    <h1 className="font-bold text-3xl">We help your business grow faster.</h1>
                    <p className="max-w-[420px] text-center">
                        Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient.
                    </p>
                </div>
                <div className="mt-[60px] w-full  flex items-center gap-10 justify-center">
                    <div className=' bg-white w-[380px] h-[350px] rounded-xl'>
                        <div className='ml-6'>

                            <img src={frame} alt="" className='ml-[-10px] mt-10' />
                            <h1 className='font-bold mt-4'>Supurgilar</h1>
                            <p className='font-medium tracking-[0px] mt-2'>Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as.</p>
                            <button className='mt-4 text-cyan-700 font-bold flex items-center' >Read More <img src={strelka} alt="" className='ml-2 mt-1 w-3 h-3' /></button>
                        </div>
                    </div>
                    <div className=' bg-white w-[380px] h-[350px] rounded-xl'>
                        <div className='ml-6'>

                            <img src={gul} alt="" className='ml-[-10px] mt-10' />
                            <h1 className='font-bold mt-4'>Tozalash vositalari</h1>
                            <p className='font-medium tracking-[0px] mt-2'>Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address. </p>
                            <button className='mt-4 text-cyan-700 font-bold flex items-center'>Read More <img src={strelka} alt="" className='ml-2 mt-1 w-3 h-3' /></button>
                        </div>
                    </div>
                    <div className=' bg-white w-[380px] h-[350px] rounded-xl'>
                        <div className='ml-6'>

                            <img src={setting} alt="" className='ml-[-10px] mt-10' />
                            <h1 className='font-bold mt-4'>Chelaklarimiz</h1>
                            <p className=' font-medium tracking-[0px] mt-2'>Ham windows sixteen who inquiry fortune demands. Is be upon sang fond must shew. Really boy law county she unable her sister.</p>
                            <button className='mt-4 text-cyan-700 font-bold flex items-center'>Read More <img src={strelka} alt="" className='ml-2 mt-1 w-3 h-3' /></button>
                        </div>
                    </div>
                </div>
                <div className=' bottom-4 w-full h-7 flex items-center justify-center py-14'>
                    <button className='mx-auto text-white bg-blue-600 py-4 px-14 rounded-xl'>More About Categories</button>
                </div>
            </div>
        </div>
    )
}
export default Categories;