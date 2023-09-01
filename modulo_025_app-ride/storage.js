function createNewRide() {
    const rideId = new Date().getTime();
    const rideRecord = {
        data: [],
        startTime: rideId,
        stopTime: null
    };
    localStorage.setItem(rideId.toString(), JSON.stringify(rideRecord));
    return rideId;
}

function getRideRecord(rideId) {
    const rideRecordStr = localStorage.getItem(rideId);
    if (rideRecordStr) {
        return JSON.parse(rideRecordStr);
    }
    return null; // Retorna null se o registro não existir
}

function addPosition(rideId, position) {
    const rideRecord = getRideRecord(rideId);
    if (rideRecord) {
        // Faça o que precisa ser feito com o registro
        rideRecord.data.push(position);
        // Atualize o registro no Local Storage
        localStorage.setItem(rideId.toString(), JSON.stringify(rideRecord));
    } else {
        console.error('Registro não encontrado.'); // Tratamento para registro inexistente
    }
}
