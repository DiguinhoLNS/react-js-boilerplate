export default function numberedArray(lenght: number, initWithZero: boolean | undefined = true){
    return [...Array(lenght).fill(null).map((_, i) => initWithZero ? i : i+1)]
}