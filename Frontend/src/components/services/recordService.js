import axios from "axios";

const apiEndPoint = "http://localhost:5500/api";
// const apiEndPoint = "https://kisan-mitra-backend.herokuapp.com/api";

// const apiEndPointPredict = "http://localhost:8000/api/predict";
//const apiEndPointPredict = "https://crop-predict1.herokuapp.com/api/predict"
const apiEndPointPredict = "https://crop-recommendation-system.onrender.com/api/predict"

const apiEndPointPredict_F = "https://fertilizer-recommendation-system-hxb5.onrender.com/api/predict"


const apiEndPointPredict_D = "https://localhost:5000/api/disease-predict";

export function schemes() {
    return axios.get(apiEndPoint + '/schemes');
}

export function loans() {
    return axios.get(apiEndPoint + '/loans');
}

export function types() {
    return axios.get(apiEndPoint + '/types');
}

export function farmers() {
    return axios.get(apiEndPoint + '/farmers');
}

export function predict_crop(crop) {
    return (
        axios.post(apiEndPointPredict, {
            Nitrogen: crop.nitrogen,
            Phosphorus: crop.phosphorus,
            Potassium: crop.potassium,
            temperature: crop.temperature,
            humidity: crop.humidity,
            ph: crop.ph,
            rainfal: crop.rainfal
        })
    )

}

export function predict_fertilizer(dataF) {
    return (axios.post(apiEndPointPredict_F, {
        Nitrogen: dataF.nitrogen,
        Phosphorus: dataF.phosphorus,
        Potassium: dataF.potassium,
        Temperature: dataF.temperature,
        Humidity: dataF.humidity,
        Moisture: dataF.moisture,
        Crop_type: dataF.crop_type
    })
    )
}

export function disease_predict(data) {
    return (axios.post(apiEndPointPredict_D, data));
}