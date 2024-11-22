document.addEventListener('DOMContentLoaded', () => {
  const gokuImage = document.getElementById('goku-image');
  const transformButton = document.getElementById('transform-btn');
  const body = document.body;

  transformButton.addEventListener('click', () => {
    // Check the current image source to decide which transformation to apply
    if (gokuImage.src.includes('goku normal (1).png')) {
      // Change the Goku image to the God form
      gokuImage.src = '/goku god (1).png';
      
      // Change the background to show the aura effect
      body.style.backgroundImage = "url('/aura.gif')";
    } else {
      // Switch back to the normal Goku image
      gokuImage.src = '/goku normal (1).png';
      
      // Remove the aura background
      body.style.backgroundImage = '';
    }
  });
});
