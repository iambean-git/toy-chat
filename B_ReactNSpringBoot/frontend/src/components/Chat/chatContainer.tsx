
interface ChatMessage {
    nickname: string;
    message: string;
    time?: string;
    type: "ENTER" | "CHAT" | "LEAVE";
}

interface ChatContainerProps {
    msg: ChatMessage;
}


//입장메세지
export function EnterChat({ msg }: ChatContainerProps) {
    return (
        <div className="w-full text-center text-xs">
            {msg.message}
        </div>
    )
}


//일반 채팅
export function NormalChat({ msg }: ChatContainerProps) {
    return (
        <div className="w-3/5 p-3 md:min-w-90 md:w-fit md:max-w-150 bg-blue-50 flex flex-col text-sm rounded-xl">
            <div className="text-xs font-semibold text-blue-600 mb-1 pb-0.5 border-b border-blue-600 w-fit">
                {msg.nickname}
            </div>
            <div>{msg.message}</div>
        </div>
    )
}

//일반 채팅
export function MyChat({ msg }: ChatContainerProps) {
    return (
        <div className="w-full flex justify-end">
            <div className="w-3/5 p-3 md:min-w-90 md:w-fit md:max-w-150 bg-pink-100 flex items-end flex-col text-sm rounded-xl">
                <div>{msg.message}</div>
            </div>
        </div>

    )
}