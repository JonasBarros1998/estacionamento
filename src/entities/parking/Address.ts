class Address {
  static valid(address: string): string {
    if(typeof address !== 'string'){
      throw new Error(`The property address is ${address}`);
    }

    const map = new Map();
    map.set('', false);
    map.set('undefined', false);
    map.set('null', false);
    
    if(map.get(address) === false) {
      throw new Error(`The property address is invalid`);
    }
    return address;
  }
}

export default Address