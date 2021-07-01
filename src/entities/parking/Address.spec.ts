import Address from './Address';

describe('Add valid address', function() {
  test('should return the address', function() {
    expect(Address.valid('my address')).toEqual(
      expect.stringMatching('my address')
    );
  });
});

describe('Add invalid address', function() {
  test('should to throw Error', function() {
    function invalidAddress() {
      Address.valid('undefined');
    }
    expect(invalidAddress)
    .toThrowError('The property address is invalid');
  });

  test('should to throw TypeError', function() {
    function invalidAddress() {
      const addressNull: any = null;
      Address.valid(addressNull)
    }
    expect(invalidAddress).toThrow('The property address is null')
  });
})
