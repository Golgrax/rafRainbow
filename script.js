document.addEventListener('DOMContentLoaded', () => {
  const gokuImage = document.getElementById('goku-image');
  const body = document.body;

  gokuImage.addEventListener('click', () => {
    // Extract the filename from the src URL to make comparison easier
    const currentSrc = gokuImage.src.split('/').pop();

    if (currentSrc === 'goku normal (1).png') {
      gokuImage.src = '/goku god (1).png';
      body.style.backgroundImage = "url('/aura.gif')";
    } else {
      gokuImage.src = '/goku normal (1).png';
      body.style.backgroundImage = '';
    }
  });
});
