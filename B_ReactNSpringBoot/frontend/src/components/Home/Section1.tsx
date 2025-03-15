import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useChatStore from "../../stores/chatStore";

export default function Section1() {
    const navigate = useNavigate();
    const { chatName, setChatName } = useChatStore();
    const [noName, setNoName] = useState(false);

    const handleClick = () => {
        if (!chatName.trim()) {
            setNoName(true);
            return;
        }
        navigate("/chat");
    };

    return (
        <section className="h-1/2 flex flex-col justify-center items-center space-y-8 border border-gray-300 rounded-2xl">
            <img src="/assests/home/chat.png" alt="chat" className="size-40 md:size-52" />
            <p>닉네임을 입력하고 채팅에 참여하세요!</p>
            <input type="text" className="w-96 h-12 rounded-lg border focus:outline-none focus:ring-1 focus:ring-indigo-600 text-center" 
                onChange={(e) => { setChatName(e.target.value); setNoName(false); }} />
            {noName && <div className="text-red-600 -mt-6">닉네임을 입력하세요</div>}
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg" 
                onClick={handleClick}> 시작하기 </button>
        </section>
    );
}
