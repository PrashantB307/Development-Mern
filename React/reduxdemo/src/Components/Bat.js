// import React, { useState } from 'react'
import { connect } from 'react-redux'

function Bat(props) {
  console.log(props);
  return (
    <div>
        <h1>Bats : {props.batss}</h1>
        <button onClick={props.buyBat}>Buy Bats</button>
        <button onClick={props.sellBat}>Sell Bats</button>
    </div>
  )
}

// Components ko global store se lakr deta h as prps, isko ak state
// milta hai connect method se.
const mapStateToProps = (state) => {
  return {
    batss : state.bat.bats
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyBat : () => dispatch( {type : "BUY_BAT"}),
    sellBat : () => dispatch( {type : "SELL_BAT"})

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Bat);