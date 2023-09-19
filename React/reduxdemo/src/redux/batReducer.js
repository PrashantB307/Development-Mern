const initialstate = {
    bats : 50,
}

const BatReducer = (state = initialstate, action) => {
    switch (action.type) {
        case "BUY_BAT" :
            return {...state, bats: state.bats - 1}
        case "SELL_BAT" :
            return {...state, bats: state.bats + 1}
        default :
            return state;    
    }
}

export default BatReducer