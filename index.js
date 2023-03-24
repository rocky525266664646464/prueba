const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Gracias por aceptar estar a mi lado al final de los tiempos , prometo amarte por toda la vida')
});

const noBtn = document.querySelector('#noBtn');
noBtn.addEventListener('mouseover',function () {
  const ramdonX = parseInt (Math.random()*100);
  const ramdonY = parseInt (Math.random()*100);
  noBtn.style.setProperty('top' , ramdonY+'%');
  noBtn.style.setProperty('left' , ramdonX+'%');
  noBtn.style.setProperty('transform' ,`translate(-${ramdonX}%,-${ramdonY}%)`);
})