import vector from '../assets/Vector.png';

const Process = () => {
  return (
    <div className='mb-[120px] w-full h-[634px] overflow-hidden mt-[120px]  max-w-6xl mx-auto'>
      <div className="relative w-full h-full mx-6">
        {/* Header Section */}
        <div className="w-[356px]">
          <p className="text-xs text-blue-500 uppercase mb-2">Stockie operation across the world</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            We have best team and best process
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise
            blessing. Indulgence way everything joy.
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-full font-medium">
            Get Started
          </button>
        </div>
        <div className='absolute top-[50px] -left-8 w-[1039px]'>
          <img src={vector} alt="" />
        </div>
        {/* Steps */}
        <div className='absolute  bottom-[45px] left-[100px]'>
          <div className='w-[285px] relative'>
            <div className='flex items-center justify-between w-full mb-[40px]'>
              <div className='w-[60px] h-[60px]  bg-[#fff] rounded-[20px] flex items-center justify-center'>
                <div className='w-[23px] h-[23px] bg-[#C4C4C4] rounded-full flex items-center justify-center'>
                </div>
              </div>
              <h1 className='absolute right-0 -top-20 text-[#05192B] font-[700] text-[208px] opacity-[5%]'>1</h1>
            </div>
            <div className=''>
              <h1>Project Discovery Call</h1>
              <p className='text-[#64607D]'>Party we years to order allow asked of. We so opinion friends me message as delight. </p>
            </div>
          </div>
        </div>
        <div className='absolute   bottom-[170px] left-[580px]'>
          <div className='w-[285px] relative'>
            <div className='flex items-center justify-between w-full mb-[40px]'>
              <div className='w-[60px] h-[60px]  bg-[#fff] rounded-[20px] flex items-center justify-center'>
                <div className='w-[23px] h-[23px] bg-[#C4C4C4] rounded-full flex items-center justify-center'>
                </div>
              </div>
              <h1 className='absolute right-0 -top-20 text-[#05192B] font-[700] text-[208px] opacity-[5%]'>2</h1>
            </div>
            <div className=''>
              <h1>Project Discovery Call</h1>
              <p className='text-[#64607D]'>Party we years to order allow asked of. We so opinion friends me message as delight. </p>
            </div>
          </div>
        </div>
        <div className='absolute   top-[30px] right-[10px]'>
          <div className='w-[285px] relative'>
            <div className='flex items-center justify-between w-full mb-[40px]'>
              <div className='w-[60px] h-[60px]  bg-[#fff] rounded-[20px] flex items-center justify-center'>
                <div className='w-[23px] h-[23px] bg-[#C4C4C4] rounded-full flex items-center justify-center'>
                </div>
              </div>
              <h1 className='absolute right-0 -top-20 text-[#05192B] font-[700] text-[208px] opacity-[5%]'>3</h1>
            </div>
            <div className=''>
              <h1>Project Discovery Call</h1>
              <p className='text-[#64607D]'>Party we years to order allow asked of. We so opinion friends me message as delight. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
export default Process;
