import ResidentialNumber from './ResidentialNumber';

describe('Add valid residential number', function() {
  test('should return the ResidentialNumber', function() {
    expect(ResidentialNumber.valid('67-B')).toEqual(
        expect.stringMatching('67-B'),
    );
  });
});

describe('Add invalid residential number ', function() {
  test('should to throw Error', function() {
    function invalidNumber() {
      ResidentialNumber.valid('undefined');
    }
    expect(invalidNumber)
        .toThrowError('The property number is invalid');
  });

  test('should to throw TypeError', function() {
    function invalidNumber() {
      const numberNull: any = null;
      ResidentialNumber.valid(numberNull);
    }
    expect(invalidNumber).toThrow('The property number is null');
  });
});
