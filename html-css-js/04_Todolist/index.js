let $input = document.querySelector("input");
$input.addEventListener("keydown", (e) => {
  // console.log(e);
  // 키보드에서 한글를 입력받았을때 이벤트 중복처리 방지 
  if (e.isComposing) return;
  if (e.code === 'Enter') {
    alert($input.value);
    $input.value = '';
  }
})