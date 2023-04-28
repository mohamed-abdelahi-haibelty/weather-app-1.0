export const DateFormat = (dates) => {
    const formatedDates = dates.map((date, i) => {
        if (i === 0) return "Today"
        const dateString = new Date(date)
        const currentDay = dateString.toLocaleDateString('en-US', {'weekday': 'long'})
        return currentDay
    })

    return formatedDates
}