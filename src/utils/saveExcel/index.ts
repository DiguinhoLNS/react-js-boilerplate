import { utils, writeFile } from 'xlsx'

export default function saveExcel<T>(fileName: string, header: string[], values: T[]){
    const worksheet = utils.json_to_sheet(values, { header })
    const workbook = utils.book_new()

    utils.book_append_sheet(workbook, worksheet, fileName)
    writeFile(workbook, fileName)
}