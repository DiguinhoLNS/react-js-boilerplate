import React from 'react'
import { TabProps } from './types'
import './styles.scss'

const Tab: React.FC <TabProps> = props => {

    const [visibleTab, setVisibleTab] = React.useState(props.index)

    const TabLabels = props.data.map((label, index) => {
        
        return(

            <li 
                key = {index} 
                className = {visibleTab === index ? 'tabLabel active' : 'tabLabel'} 
                onClick = {() => {
                    props.setIndex(index)
                    setVisibleTab(index)
                }}
            >{label.label}</li>

        )

    }) 

    const TabPanels = props.data.map((panel, index) => {

        return(

            <li key = {index} className = {`${visibleTab === index ? "tabPanel active" : "tabPanel"} scroll`}>       
                <div className = "tabPanelContainer"> 
                    {panel.title && <h3 className = "tabPanelTitle">{panel.title}</h3>}
                    {panel.component}
                </div>      
            </li>

        )

    })

    return(

        <div className = "tabContainer">
            <ul className = "tabLabelGroup group" style = {{gridTemplateColumns: `repeat(${props.data.length}, 1fr)`}}>{TabLabels}</ul>
            <ul className = "tabPanelGroup group">{TabPanels}</ul>
        </div>

    )

}

export default Tab