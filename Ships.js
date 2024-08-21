function Ships(name, length) {
  return {
    name,
    length,
    numHit: 0,
    sunk: false,
    orientation: 'vertical',    
    position: [
      [2, 1],
      [2, 2],
      [2, 3],
      [2, 4],
      [2, 5],
    ],
    hit(index) {
      if (this.position[index] !== "X") {
        this.position[index] = "X";
        let targetHit = this.numHit + 1;
        return (this.numHit = targetHit);
      }
      return;
    },
    isSunk() {
      if (this.length == this.numHit) return true;

      return false;
    },
  };
}

module.exports = Ships;
