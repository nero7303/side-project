let target = document.getElementById('dynamic');

function randomString(){
  let stringArr = ['Learn to HTML','Learn to CSS','Learn to JS','Learn to GIT','Learn to CODE'];
  let selectString = stringArr[Math.floor(Math.random ()* stringArr.length)];
  let selectStringArr = selectString.split("");

  return selectStringArr;
}



// 타이핑 리셋
function restTyping(){
  target.textContent = "";
  dynamic(randomString());
}



//  한글자씩 출력 함수
function dynamic(randomArr){
if (randomArr.length > 0) {
  target.textContent += randomArr.shift();
setTimeout(function () {
  dynamic(randomArr);
},80);
}else{
setTimeout(restTyping,1000);
};
};

dynamic(randomString());

// 커서 깜박임 효과
function blink (){
  target.classList.toggle("active");
}

setInterval(blink,500);