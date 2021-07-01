class Places {
  static valid(quantity: number): number {
    if (typeof quantity !== 'number') {
      throw new TypeError(`The property number is ${quantity} typeof ${typeof quantity}`);
    }
    return quantity;
  }
}

export default Places;
