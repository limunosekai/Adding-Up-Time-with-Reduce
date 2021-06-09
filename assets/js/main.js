//data값이 time인 nodelist를 array로 바꿔서 추가하기
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

const seconds = timeNodes
  .map((node) => node.dataset.time) //li에서 time만 갖고 오기
  .map((timeCode) => {
    //split으로 ':'를 기준으로 분,초를 나눈 후 문자열 -> 실수화
    const [mins, secs] = timeCode.split(':').map(parseFloat);
    return mins * 60 + secs; //초 단위로 반환
  })
  .reduce((total, vidSeconds) => total + vidSeconds); //초의 총합 구하기

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600); //시간으로 변환
secondsLeft = secondsLeft % 3600; //나머지값을 받아서
const minutes = Math.floor(secondsLeft / 60); //분으로 변환
secondsLeft = secondsLeft % 60; //나머지는 초

const totalTime = `👀 총 시간의 합은? ${hours}시간 ${minutes}분 ${secondsLeft}초`;

document.querySelector('.total').innerHTML = totalTime;
