const initState={
    tableRows:[],
    isSubmit:false,
    loading:false
}
const rootReducer=(state=initState,action)=>{
    switch(action.type){
        case "getTableRows":
            return {...state,tableRows:action.payload}
            case "getLoader":
                return {...state,loading:!state.loading}
                case "setIsSubmit":
                    return {...state,isSubmit:!state.isSubmit}
            default :return state;
            
    }
}
export default rootReducer;