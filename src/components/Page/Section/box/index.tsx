import React, { useState } from 'react'
import { mdiArrowLeft, mdiEyeOffOutline, mdiEyeOutline } from '@mdi/js'
import Icon from '@mdi/react'
import { useNavigate } from 'react-router-dom'
import { SectionBoxProps } from '../types'
import SectionOption from '../option'
import createClassName from '../../../../utils/createClassName'

const SectionBox: React.FC <SectionBoxProps> = ({ children, direction = 'column', goBack, padding = true, title, right, toggleShowContent }) => {

    const [showContent, setShowContent] = useState(true)
    const navigate = useNavigate()

    const sectionBoxContentClasses = createClassName('sectionBoxContent', [!!padding && 'padding', direction])

    return(

        <div className = "sectionBox">
            {(!!title || !!goBack || right) && (
                <div className = "sectionBoxHeader">
                    <div className = "sectionBoxHeaderLeftContent">
                        {!!goBack && (
                            <span className = "sectionBoxHeaderGoBack" onClick = {() => navigate(-1)}>
                                <Icon path = {mdiArrowLeft} size = "24px" />
                            </span>
                        )}
                        {!!title && <h2>{title}</h2>}
                    </div>
                    <div className = "sectionBoxHeaderRightContent">
                        {right}
                        {!!toggleShowContent && (
                            <SectionOption 
                                icon = {showContent ? mdiEyeOutline : mdiEyeOffOutline} 
                                tooltip = {showContent ? 'Ocultar conteúdo' : 'Mostrar conteúdo'}
                                onClick = {() => setShowContent(!showContent)}
                            />
                        )}
                    </div>
                </div>
            )}
            {showContent && <div className = {sectionBoxContentClasses}>{children}</div>}
        </div>

    )

}

export default SectionBox