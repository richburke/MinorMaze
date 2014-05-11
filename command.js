// load the node module
var Ev3 = require ("ev3-nodejs-bt");  
var Ev3_base = Ev3.base;

// make a new robot connect to the bluetooth serial port
var robot = new Ev3_base("/dev/tty.EV3-SerialPort");

// connect to the robot and start the program
robot.connect(function(){  
  robot.start_program(function(ev3){

    // function for writing the motor sequence to the ev3
    var setSpeeds = function(a,b,c,d){
      var output = ev3.getOutputSequence(a,b,c,d);
      ev3.sp.write(output);
    }

    // start motors a, b and c moving
    setSpeeds(10, -25, 100, 0);     
  });
});
