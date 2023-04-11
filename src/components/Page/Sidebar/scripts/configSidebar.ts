import { DispatchType } from "@redux/interfaces"
import { SidebarSection } from "@modules/app/interfaces/Sidebar"
import { setSidebarSections } from "@modules/app/reducers/appReducer"
import { notShowRoutesKeys, routes } from "@routes/routes"
import storage from "@utils/storage"

export default function configSidebar(dispatch: DispatchType){
    const localSidebarSections = storage.getObject<SidebarSection>('sidebarSections')
    if(localSidebarSections){
        const allRoutesKeys = routes.filter(f => !notShowRoutesKeys.includes(f.key)).map(i => i.key)
        const missingRoutesKeys = allRoutesKeys.filter(f => !Object.keys(localSidebarSections).includes(f))

        if(missingRoutesKeys.length > 0) missingRoutesKeys.forEach(key => localSidebarSections[key] = false)

        dispatch(setSidebarSections(localSidebarSections))
    }
}