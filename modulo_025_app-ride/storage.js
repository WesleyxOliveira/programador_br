function createNewRide() {
    const rideId = Date.now();
    const rideRecord = {
        data:[],
        startTime: rideId,
        stopTime: null
    }
    localStorage.setItem(rideId.toString(), JSON.stringify(rideRecord));
    return rideId;
}

// function getRideRecord(rideId) {
//     return JSON.parse(localStorage.getItem(rideId));
// }

function getRideRecord(rideId) {
    const rideData = localStorage.getItem(rideId);
    if (rideData === null) {
        // Tratar o caso em que não há nenhum dado armazenado com a chave rideId
        return null; // ou lançar uma exceção, dependendo da lógica desejada
    }
    return JSON.parse(rideData);
}

function saveRideRecord(rideId, rideRecord) {
    localStorage.setItem(rideId, JSON.stringify(rideRecord));
}

function addPosition(rideId, position) {
    const rideRecord = getRideRecord(rideId);

    const newData = {
        accuracy: position.coords.accuracy,
        altitude: position.coords.altitude,
        altitudeAccuracy: position.coords.altitudeAccuracy,
        heading: position.coords.heading,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        speed: position.coords.speed,
        timestamp: position.timestamp
    }
    rideRecord.data.push(newData);
    saveRideRecord(rideId, rideRecord)
}