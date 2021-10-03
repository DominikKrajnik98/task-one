const nameFilterReducer = (state = '', action) =>{
    switch(action.type){
        case 'SET_NAME_FILTER':
            return action.nameFilter
        default:
            return state
    }
}

export default nameFilterReducer