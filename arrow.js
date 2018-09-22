
const Arrow = function ({canvescanvesContext, arrowPositionX, arrowPositionY}) {

  if (!canvesContext) {
    throw new ReferenceError('You must provide a canvesContext');
  }
  
  this.angle = 0;
  this.canvescanvesContext = canvescanvesContext;
  this.arrowPositionX = arrowPositionX;
  this.arrowPositionY = arrowPositionY

};


Arrow.prototype.moveTailTo = function({x, y}) {

  arrowPositionX = x;
  arrowPositionY = y;

};


Arrow.prototype.pointTowards = function({x, y}) {

  const opposite = x - arrowPositionX;
  const adjusent = y - arrowPositionY;
  self.angle = Math.atan2(adjusent, opposite);

};


Arrow.prototype.render = function() {

  const self = this;
  canvesContext.clearRect(0, 0, innerWidth, innerHeight);
  canvesContext.save();
  canvesContext.translate(arrowPositionX, arrowPositionY);
  canvesContext.rotate(self.angle);

  canvesContext.beginPath();
  canvesContext.moveTo(20, 0);
  canvesContext.lineTo(-20, 0);
  canvesContext.moveTo(20, 0);
  canvesContext.lineTo(10, 10);
  canvesContext.moveTo(20, 0);
  canvesContext.lineTo(10, -10);
  canvesContext.stroke();

  canvesContext.restore();

  requestAnimationFrame(Arrow.prototype.render);

};


module.exports = Arrow;