
function convertTimestamp(timestamp: number) {

    let days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];


    let date = new Date(timestamp * 1000),
        dayOfWeek = date.getDay(),
        abbreviateDayofWeek = days[dayOfWeek]?.substring(0, 3),
        year = date.getFullYear(),
        month = ('0' + (date.getMonth() + 1)).slice(-2),
        day = ('0' + date.getDate()).slice(-2),
        hours = date.getHours(),
        h = hours,
        min = ('0' + date.getMinutes()).slice(-2),
        ampm = 'AM',
        time; console.log()
    if (hours > 12) {
        h = hours - 12;
        ampm = 'PM';
    } else if (hours === 12) {
        h = 12;
        ampm = 'PM';
    } else if (hours === 0) {
        h = 12;
    }


    time = year + '-' + month + '-' + day + ', ' + h + ':' + min + ' ' + ampm;
    return (
        {
            time, dayOfWeek, year, month, day, hours, ampm, days, abbreviateDayofWeek
        }
    )
}

export default convertTimestamp