window.addEventListener('load',function(){

  var divOne = document.getElementsByTagName('div')[0];
  //quiero saber en especifico los valores que tiene su atributo class
  console.log(divOne.classList);

   divOne.classList.add('roundBorder');
   divOne.classList.toggle('roundBorder');
   divOne.classList.toggle('roundBorder');
   divOne.classList.remove('red');
   divOne.classList.add('green');



});