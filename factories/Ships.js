class Ships {
  constructor(name, length) {
    this.name = name,
    this.length =length,
    this.numHit = 0,
    this.sunk= false,
    this.orientation= 'vertical',
    this.position= this.initializePosition(this.length)
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
    initializePosition(length) {
      const initialPosArr = new Array(length).fill([null,null])
      return initialPosArr
    }
}

module.exports = Ships;