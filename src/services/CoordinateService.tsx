import api, { Token } from "../api/config";


export class CoordinateService {

    static instance = new CoordinateService()


    static async getCoordinate(params: {
        countryName: string, units: string
    }) {

        let getCountryName = await api.get(`geo/1.0/direct?q=${params.countryName}&limit=1&appid=${Token}`)

        const { lat, lon, name, country } = getCountryName.data[0]

        let getWeatherByCountry = await api.get(`data/2.5/onecall?lat=${lat}&lon=${lon}&units=${params.units}&exclude=minutely,hourly&appid=${Token}`)

        const { current, daily } = getWeatherByCountry.data

        let getAirPollutionByCountry = await api.get(`data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${Token}`)

        const { aqi } = getAirPollutionByCountry.data.list[0].main

        const resultData = { data: { lat, lon, name, country, current, daily, aqi } }

        return resultData
    }

}

export default CoordinateService.instance

