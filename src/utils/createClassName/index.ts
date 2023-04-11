export default function createClassName(classes: string[] | string, validationClasses?: (string | false | undefined)[]){
    let newClasses: string[] = [typeof classes === 'string' ? classes : [...classes].join(' ')]
    if(validationClasses) addClass(newClasses, validationClasses)
    return newClasses.filter(text => text).join(' ')
}

function addClass(classes: string[], validationClasses: (string | false | undefined)[]){
    validationClasses.forEach(validationClass => {
        if(validationClass) classes.push(validationClass)
    })
}