const PassengerPlane = require('./Planes/PassengerPlane');
const MilitaryPlane = require('./Planes/MilitaryPlane');
const MilitaryType = require('./models/militaryType');
const experimentalPlane = require('./Planes/experimentalPlane');

class Airport {

    getPassengerPlane() {
        let listOfPassengerPlanes = [];
        for (let p of this.planes) {
            if (p instanceof PassengerPlane) {
                listOfPassengerPlanes.push(p);
            }
        }
        return listOfPassengerPlanes;
    }


    getPassengerPlaneWithMaxPassengersCapacity() {
        sortByPassengerCapacity(listOfPassengerPlanes);
        return listOfPassengerPlanes[0];
    }


    getMilitaryPlanes(){
        let listOfMilitaryPlanes = [];
        for (let p of this.planes) {
            if (p instanceof MilitaryPlane) {
                militaryPlanes.push(plane);
            }
        }
        return listOfMilitaryPlanes;
      }


    getTransportMilitaryPlanes(){
        let listOfTransportMilitaryPlanes = [];
        for (let p of this.getMilitaryPlanes()) {
            if (p.MilitaryType == TYPE_TRANSPORT) {
                listOfTransportMilitaryPlanes.push(p);
            }
        }
        return listOfTransportMilitaryPlanes;
    }


    getBomberMilitaryPlanes(){
        let listOfBomberMilitaryPlanes = [];
        for (let p of this.getMilitaryPlanes()) {
            if (p.MilitaryType == TYPE_BOMBER) {
                listOfBomberMilitaryPlanes.push(p);
            }
        }
        return listOfBomberMilitaryPlanes;
    }    


    constructor(planes) {///////////////???????????????????????????
        this.planes = planes;
    }


    getExperimentalPlanes() {
        let listOfExperimentalPlanes  = [];
        for (let p of this.planes) {
            if (p instanceof experimentalPlane) {
                listOfExperimentalPlanes.push(plane);
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

    sortByPassengerCapacity(arr) {
        return plane.sort((a, b) => (a.passengersCapacity() < b.passengersCapacity()) ? 1 : -1);
    }    
    
    
    getPlanes() {
        return this.planes;
    }


    static print(planes) {         ///////////////// static ???????????????????
        return JSON.stringify(planes);
    }
}

module.exports = Airport;
