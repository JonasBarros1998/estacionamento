import Places from './Places';

describe('create valid places', function() {
  test('should return quantity the places', function() {
    expect(Places.valid(123)).toEqual(123);
  });
});

describe('create invalid places', function() {
  test('should to throw TypeError', function() {
    function placeInvalid() {
      const place: any = null;
      Places.valid(place);
    }
    expect(placeInvalid).toThrow('The property number is null typeof object')
  });
});
