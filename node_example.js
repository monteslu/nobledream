const daydream = require('daydream-node')();

daydream.onStateChange(function(data){
  console.log(JSON.stringify(data));
})
