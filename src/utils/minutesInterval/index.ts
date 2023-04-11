export default function minutesInterval (n: number){
    const interval = []

    for(let hours = 0; hours < 24; hours++){
        for(let minutes = 0; minutes < 60; minutes = minutes+n){
            let h = '', m = ''

            if(hours < 10) h = '0' + hours
            else h = hours.toString()

            if(minutes < 10) m = '0' + minutes
            else m = minutes.toString()

            interval.push(`${h}:${m}`)
        }
    }
    
    return interval
}