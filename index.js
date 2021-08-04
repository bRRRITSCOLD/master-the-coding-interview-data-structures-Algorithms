const sectionThree = require('./section-3');
const sectionFour = require('./section-4');
const sectionSix = require('./section-6');
const sectionSeven = require('./section-7');
const sectionEight = require('./section-8');
const sectionNine = require('./section-9');
const sectionTen = require('./section-10');
const sectionEleven = require('./section-11');
const sectionTwelve = require('./section-12');


(() => {
  try {
    sectionThree.run();
    sectionFour.run();
    sectionSix.run();
    sectionSeven.run();
    sectionEight.run();
    sectionNine.run();
    sectionTen.run();
    sectionEleven.run();
    sectionTwelve.run();

    process.exit(0);
  } catch (err) {
    console.log('Error: ', err);
    process.exit(1);
  }
})()