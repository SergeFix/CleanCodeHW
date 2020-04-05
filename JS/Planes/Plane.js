class Plane {

    constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity) {
        this.model = model;
        this.maxSpeed = maxSpeed;
        this.maxFlightDistance = maxFlightDistance;
        this.maxLoadCapacity = maxLoadCapacity;
    }

    getModel() {
        return this.model;
    }

    getPlaneMaxSpeed() {
        return this.maxSpeed;
    }

    getMaxFlightDistance() {
        return this.maxFlightDistance;
    }

}

module.exports = Plane;
