const PassengerPlane = require('./Planes/PassengerPlane');
const MilitaryPlane = require('./Planes/MilitaryPlane');
const MilitaryType = require('./models/militaryType');
const experimentalPlane = require('./Planes/experimentalPlane');

class Airport {

    constructor(planes) {
        this.planes = planes;
    }

    getPassengerPlanes() {
        let listOfPassengerPlanes = [];
        for (let p of this.planes) {
            if (p instanceof PassengerPlane) {
                listOfPassengerPlanes.push(p);
            }
        }
        return listOfPassengerPlanes;
    }


    getPassengerPlanesWithMaxPassengersCapacity() {
        let arr = [];
        arr = listOfPassengerPlanes();
        sortByPassengerCapacity(arr);
        return arr[0];
    }


    getMilitaryPlanes(){
        let listOfMilitaryPlanes = [];
        for (let p of this.planes) {
            if (p instanceof MilitaryPlane) {
                listOfMilitaryPlanes.push(p);
            }
        }
        return listOfMilitaryPlanes;
      }


    getTransportMilitaryPlanes(){
        let listOfTransportMilitaryPlanes = [];
        for (let p of this.getMilitaryPlanes()) {
            if (p.MilitaryType == "TYPE_TRANSPORT") {
                listOfTransportMilitaryPlanes.push(p);
            }
        }
        return listOfTransportMilitaryPlanes;
    }


    getBomberMilitaryPlanes(){
        let listOfBomberMilitaryPlanes = [];
        for (let p of this.getMilitaryPlanes()) {
            if (p.MilitaryType == "TYPE_BOMBER") {
                listOfBomberMilitaryPlanes.push(p);
            }
        }
        return listOfBomberMilitaryPlanes;
    }    


    getExperimentalPlanes() {
        let listOfExperimentalPlanes  = [];
        for (let p of this.planes) {
            if (p instanceof experimentalPlane) {
                listOfExperimentalPlanes.push(listOfExperimentalPlanes);
            }
        }
        return listOfExperimentalPlanes;
    }



    sortPlanesByMaxDistance() {
        return planes.sort((a, b) => (a.getMaxFlightDistance() > b.getMaxFlightDistance()) ? 1 : -1);
    }

    
    sortPlanesByMaxSpeed() {
        return planes.sort((a, b) => (a.getPlaneMaxSpeed() > b.getPlaneMaxSpeed()) ? 1 : -1);
    }

    sortByPassengerCapacity() {
        return plane.sort((a, b) => (a.passengersCapacity() < b.passengersCapacity()) ? 1 : -1);
    }    
    
    sortByMaxLoadCapacity() {
        this.planes.sort((a, b) => (a.getMaxLoadCapacity() > b.getMaxLoadCapacity()) ? 1 : -1);
        return this;
    }
    
    getPlanes() {
        return this.planes;
    }


    static print(planes) { 
        return JSON.stringify(planes);
    }
}

module.exports = Airport;
