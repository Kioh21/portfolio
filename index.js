document.addEventListener('wheel', function (e) {
  const rightSide = document.querySelector('.right-side');

  const isScrollable = rightSide.scrollHeight > rightSide.clientHeight;

  if (isScrollable) {
    e.preventDefault();
    rightSide.scrollTop += e.deltaY * 0.3;
  }
}, { passive: false });

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  document.body.style.backgroundImage = `
      radial-gradient(
        circle farthest-side at ${x}px ${y}px,
      rgba(6, 63, 11, 0.69) 0%,
        transparent 50%
      )
    `;
});

name();

function name(){
  let str = ""
  for(i=0;i<42;i++){
    str += `24jy02${i}@jec.ac.jp, `;
  }
  console.log(str)
}