export const getDays = (list) => {
    const days = list.reduce((acc, current) => {
        const day = current.dt_txt.split(" ")[0]

        if(!acc[0].includes(day)){
            acc[0].push(day)
            let icon = current.weather[0].icon.substring(0, 2)
            acc[1].push(icon)
            let minmaxTemp = {min: current.main.temp_min, max: current.main.temp_max}
            acc[2].push(minmaxTemp)
        }

        return acc
    }, [[],[],[]])
    return days
}