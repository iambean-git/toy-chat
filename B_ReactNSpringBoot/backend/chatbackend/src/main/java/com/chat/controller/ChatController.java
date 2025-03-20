package com.chat.controller;

import java.util.Date;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.chat.domain.ChatDTO;

@CrossOrigin(origins = "http://localhost:5173")
@Controller
public class ChatController {
	
	//일반 메시지 처리
	@MessageMapping("/chat.sendMessage")	//sub/chat.sendMessage로 들어오는 메시지 처리
	@SendTo("/sub/chat")
	public ChatDTO sendMessage(@Payload ChatDTO chatMessage){
        chatMessage.setTime(new Date()); // 서버에서 메시지 수신 시간을 추가
        return chatMessage; // 구독한 모든 사용자에게 메시지 전송
    }
	
	// 사용자가 입장할 때
	@MessageMapping("/chat.addUser")
    @SendTo("/sub/chat")
    public ChatDTO addUser(@Payload ChatDTO chatMessage, SimpMessageHeaderAccessor headerAccessor) {
        chatMessage.setTime(new Date());
        chatMessage.setType(ChatDTO.MessageType.ENTER);
        chatMessage.setMessage(chatMessage.getNickname() + "님이 입장하셨습니다.");
        headerAccessor.getSessionAttributes().put("username", chatMessage.getNickname());
        return chatMessage;
    }
	
}
