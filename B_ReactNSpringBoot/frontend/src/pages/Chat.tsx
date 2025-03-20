import useChatStore from "../stores/chatStore"
import { useEffect, useState } from "react";
import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";

import { EnterChat, MyChat, NormalChat } from "../components/Chat/chatContainer";

interface ChatMessage {
    nickname: string;
    message: string;
    time?: string;
    type: "ENTER" | "CHAT" | "LEAVE";
}

export default function Chat() {
    const chatName = useChatStore((state) => state.chatName);

    const [client, setClient] = useState<Client | null>(null);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const socket = new SockJS("http://localhost:8080/ws/chat");
        const stompClient = new Client({
            webSocketFactory: () => socket,
            reconnectDelay: 5000,
            onConnect: () => {
                console.log("Connected to WebSocket");

                // 채팅 메시지 구독
                stompClient.subscribe("/sub/chat", (message) => {
                    const receivedMessage: ChatMessage = JSON.parse(message.body);
                    setMessages((prev) => [...prev, receivedMessage]);
                });

                // 입장 메시지 전송
                const enterMessage: ChatMessage = {
                    nickname: chatName,
                    type: "ENTER",
                    message: `${chatName}님이 입장하셨습니다.`,
                };
                stompClient.publish({
                    destination: "/pub/chat.addUser",
                    body: JSON.stringify(enterMessage),
                });
            },
            onDisconnect: () => console.log("Disconnected"),
        });

        stompClient.activate();
        setClient(stompClient);

        return () => {
            stompClient.deactivate();
        };
    }, [chatName]);

    const sendMessage = () => {
        if (client && message.trim() !== "") {
            const chatMessage: ChatMessage = {
                nickname: chatName,
                message,
                type: "CHAT",
                time: new Date().toISOString(),
            };
            client.publish({
                destination: "/pub/chat.sendMessage",
                body: JSON.stringify(chatMessage),
            });
            setMessage("");
        }
    };

    return (
        <div className="flex flex-col h-full p-4">
            <div className="w-full h-full relative border border-gray-300 rounded-xl flex flex-col justify-end overflow-y-auto p-4 gap-y-3">
                {/* {messages.map((msg, index) => (
                    <div key={index}>
                        [{msg.time}] <b>{msg.nickname}</b>: {msg.message}
                    </div>
                ))} */}

                {messages.map((msg, idx) => (
                    msg.type === "ENTER"? 
                    <EnterChat key={idx} msg={msg} /> :
                    msg.nickname === chatName ?
                    <MyChat key={idx} msg={msg} /> :
                    <NormalChat key={idx} msg={msg} />
                ))}
            </div >
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                className="border"
            />
            <button onClick={sendMessage}>Send</button>
        </div >
    )
}
