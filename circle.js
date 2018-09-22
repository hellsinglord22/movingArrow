const Arrow = require('./arrow');

window.onload = function () {
  

  const canvas = document.getElementById('canvas')
    canvesContext = canvas.getContext('2d'),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,
    arrowPositionX = width / 2,
    arrowPositionY = height / 2,
    MOUSE_MOVE_EVENT = 'mousemove';
  let radius = 200,
    angle = 0,
    speed = 0.01,
    centerX = arrowPositionX,
    centerY = arrowPositionY;


  const firstArrow = new Arrow({ arrowPositionX, arrowPositionY, canvesContext });
  firstArrow.render();

  const rotateArrowTowardsMousePointer = (mouseEvent) => {

    const { clientX, clientY } = mouseEvent;
    firstArrow.pointTowards({x: clientX, y: clientY});

  };
  addEventListener(MOUSE_MOVE_EVENT, rotateArrowTowardsMousePointer);

  const moveInCircle = () => {


    x = centerX + radius * Math.cos(angle);
    y = centerY + radius * Math.sin(angle);

    angle += speed;
    firstArrow.moveTailTo({x, y});
    
    requestAnimationFrame(moveInCircle);
      
  };
  moveInCircle();





};