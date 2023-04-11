export function firstLetterToUpperCase(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export function formatCurrency(value: number){
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
}

export function formatLink(link: string){
    if(link.includes('http')) return link.replace('/','')
    return link
}