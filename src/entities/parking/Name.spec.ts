/* eslint-disable require-jsdoc */
import Name from './Name';

describe('Add valid name', function() {
  test('should return name the parking', function() {
    const name = Name.validar('Center City');
    expect(name).toEqual('Center City');
  });
});

describe('Add invalid name', function() {
  test('If is invalid name, should throw TypeError, ', function() {
    function invalidName() {
      Name.validar('null');
    }
    expect(invalidName).toThrow('Invalid property Name');
  });

  test('If name is undefined, should throw TypeError', function() {
    function invalidName() {
      Name.validar('undefined');
    }
    expect(invalidName).toThrow('Invalid property Name');
  });
});
