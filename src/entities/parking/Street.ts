class Street {
  static valid(street: string): string {
    const map = new Map();
    map.set('null', false);
    map.set('undefined', false);

    if (typeof street !== 'string' || map.get(street.trim()) === false) {
      throw new TypeError('The property street is undefined');
    }
    return street;
  }
}

export default Street;
