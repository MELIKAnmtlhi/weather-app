import { showModal } from "./modal.js";

const BASE_URL =
"http://api.openweathermap.org/data/2.5"
const API_KEY ="608304ad0c96d33287052b016dc3564b";

const getWeatherData = async (type, data) => {
    let url = null;

    switch (type) {
        case "current":
            if (typeof data === "string") {
                url = `${BASE_URL}/weather?q=${data}&appid=${API_KEY}&units=metric`
            }else {
                url = `${BASE_URL}/weather?lat=${data.latitude}&lon=${data.longitude}&appid=${API_KEY}&units=metric`
            }
            break;
        case "forecast":
            if (typeof data === "string") {
                url = `${BASE_URL}/forecast?q=${data}&appid=${API_KEY}&units=metric`
            }else {
                url = `${BASE_URL}/forecast?lat=${data.latitude}&lon=${data.longitude}&appid=${API_KEY}&units=metric`
            }
            break;
        default:
            url = `${BASE_URL}/weather?q=shiraz&APPID=${API_KEY}&units=metric`
            break;
    }
    try {
     const response = await fetch(url);
   const json = await response.json()
   if(+json.cod === 200) {
    return json;
   }else {
   showModal(json.message)
   }
   }catch (error) {
    consol
    showModal("An error occured when fetching data")
   }
};

export default getWeatherData;



// const getCurrentWeatherByName = async (city) => {
//    const url =`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`;
//    const response = await fetch(url);
//    const json = await response.json()
//    return json;
// };

// const getCurrentWeatherByCoordinates = async (lat , lon) => {
//    const url =`${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
//    const response = await fetch(url);
//    const json = await response.json()
//    return json;
// };


// const getForecasetWeatherByName = async (city) => {
//    const url =`${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`;
//    const response = await fetch(url);
//    const json = await response.json()
//    return json;
// };

// const getForecastWeatherByCoordinates = async (lat , lon) => {
//    const url =`${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
//    const response = await fetch(url);
//    const json = await response.json()
//    return json;
// };