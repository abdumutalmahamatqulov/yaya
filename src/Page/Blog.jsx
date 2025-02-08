import person from '../assets/Rectangle_person.png';
import woman from '../assets/Woman.png';
import girl from '../assets/Girl.png';
import men_ok from '../assets/Men_Ok.png';
import men_look from '../assets/Men_Look.png';
import setting from '../assets/Woman_Setting.png';
const Blog = () => {
    return (
        <div className="max-w-6xl mx-auto mb-[120px]">
            <div className="justify-center items-center w-full border-black">

                <div className="flex justify-between items-center mb-[64px]">
                    <h1 className="text-[42px] font-[700]">
                        Our Latest Blog Posts
                    </h1>
                    <button className=" text-white bg-[#377DF1] rounded-[10px] w-[195px] h-[65px]">See All Blog Posts</button>
                </div>
                <div className="justify-between flex gap-[30px]">

                    {/* first steps */}
                    <div className="">
                        <div className='mb-[11.5px]'>
                            <img src={person} alt="" className='mb-[14.6px]' />
                            {/* Group 719 */}
                            <div className='flex justify-start gap-5 text-[#64607D]'>
                                <p>
                                    08-11-2021
                                </p>
                                <h1>
                                    Category
                                </h1>
                            </div>
                        </div>
                        <div className='justify-start'>
                            <h1 className=' text-[20.8px] font-[700] w-[393px] h-[76px] mb-2 text-[#05192B] leading-[37.5px]'>
                                Believing neglected so so allowance existence departure.
                            </h1>
                            <p className='w-[393px] h-[94px] text-[#64607D] font-[500] leading-[31.5px]'>
                                Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.
                            </p>
                        </div>
                    </div>
                    {/* Second steps */}
                    <div>
                        <div className='mb-[11.5px]'>
                            <img src={woman} alt="" className='mb-[14.6px]' />
                            {/* Group 719 */}
                            <div className='flex justify-start gap-5 text-[#64607D]'>
                                <p>
                                    08-11-2021
                                </p>
                                <h1>
                                    Category
                                </h1>
                            </div>
                        </div>
                        <div className='justify-start'>
                            <h1 className=' text-[20.8px] font-[700] w-[393px] h-[76px] mb-2 text-[#05192B] leading-[37.5px]'>
                                In design active temper be uneasy. Thirty for remove plenty regard you.
                            </h1>
                            <p className='w-[393px] h-[94px] text-[#64607D] font-[500] leading-[31.5px]'>
                                Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything.
                            </p>
                        </div>
                    </div>
                    {/* third steps */}
                    <div className=''>
                        {/* first informations */}
                        <div className='gap-[16.7px] flex justify-center pb-[26.6px] mb-[27px] border-b-4'>
                            <div className='w-[114.6px] h-[83.4px] rounded-[10.4px]'>
                                <img src={girl} alt="" />
                            </div>
                            <div className='justify-start'>
                                <div className='flex justify-start gap-5 text-[#64607D]'>
                                    <p>
                                        08-11-2021
                                    </p>
                                    <h1>
                                        Category
                                    </h1>
                                </div>
                                <h1 className=' text-[18.8px] font-[700] w-[255px] h-[63px] text-[#05192B]'>
                                    Partiality on or continuing in particular principles
                                </h1>
                            </div>
                            
                        </div>
                        {/* second informations */}
                        <div className='gap-[16.7px] flex justify-center pb-[26.6px] mb-[27px] border-b-4'>
                            <div className='w-[114.6px] h-[83.4px] rounded-[10.4px]'>
                                <img src={men_ok} alt="" />
                            </div>
                            <div className='justify-start'>
                                <div className='flex justify-start gap-5 text-[#64607D]'>
                                    <p>
                                        08-11-2021
                                    </p>
                                    <h1>
                                        Category
                                    </h1>
                                </div>
                                <h1 className=' text-[18.8px] font-[700] w-[255px] h-[63px] text-[#05192B]'>
                                    Partiality on or continuing in particular principles
                                </h1>
                            </div>
                        </div>
                        {/* third informations */}
                        <div className='gap-[16.7px] flex justify-center pb-[26.6px] mb-[27px] border-b-4'>
                            <div className='w-[114.6px] h-[83.4px] rounded-[10.4px]'>
                                <img src={men_look} alt="" />
                            </div>
                            <div className='justify-start'>
                                <div className='flex justify-start gap-5 text-[#64607D]'>
                                    <p>
                                        08-11-2021
                                    </p>
                                    <h1>
                                        Category
                                    </h1>
                                </div>
                                <h1 className=' text-[18.8px] font-[700] w-[255px] h-[63px] text-[#05192B]'>
                                    Partiality on or continuing in particular principles
                                </h1>
                            </div>
                        </div>
                        {/* fourth informations */}
                        <div className='gap-[16.7px] flex justify-center pb-[26.6px] mb-[27px] border-b-4'>
                            <div className='w-[114.6px] h-[83.4px] rounded-[10.4px]'>
                                <img src={setting} alt="" />
                            </div>
                            <div className='justify-start'>
                                <div className='flex justify-start gap-5 text-[#64607D]'>
                                    <p>
                                        08-11-2021
                                    </p>
                                    <h1>
                                        Category
                                    </h1>
                                </div>
                                <h1 className=' text-[18.8px] font-[700] w-[255px] h-[63px] text-[#05192B]'>
                                    Partiality on or continuing in particular principles
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Blog;