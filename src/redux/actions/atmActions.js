//import { ActionTypes } from "./constants/action-types";
import { ActionTypes } from "../constants/action-types";

export const setAtms = (atms) => {
    return {
        type: ActionTypes.SET_ATMS,
        payload: atms,
    }
}
export const selectedAtm = (atm) => {
    return {
        type: ActionTypes.SELECTED_ATM,
        payload: atm,
    }
}
export const selectedDevice = (devices) => {
    return {
        type: ActionTypes.SELECTED_DEVICE,
        payload: devices,
    }
}

export const selectedMedia = (medias) => {
    return {
        type: ActionTypes.SELECTED_MEDIA,
        payload: medias,
    }
}

export const selectedCash = (cashs) => {
    return {
        type: ActionTypes.SELECTED_CASH,
        payload: cashs,
    }
}
export const selectedVendor = (vendors) => {
    return {
        type: ActionTypes.SELECTED_VENDOR,
        payload: vendors,
    }
}

export const selectedCustodian = (custodians) => {
    return {
        type: ActionTypes.SELECTED_CUSTODIAN,
        payload: custodians,
    }
}

export const selectedAtmMysql = (atmMysqls) => {
    return {
        type: ActionTypes.SELECTED_ATM_MYSQL,
        payload: atmMysqls,
    }
}

export const setAllState = (allstates) => {
    return {
        type: ActionTypes.SET_ALL_STATE,
        payload: allstates
    }
}





/*--------------Select Branch ------------------*/

export const selectedBrands = (brands) => {
    return {
        type: ActionTypes.SET_ALL_BRAND,
        payload: brands
    }
}

/*--------------Select Branch ------------------*/















/******************************variant*******************/
export const setALLVariants = (variants) => {
    return {
        type: ActionTypes.SET_ALL_VARIANTS,
        payload: variants
    }
}

/******************************variant*******************/







export const setAllCustodians = (allCustodians) => {
    return {
        type: ActionTypes.SET_ALL_CUSTODIANS,
        payload: allCustodians
    }
}
export const setAllVendors = (allVendors) => {
    return {
        type: ActionTypes.SET_ALL_VENDORS,
        payload: allVendors
    }
}
export const setAllLogs = (allLogs) => {
    return {
        type: ActionTypes.SET_ALL_LOGS,
        payload: allLogs
    }
}
export const setAllBranches = (allBranches) => {
    return {
        type: ActionTypes.SET_ALL_BRANCHES,
        payload: allBranches
    }
}
export const countAtm = (atmCount) => {
    return {
        type: ActionTypes.COUNT_ATM,
        payload: atmCount
    }
}

export const setAllRegionalManager = (allRegionalManager) => {
    return {
        type: ActionTypes.SET_ALL_REGIONALMANAGER,
        payload: allRegionalManager
    }
}
export const setAllTicket = (allTicket) => {
    return {
        type: ActionTypes.SET_ALL_TICKET,
        payload: allTicket
    }
}
export const selectedUser = (selectUser) => {
    return {
        type: ActionTypes.SET_SELECTED_USER,
        payload: selectUser
    }
}






