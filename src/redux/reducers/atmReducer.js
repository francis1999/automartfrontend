import { ActionTypes } from "../constants/action-types";

const initialState = {
    atms: [],

}

const mysqlInitialState = {
    mysqlAtm: [],
}
const singleBranchState = {
    SingleBranch: [],
}


const variantState = {
    variants: [],
}











const BrandState = {
    brands: [],
}










const usersState = {
    users: [],
}
const custodianState = {
    allCustodians: [],
}
const vendorState = {
    allVendors: [],
}
const logState = {
    allLogs: []
}
const branchesState = {
    allBranches: []
}
const RegionalManagerState = {
    allRegionalManager: []
}
const TicketState = {
    allTicket: []
}
const SelectedUserState = {
    selectUser: []
}



export const atmReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_ATMS:
            return { ...state, atms: payload }

        default:
            return state
    }
}

export const selectedAtmReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_ATM:
            return { ...state, ...payload };
        default:
            return state;
    }
}

export const selectedDeviceReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_DEVICE:

            return { ...state, ...payload };

        default:
            return state;
    }
}
export const selectedMediaReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_MEDIA:

            return { ...state, ...payload };

        default:
            return state;
    }
}

export const selectedCashReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_CASH:

            return { ...state, ...payload };

        default:
            return state;
    }
}

export const selectedVendorReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_VENDOR:

            return { ...state, ...payload };

        default:
            return state;
    }
}

export const selectedCustodianReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_CUSTODIAN:

            return { ...state, ...payload };

        default:
            return state;
    }
}

export const selectedAtmMysqlReducer = (state = mysqlInitialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_ATM_MYSQL:

            return { ...state, mysqlAtm: payload };

        default:
            return state;
    }
}

export const selectAllRegionReducer = (state = RegionState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_ALL_REGION:

            return { ...state, regions: payload };

        default:
            return state;
    }
}

export const setALLUsers = (state = usersState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_ALL_USERS:

            return { ...state, users: payload };

        default:
            return state;
    }
}

export const setAllCustodians = (state = custodianState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_ALL_CUSTODIANS:

            return { ...state, allCustodians: payload };

        default:
            return state;
    }
}

export const setAllVendors = (state = vendorState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_ALL_VENDORS:

            return { ...state, allVendors: payload };

        default:
            return state;
    }
}

export const setAllLogs = (state = logState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_ALL_LOGS:

            return { ...state, allLogs: payload };

        default:
            return state;
    }
}

export const setAllBranches = (state = branchesState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_ALL_BRANCHES:

            return { ...state, allBranches: payload };

        default:
            return state;
    }
}

export const setAllRegionalManager = (state = RegionalManagerState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_ALL_REGIONALMANAGER:

            return { ...state, allRegionalManager: payload };

        default:
            return state;
    }
}
export const setAllTicket = (state = TicketState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_ALL_TICKET:

            return { ...state, allTicket: payload };

        default:
            return state;
    }
}

export const selectedUser = (state = SelectedUserState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_SELECTED_USER:

            return { ...state, selectUser: payload };

        default:
            return state;
    }
}





/***************************************variant***************/
export const selectedVariant = (state = variantState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_ALL_VARIANTS:

            return { ...state, variants: payload };

        default:
            return state;
    }
}






