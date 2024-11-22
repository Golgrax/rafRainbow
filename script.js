document.addEventListener('DOMContentLoaded', () => {
  const gokuButton = document.getElementById('goku-button');
  const body = document.body;

  gokuButton.addEventListener('click', () => {
    const currentImage = gokuButton.style.backgroundImage;

    if (currentImage.includes('goku normal (1).png')) {
      gokuButton.style.backgroundImage = "url('/goku god (1).png')";
      body.style.backgroundImage = "url('/aura.gif')";
    } else {
      gokuButton.style.backgroundImage = "url('/goku normal (1).png')";
      body.style.backgroundImage = '';
    }
  });
});
