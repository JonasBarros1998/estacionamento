import Street from './Street';

describe('Create street valid', function() {
  test('should return name street', function() {
    const nameStreet = 'Nome da minha rua';
    const street = Street.valid(nameStreet);
    expect(street).toEqual(nameStreet);
  });
});

describe('Create invalid name street', function() {
  test('shoud to throw TypeError', function() {
    const nameStreet = 'null';
    function streetUndefined() {
      Street.valid(nameStreet);
    }
    expect(streetUndefined)
        .toThrow('The property street is undefined');
  });

  test('should to thow TypeError, if send street null', function() {
    const nameStreet = 'undefined';
    function streetNull() {
      Street.valid(nameStreet);
    }
    expect(streetNull).toThrow('The property street is undefined');
  });

  test('should to throw TypeError, if send street typeoef diferent string', function() {
    const nameStreet:any = undefined;
    function street() {
      Street.valid(nameStreet);
    }
    expect(street).toThrow('The property street is undefined')
  })
});

