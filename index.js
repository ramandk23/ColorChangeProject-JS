// Import stylesheets
import './style.css';

// Write Javascript code!
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (btn) {
  console.log(btn);
  btn.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    switch (e.target.id) {
      case 'grey':
      case 'blue':
      case 'yellow':
      case 'white':
        body.style.backgroundColor = e.target.id;
        break;
    }
  });
});
