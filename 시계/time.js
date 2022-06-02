const d_day = document.getElementById("1");
function time() {
  const D = new Date();
  const year = D.getFullYear();
  const Month = D.getMonth() + 1;
  const date = D.getDate();
  const day_ = ["일", "월", "화", "수", "목", "금", "토"];
  const day = day_[D.getDay()];
  const Hour = String(D.getHours()).padStart(2, "0");
  const min = String(D.getMinutes()).padStart(2, "0");
  const sec = String(D.getSeconds()).padStart(2, "0");

  d_day.innerHTML = `${year}년 ${Month}월 ${date}일 ${day}요일<br>${Hour} : ${min} : ${sec}`;
}
time();
setInterval(time, 1000);
