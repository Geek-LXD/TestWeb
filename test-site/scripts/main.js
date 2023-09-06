
var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/阿坝州.png") {
    myImage.setAttribute("src", "images/巴中市.png");
  } else {
    myImage.setAttribute("src", "images/阿坝州.png");
  }
};


var _btn = document.querySelector("button");
var myHeading = document.querySelector("h1");
_btn.onclick= function () {
    setUserName();
  };

  function setUserName(){
    let myName = prompt("请输入你的名字。");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla 酷毙了，" + myName;

  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla 酷毙了，" + storedName;
  }
