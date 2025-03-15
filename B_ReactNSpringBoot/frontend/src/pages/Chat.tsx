import useChatStore from "../stores/chatStore"

export default function Chat() {
    const chatName = useChatStore((state) => state.chatName);

    return (
        <div className="text-2xl font-semibold">
            채팅 닉네임 : {chatName}
        </div>
    )
}
