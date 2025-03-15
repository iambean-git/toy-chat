// ..src/sotres/chatStore.ts
import { create } from "zustand";

interface ChatState {
    chatName : string;
    setChatName : (str:string) => void;
}

const useChatStore = create<ChatState>((set)=>({
    chatName : "",
    setChatName : (str) => set({chatName : str})
}));

export default useChatStore;