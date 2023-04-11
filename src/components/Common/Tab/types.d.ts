export type TabData = {
    label: string
    title?: string
    component: JSX.Element
}

export type TabProps = {
    index: Number
    setIndex: Function
    data: TabData[]
}