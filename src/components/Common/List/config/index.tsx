import React from 'react'
import { ListConfigProps } from '../types'
import './styles.scss'
import { handleOmitColumns } from '../scripts'

const ListConfig: React.FC <ListConfigProps> = ({ listConfig, setListConfig }) => {

    const isActive = (column: number) => !listConfig.omitColumns.includes(column)

    return(

        <div className = "listConfigContainer">
            <div className = "listConfigColumnsGroup">
                {listConfig.columns.map((item, index) => (
                    <div key = {index} className = {`listConfigColumnItem ${(isActive(index)) ? 'active' : 'disabled'}`} onClick = {() => handleOmitColumns(listConfig, setListConfig, index)}>
                        {item}
                    </div>
                ))}
            </div>
        </div>

    )

}

export default ListConfig