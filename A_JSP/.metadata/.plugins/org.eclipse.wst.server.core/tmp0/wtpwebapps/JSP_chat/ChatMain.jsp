<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>JSP 웹소켓 채팅</title>
</head>
<body>
	<script>
	function chatOpen() {
		var nickname = document.getElementById("chatName");
		if(nickname.value == ""){
			alert("닉네임을 입력하세요");
			id.focus();
			return;
		}
		window.open("ChatWindow.jsp?chatName="+nickname.value, "", "width=320, height=400");
		nickname.value = "";
	}
	</script>
	<h2> 닉네임을 입력하고 채팅에 참여하세요 </h2>
	닉네임 : <input type="text" id="chatName" />
	<button onclick="chatOpen();">채팅 참여</button>
</body>
</html>