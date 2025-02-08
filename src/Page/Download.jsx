import { GiWarlockEye } from "react-icons/gi";
import { MdOutlineFileDownload } from "react-icons/md";


const Download = () => {
    return (
        <div className="max-w-6xl mx-auto mt-[120px] mb-[120px]">
            <div className="justify-center items-center w-full">
                <div className="">
                    <p className="items-center flex justify-center text-[#377DF1]">Project Management App</p>
                    <h1 className="text-[64px] leading-none text-center text-[#05192B] font-semibold w-[1237px]">Download our catalog  free trail to view and order today!</h1>
                    <h2 className="flex justify-center mt-[17px] text-[#64607D]">End-to-end payments and financial management in a single solution.</h2>
                </div>
                <div className="flex items-center justify-center gap-[11px] mt-[30px]">
                    <div className="flex justify-center rounded-full w-[232px] h-[66px] gap-[14px] items-center bg-[#377DF1] text-white">
                        <MdOutlineFileDownload className="text-[30px]"/>
                        <p>Download</p>
                    </div>
                    <div className="flex justify-center rounded-full gap-[14px] w-[183px] h-[66px] items-center bg-[#05192B] text-white">
                        <GiWarlockEye className="text-[25px]" />
                        <p>View</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Download;