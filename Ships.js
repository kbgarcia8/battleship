class Ships {
  constructor(name, length) {
    this.name = name,
    this.length =length,
    this.numHit = 0,
    this.sunk= false,
    this.orientation= 'vertical',
    this.position= [
      [2, 1],
      [2, 2],
      [2, 3],
      [2, 4],
      [2, 5],
    ]
  }
    hit(index) {
      if (this.position[index] !== "X") {
        this.position[index] = "X";
        let targetHit = this.numHit + 1;
        return (this.numHit = targetHit);
      }
      return;
    }
    isSunk() {
      if (this.length == this.numHit) return true;

      return false;
    }
}

module.exports = Ships;