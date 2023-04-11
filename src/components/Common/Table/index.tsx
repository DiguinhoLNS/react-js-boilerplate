import React, { PropsWithChildren } from 'react'

const TableWrapper: React.FC <PropsWithChildren<any>> = ({ children }) => {

    return(

        <div className = "tableWrapper">
            <div className = "tableContainer">{children}</div>
        </div>

    )

}

export default TableWrapper