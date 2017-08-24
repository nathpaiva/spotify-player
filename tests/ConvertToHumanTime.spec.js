import { expect } from 'chai';
import convertToHumanTIme from '../src/ConvertToHumanTime';

describe('ConvertToHumanTIme', () => {
  it('should be an object', () => {
    expect(convertToHumanTIme).to.be.an.object;
  });

  it('should recive 0ms and convert to 0:00', () => {
    expect(convertToHumanTIme(0)).to.be.equal('0:00');
  });

  it('should recive 1000ms and convert to 0:00', () => {
    expect(convertToHumanTIme(1000)).to.be.equal('0:01');
  });

  it('should recive 11000ms and convert to 0:00', () => {
    expect(convertToHumanTIme(11000)).to.be.equal('0:11');
  });

  it('should recive 60000ms and convert to 0:00', () => {
    expect(convertToHumanTIme(60000)).to.be.equal('1:00');
  });
});
