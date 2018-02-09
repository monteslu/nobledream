document.getElementById('btn').addEventListener('click', function( event ) {
  const daydream = require('daydream-node')();

  daydream.onStateChange(function(data){
    console.log(data);
  });

}, false);
