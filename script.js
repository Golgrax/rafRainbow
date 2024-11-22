document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;

  // Set initial background image to the normal Goku image
  body.style.backgroundImage = "url('/goku normal (1).png')";

  // Listen for clicks on the body
  body.addEventListener('click', () => {
    const currentBackground = body.style.backgroundImage;

    // If the current background is the normal Goku image, change it to the God form
    if (currentBackground.includes('goku normal (1).png')) {
      body.style.backgroundImage = "url('/goku god (1).png')";
      body.style.backgroundSize = 'cover'; // ensure the image fits
      body.style.backgroundPosition = 'center'; // center the image
      body.style.transition = 'background 0.5s ease-in-out'; // smooth transition
      body.style.backgroundRepeat = 'no-repeat'; // avoid repeating the image
    } else {
      // Otherwise, switch back to the normal form and remove aura effect
      body.style.backgroundImage = "url('/goku normal (1).png')";
      body.style.background = ''; // Clears the aura animation background
    }
  });
});
