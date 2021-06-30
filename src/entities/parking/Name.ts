class Name {
  constructor() {}

  static validar(name: string): string {
    const map = new Map();
    map.set('undefined', false);
    map.set('null', false);
    map.set('', false);
    if (typeof name !== 'string' || map.get(name.trim()) === false) {
      throw new TypeError(`Invalid property Name`);
    }
    return name;
  }
}

export default Name;
