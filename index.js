const sectionThree = require('./section-3');

(() => {
  try {
    sectionThree.run();
  
    process.exit(0);
  } catch (err) {
    console.log('Error: ', err);
    process.exit(1);
  }
})()