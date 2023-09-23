// Ride.js

class Ride {
    constructor(name, waitTime) {
      this.name = name;
      this.waitTime = waitTime;
      this.isRideRunning = true; // Rename to isRideRunning
      this.breakdownTimer = 0;
    }
  
    getWaitTime() {
      if (this.isRideRunning) {
        return this.waitTime;
      } else {
        return this.waitTime + this.breakdownTimer;
      }
    }
  
    setWaitTime(waitTime) {
      this.waitTime = waitTime;
    }
  
    isRunning() { // Change the function name to isRunning
      return this.isRideRunning;
    }
  
    setToRunning() {
      this.isRideRunning = true;
      this.breakdownTimer = 0;
    }
  
    setToNotRunning() {
      this.isRideRunning = false;
    }
  
    determineRunning(runningOdds) {
      if (runningOdds > 50) {
        this.isRideRunning = false;
        // Simulate repair time between 10 to 30 minutes
        this.breakdownTimer = Math.floor(Math.random() * 21) + 10;
      }
    }
  
    getName() {
      return this.name;
    }
  }
  
  export default Ride;
  