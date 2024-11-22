const gokuImage = document.getElementById('goku-image');
const body = document.body;

gokuImage.addEventListener('click', () => {
  if (gokuImage.src.includes('goku_normal (1).png')) {
    gokuImage.src = 'goku_god (1).png';
    body.style.backgroundImage = "url('aura.gif')";
  } else {
    gokuImage.src = 'goku_normal (1).png';
    body.style.backgroundImage = '';
  }
});
