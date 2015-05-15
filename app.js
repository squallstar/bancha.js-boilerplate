var bancha = require('../core.js/index.js');

bancha({
  port: 3000
})
.start(function () {
  console.log('Server started');
});
