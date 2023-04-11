import storage from "@utils/storage"
import { ListConfig } from "../types"

function createListConfig(name: string, grid: string, columns: string[]): ListConfig {
    return {
        name,
        grid,
        columns,
        omitColumns: getOmitColumns(name)
    }
}

function getOmitColumns(listName: string){
    const omitColumns = storage.getObject<number[]>(listName)

    if(omitColumns && omitColumns.length > 0) return omitColumns
    else return []
}

function setOmitColumns(listName: string, currentColumns: number[], omitColumn: number){
    let newColumns = [...currentColumns]

    if(newColumns.includes(omitColumn)) newColumns = newColumns.filter(column => column !== omitColumn)
    else newColumns.push(omitColumn)

    storage.setObject(listName, newColumns)
    return newColumns
}

function handleOmitColumns(listConfig: ListConfig, setListConfig: (configs: ListConfig) => void, omitColumn: number){
    setListConfig({
        ...listConfig, 
        omitColumns: setOmitColumns(listConfig.name, listConfig.omitColumns, omitColumn)
    })
}

export { createListConfig, getOmitColumns, setOmitColumns, handleOmitColumns }