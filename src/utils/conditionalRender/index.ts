import { ResponseDefault } from "@utils/response/types"
import { ConditionalRenderPattern } from "./types"

export default function conditionaRender<T>(response: ResponseDefault<T>, data: T | null, lenght?: boolean): ConditionalRenderPattern {

    const LOADING = response.loading
    const ERROR = !LOADING && response.error
    const DATA = !LOADING && !ERROR && !!response.data && !!data && (!!lenght ? (response.data.listaResultados as any).length > 0 && (data as any).length > 0 : true)
    const NODATA = !LOADING && !ERROR && !DATA

    return { LOADING, ERROR, DATA, NODATA }

}