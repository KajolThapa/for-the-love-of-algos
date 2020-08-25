//Design an elevator system
​
class Elevator {
​
    constructor(floors,currentFloor, manager) {
      this.currentFloor = 0
      this.floors = 10
      this.manager = manager
    }
   
    //if current floor then completePickup(manager)
    
    insideReq(floorReq) {
      for(let i=0 ; this.floors.length <= 10 ; i++){
        if(this.currentfloor === floorReq){
          this.manager.completePickup(floorReq)
        } else {
          this.manager.requestPickup(floorReq)
        }
      }
    }
}
​
class Manager {
  
  constructor() { 
   this.pickupArr = []
  }
  
  requestPickup(pickup){
    this.pickupArr.push(pickup)
  }
​
  pendingPickups() {
   
   if(this.pickupArr.length === 0){
    return "No Pickups"
   } 
​
  console.log(this.pickupArr)
}
​
 completePickup(pickupRemove){
  for(let i=0 ; i < this.pickupArr.length; i++){
    if(this.pickupArr[i] === pickupRemove){
      this.pickupArr.splice(this.pickupArr.indexOf(pickupRemove), 1)
    }
  }
 }
​
}
   
let mgr = new Manager() 
​
// array of elevators 
// elevator update the manager on their status 
​
let elevator1 = new Elevator(10, mgr)
let elevator2 = new Elevator(10, mgr)
mgr.requestPickup(5) // Person on Floor 5, wants to request Floor 10
mgr.requestPickup(3)
mgr.requestPickup(2)
mgr.pendingPickups() // should print something containing 5, 3, and 2
mgr.completePickup(3)
mgr.pendingPickups() // should print something containing 5 and 2