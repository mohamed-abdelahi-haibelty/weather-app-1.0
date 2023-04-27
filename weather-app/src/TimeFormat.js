//GET NEXT TWELVE HOURS
export const getTime = (start, end, step) => {
    const now = new Date();
    const hoursList = [now]
    for(let i = start; i <= end; i += step ){
            hoursList.push(new Date(now.getTime() + (i * 60 * 60 * 1000)))
    }
    return hoursList
}

// twelve hours format ex : 9 AM
export const getTimeFormat = (hours) => {
    const hoursFormat = hours.map((hour, i) => {
        if( i === 0) return 'now'
        const hourString = hour.toISOString()
        const options = {hour: 'numeric', hour12: true}
        return new Date(hourString).toLocaleDateString(undefined, options).split(',')[1]
        .replaceAll(' ', "")
    })

    return hoursFormat
}