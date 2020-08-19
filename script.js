const learn = bodymovin.loadAnimation({
      container: document.getElementById('lottie-learn'), // Required
      path: 'learn.json', // Required
      renderer: 'svg', // Required
      loop: true, // Optional
      autoplay: true, // Optional
})

console.log(learn);
learn.play();
