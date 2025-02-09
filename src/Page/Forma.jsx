import { useState } from "react";

const Forma = () => {
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const formatFullName = (value) => {
        return value.replace(/[^a-zA-Z\s]/g, "").replace(/\b\w/g, char => char.toUpperCase());
    }

    const formatPhone = (value) => {
        // Faqat raqamlarni olish
        let digits = value.replace(/\D/g, "");
    
        // Oʻzbekiston kodini tekshirish
        if (digits.startsWith("998")) {
          digits = digits.slice(3);
        }
    
        // Faqat 9 ta raqam olish
        digits = digits.slice(0, 9);
    
        // Agar foydalanuvchi hammasini o‘chirsa, bo‘sh qoldirish
        if (digits.length === 0) return "";
    
        // Formatlash
        const formatted = digits.replace(/(\d{2})(\d{3})(\d{2})(\d{2})/, "($1)-$2-$3-$4");
        return `+998-${formatted}`;
      };
    
      const handleChange = (e) => {
        const value = e.target.value;
        setPhone(formatPhone(value));
      };


    const handleSubmit = () => {
        if (!fullName || !phone) {
            alert("Please fill in all fields.");
            return;
        }

        const telegramBotToken = "8065373391:AAHZxO4YQavB05SiutUhKiBMBWj90XvFqSM";
        const chatId = "1797246028";
        const message = `Full Name: ${fullName}%0APhone: ${phone}`;
        
        fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${chatId}&text=${message}`)
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    setIsModalOpen(true);
                } else {
                    alert("Failed to send data to Telegram.");
                }
            })
            .catch(error => alert("Error: " + error));
    };

    return (
        <div className="w-full mx-auto bg-[#05192B] flex items-center justify-center mb-32">
            <div className="w-[1237px] h-[445px] m-auto mb-[72px]">
                <div className="w-full h-full pt-[72px] m-auto flex justify-between">
                    <div className="flex-col pt-4"> 
                        <p className="text-[#FFFFFF] text-[14px] font-[600] mb-2">Why Choose Us</p>
                        <h1 className="text-[#FFFFFF] text-[40px] font-[700] mb-4 w-[411px] h-[180px] leading-[55px]">
                            Track your crypto portfolio on the <br /> best way possible
                        </h1>
                        <p className="font-[400] w-[485px] h-[60px] text-[20px] text-[#FFFFFF] leading-8">
                            Mean if he they been no hold mr. Is at much do made. Latter person am secure of estate genius at.
                        </p>
                    </div>
                    <div className="w-[371px] h-[228px] mt-9">
                        <input 
                            type="text" 
                            className="w-[371px] h-[60px] font-[400] text-[20px] rounded-[20px] bg-[#103352] px-4 mb-6 text-white" 
                            placeholder="Full Name"
                            value={fullName}
                            onChange={(e) => setFullName(formatFullName(e.target.value))}
                        />
                        <input 
                            type="text" 
                            className="w-[371px] h-[60px] font-[400] text-[20px] rounded-[20px] bg-[#103352] px-4 mb-6 text-white" 
                            placeholder="+998-(__)-___-__-__"
                            value={phone}
                            onChange={handleChange}
                        />
                        <button 
                            onClick={handleSubmit} 
                            className="transition-all duration-200 ease-linear hover:scale-105 bg-[#377DF1] text-[#FFFFFF] w-[371px] h-[60px] rounded-[20px]">
                            SENT
                        </button>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg text-center">
                        <p className="text-black font-[600] text-[18px] mb-4">Form submitted successfully!</p>
                        <button 
                            onClick={() => setIsModalOpen(false)} 
                            className="bg-[#377DF1] text-[#FFFFFF] px-4 py-2 rounded-lg">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Forma;
