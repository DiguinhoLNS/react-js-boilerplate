import React from 'react'
import Icon from '@mdi/react'
import { mdiChevronDoubleLeft, mdiChevronDoubleRight, mdiChevronLeft, mdiChevronRight } from '@mdi/js'
import List from '../list'
import ListLoader from '../loader'
import ListSection from '../section'
import ListMessage from '../message'
import { ListPaginatorProps } from '../types'

const ListPaginator = <P extends unknown>({
    CR,
    loading,
    header,
    data,
    renderItem
}: ListPaginatorProps<P>) => {

    const [currentPage, setCurrentPage] = React.useState(1)
    const [itemsPerPage] = React.useState(10)
    const [pages, setPages] = React.useState(0)

    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = (data ?? []).slice(indexOfFirstItem, indexOfLastItem)

    const SHOW_LOADING = (!!CR ? CR.LOADING : false) || loading
    const SHOW_DATA = !SHOW_LOADING && (!!CR ? CR.DATA : true)

    //const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

    const nextPage = () => {
        if(currentPage < pages) setCurrentPage(currentPage + 1)
    }

    const prevPage = () => {
        if(currentPage > 1) setCurrentPage(currentPage - 1)
    }

    const firstPage = () => {
        if(currentPage > 1) setCurrentPage(1)
    }

    const lastPage = () => {
        if(currentPage < pages) setCurrentPage(pages)
    }

    // const changeItemsPerPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    //     setItemsPerPage(parseInt(e.target.value))
    //     setCurrentPage(1)
    // }

    React.useEffect(() => {
        setPages(Math.ceil((data ?? []).length / itemsPerPage))
    }, [data, itemsPerPage])

    return(

        <div className = "listWrapper">
            <List name = "">
                {!!header && (
                    <ListSection type = "header">
                        {header}
                    </ListSection>
                )}
                <ListSection>
                    {SHOW_LOADING && <ListLoader />}
                    {(!!CR && CR.NODATA) && <ListMessage text = "Nenhum item encontrado!" />}
                    {SHOW_DATA && currentItems.map((item, index) => renderItem(item, index))}
                </ListSection>
            </List>
            {SHOW_DATA && (
                <div className = "listPaginatorFooter">
                    <div className = "listPaginatorFooterLeft listPaginatorSection">
                        <span className = "listPaginatorIndicator">Página {currentPage} de {pages}</span>
                    </div>
                    <div className = "listPaginatorFooterRight listPaginatorSection">
                        <div className = "listPaginatorControls">
                            <button className = "listPaginatorButton" onClick = {firstPage}>
                                <Icon path = {mdiChevronDoubleLeft} size = "24px" />
                            </button>
                            <button className = "listPaginatorButton" onClick = {prevPage}>
                                <Icon path = {mdiChevronLeft} size = "24px" />
                            </button>
                            <button className = "listPaginatorButton" onClick = {nextPage}>
                                <Icon path = {mdiChevronRight} size = "24px" />
                            </button>
                            <button className = "listPaginatorButton" onClick = {lastPage}>
                                <Icon path = {mdiChevronDoubleRight} size = "24px" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>

    )

}

export default ListPaginator