
const GetAirQuality = (index: number) => {

    let QualitativeName = ["Good", "Fair", "Moderate", "Poor", "Very Poor"]

    return QualitativeName[index-1];
    
}
export default GetAirQuality