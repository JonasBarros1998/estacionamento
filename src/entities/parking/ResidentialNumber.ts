class ResidentialNumber {
  static valid(number: string) {
    if (typeof number !== 'string') {
      throw new Error(`The property number is ${number}`);
    }
    const map = new Map();
    map.set('', false);
    map.set('undefined', false);
    map.set('null', false);
    if (map.get(number) === false) {
      throw new Error(`The property number is invalid`);
    }
    return number;
  }
}

export default ResidentialNumber;
