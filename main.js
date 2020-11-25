console.log('Hello World!');
document.getElementById("hellobutton").onclick = function() {
  var name = document.getElementById('name').value;
  var greeting = document.getElementById('greeting');
  console.log(document.getElementById('greeting').innerHTML);
  greeting.innerHTML = 'Hello ' + name + '!';
};

$(function() {
  $('.hamburger-menu').on('click', function() {
    $(this).toggleClass('hamburger-menu-active')
  })
})
//yaritaikoto
//responsible ni yokotate
//humberger menu
//scroll suru button