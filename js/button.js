const description = {
  request:
    '사용자가 웹 브라우저를 통해 찾고 싶은 웹 페이지의 URL 주소를 입력하면 DNS 서버에서 URL을 IP주소로 변환한다. 리소스 요청 등의 정보를 HTTP 데이터를 통해 전송한다. 그리고 이를 웹 서버에서 수신한다.',
  analysis:
    '요청 메세지(HTTP의 메소드인 GET,POST, DELETE 등)를 분석하여 클라이언트의 요청을 이해한다.',
  processing:
    '요청에 따라서 행동을 한다. 정적 자원의 경우 웹 서버내의 파일 시스템을 검색하여 반환한다. 동적 자원의 경우 서버 사이드 스크립트를 실행하여 데이터베이스 접급 등의 컨텐츠를 동적으로 생성하여 반환한다.',
  creation:
    '요청 처리 결과를 HTTP 응답으로 생성한다. 응답에는 상태 표시줄, 헤더, 메시지 본문이 포함된다. 상태 표시줄은 요청의 성공 여부를 나타내는 상태 코드, HTTP 버전 번호, 상태 코드의 의미를 요약한 상태 텍스트를 포함한다. 헤더에는 응답과 응답을 전송한 서버에 대해 좀 더 자세히 알아보는 데 사용할 수 있는 정보가 포함되어 있습니다. 본문은 클라이언트에게 반환되는 컨텐츠를 포함한다.',
  response: 'HTTP 응답을 수신하여 요청한 리소스를 받을 수 있다.',
};
// 웹 동작방식 - 버튼 활성화
const actions = document.querySelector('.work__action');
const ex = document.querySelector('.work__description');
let previousTag;
let previousArrow;
const rightArrow = document.querySelector('.requestArrow');
const leftArrow = document.querySelector('.responseArrow');
actions.addEventListener('click', (event) => {
  if (previousTag) {
    previousTag.classList.remove('on');
  } else {
    ex.style.display = 'block';
  }
  if (event.target.matches('li') || event.target.matches('p')) {
    ex.innerHTML = `<p>${description[event.target.closest('li').id]}</p>`;
    event.target.closest('li').classList.add('on');
    previousTag = event.target.closest('li');
    if (event.target.closest('li').id == 'request') {
      if (leftArrow.classList.contains('on')) leftArrow.classList.remove('on');
      rightArrow.classList.add('on');
      previousArrow = rightArrow;
    } else if (event.target.closest('li').id == 'response') {
      if (rightArrow.classList.contains('on')) rightArrow.classList.remove('on');
      leftArrow.classList.add('on');
      previousArrow = leftArrow;
    } else {
      previousArrow.classList.remove('on');
    }
  }
});
