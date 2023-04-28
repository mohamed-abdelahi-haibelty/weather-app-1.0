export const getDays = (list) => {
    const days = list.reduce((acc, current) => {
        const day = current.dt_txt.split(" ")[0]
        if(!acc.includes(day)){
            acc.push(day)
        }
        return acc
    }, [])
    return days
}