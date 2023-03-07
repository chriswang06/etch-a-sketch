createBoxes(16);
hover();
const btn = document.querySelector("button");
btn.addEventListener('click', promptMe);

function promptMe(){
    var myNode = document.querySelector(".container");
    while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }
  let x = prompt("Please type how many squares in one direction you want");

  parseInt(x);
  createBoxes(x);
  hover();
}
function createBoxes(numberPerRow) {
    var cdiv = document.querySelector('.container');
    var total = (Math.pow(numberPerRow,2) + parseInt(numberPerRow));
    var mod = (parseInt(numberPerRow) + 1);
  
    for (let i = 1; i < total; i++) {
      const div = document.createElement('div');
      div.setAttribute('class', 'box');
  
      if (i % mod === 0) {
        div.style.cssText = "border: 0; height: 0; width: 100%";
      } else {
        div.style.cssText = "border: 1px solid black; height: 25px; width: 25px";
      }
  
      cdiv.appendChild(div);
    }
}


function hover(){
    var divs = document.querySelectorAll('.box');

  divs.forEach((div) =>{

    div.addEventListener('mouseenter', function(e){
        console.log("hovering");
        div.classList.add("hovering");

});
});
}
 
