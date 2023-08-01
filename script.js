document.getElementById("loginForm").onsubmit = function() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username === "name" && password === "123456") {
        window.location.href = "http://www.baidu.com";
    }
    else {
        alert("账号或密码错误，请重新输入！");
    }

    return false;
};