const sectionThree = require('./section-3');
const sectionFour = require('./section-4');
const sectionSix = require('./section-6');
const sectionSeven = require('./section-7');


(() => {
  try {
    sectionThree.run();
    sectionFour.run();
    sectionSix.run();
    sectionSeven.run();
  
    process.exit(0);
  } catch (err) {
    console.log('Error: ', err);
    process.exit(1);
  }
})()