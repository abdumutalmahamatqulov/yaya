import group from '../assets/Group.png';
import group1 from '../assets/Group1.png';
import group2 from '../assets/Group2.png';
import group3 from '../assets/Group3.png';
import group4 from '../assets/Group4.png';
import group5 from '../assets/Group5.png';
import group6 from '../assets/Group6.png';


const Companies = () => {

    return (
        <div className='mt-[100px] mb-[120px] max-w-6xl mx-auto'>
            <div className="w-full ">
                <h1 className='text-3xl font-bold text-center mb-[36px]'>Over 32k + software business growing with Yayra</h1>
                <div className='flex items-center justify-center text-6xl gap-10 mt-4'>
                    <img src={group} alt="OpenZeppelin" className='w-auto ' />
                    <img src={group1} alt="Oracle" className='w-auto ' />
                    <img src={group2} alt="Morpheus" className='w-auto ' />
                    <img src={group3} alt="Samsung" className='w-auto ' />
                    <img src={group4} alt="Monday.com" className='w-auto ' />
                    <img src={group5} alt="Segment" className='w-auto ' />
                    <img src={group6} alt="Protonet" className='w-auto ' />
                </div>
            </div>
        </div>
    )
};
export default Companies;