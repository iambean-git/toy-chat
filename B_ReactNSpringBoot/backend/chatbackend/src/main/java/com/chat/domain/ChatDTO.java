package com.chat.domain;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ChatDTO {
	private String nickname;
	private String message;
	private Date time;
	
	private MessageType type; // 메시지 타입
    public enum MessageType {
        ENTER, CHAT, LEAVE
    }
}
