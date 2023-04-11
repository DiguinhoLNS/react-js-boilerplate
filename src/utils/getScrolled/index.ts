export default function getScrolled(setScroll: Function){
    const scrollPx = document.documentElement.scrollTop
    const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrolled = scrollPx / winHeightPx * 100

    setScroll(scrolled)
}