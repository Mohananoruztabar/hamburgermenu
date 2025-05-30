const square = document.getElementsByClassName('square')[0]
const squareBottom = document.querySelector('.square-bottom')
let flag = 3;
function mymenu(s) {
    if (flag % 2) {
        s.children[0].style.transform = "rotate(52deg)";
        s.children[1].style.transform = "translate(100px)";
        s.children[2].style.transform = "rotate(-52deg)"
        s.nextElementSibling.style.width = '100%'
        s.nextElementSibling.style.height = '200px'
        s.nextElementSibling.nextElementSibling.children[0].style.transform = 'translate(-50% , 200px)'
        s.nextElementSibling.nextElementSibling.children[1].style.transform = 'translateY(200px)';
        square.style.transform = 'translateY(250px)'
        squareBottom.style.transform = 'translateY(500px)'
    } else {
        s.children[0].style.transform = "rotate(0deg)";
        s.children[1].style.transform = "translate(0px)";
        s.children[2].style.transform = "rotate(0deg)";
         s.nextElementSibling.style.width = '0px'
        s.nextElementSibling.style.height = '0px'
        s.nextElementSibling.nextElementSibling.children[0].style.transform = 'translate(-50% , 0PX)'
        s.nextElementSibling.nextElementSibling.children[1].style.transform = 'translateY(0px)';
        square.style.transform = 'translateY(0px)'
        squareBottom.style.transform = 'translateY(0px)'
    }
    flag++
}