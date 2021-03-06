import Wheel from "../src/Wheel.js";
import chai from 'chai'
import data from "../src/data.js"
import spies from 'chai-spies';
chai.use(spies);
const expect = chai.expect;


describe('Wheel', () => {
  let wheel;
  beforeEach(() => {
    wheel = new Wheel();
  });
  it('should be an instance of Wheel', () => {
    expect(wheel).to.be.an.instanceof(Wheel);
  });

  it('should have default properties', () => {
    expect(wheel.values).to.deep.equal(data.wheel);
    expect(wheel.currentSpin).to.equal(null);
    expect(wheel.currentIndex).to.equal(null);

  });

});

// new turn 

// player score

