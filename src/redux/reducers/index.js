import { combineReducers } from "redux";


//import { setAllRegion, setAllState } from "../actions/atmActions";
import {selectedVariant, atmReducer, selectedAtmReducer, selectedDeviceReducer, selectedMediaReducer, selectedCashReducer, selectedVendorReducer, selectedCustodianReducer, selectedAtmMysqlReducer, selectAllBrandReducer, setALLUsers, setAllCustodians, setAllVendors, setAllLogs, setAllBranches, setAllRegionalManager, setAllTicket, selectedUser } from "./atmReducer";
const reducers = combineReducers({
    allAtms: atmReducer,
    atm: selectedAtmReducer,
    devices: selectedDeviceReducer,
    medias: selectedMediaReducer,
    cashs: selectedCashReducer,
    vendors: selectedVendorReducer,
    custodians: selectedCustodianReducer,
    atmMysqls: selectedAtmMysqlReducer,








/*********************************variant***************/
    allbrands: selectAllBrandReducer,
    allvariants: selectedVariant,

















    users: setALLUsers,
    allCustodians: setAllCustodians,
    allVendors: setAllVendors,
    allLogs: setAllLogs,
    allBranches: setAllBranches,
    allRegionalManager: setAllRegionalManager,
    allTicket: setAllTicket,
    selectUser: selectedUser


});

export default reducers;




