import React, { useState } from 'react'
import { connect } from 'react-redux'

function Ball({ballss,buyBall,sellBall}) {

  const [qty, setQty] = useState(1);
  return (
    <div>
        <h1>Balls : {ballss}</h1>
        <input type='number' value={qty} onChange={ (e) => setQty(e.target.value)} />
        <button onClick={() => buyBall(qty)}>Buy Balls</button>
        <button onClick={sellBall}>Sell Balls</button>
    </div>
  )
}

// Components ko global store se lakr deta h as prps, isko ak state
// milta hai connect method se.
const mapStateToProps = (state) => {
  return {
    ballss : state.ball.balls
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyBall : (qty) => dispatch( {type : "BUY_BALL", payload : qty}),
    sellBall : () => dispatch( {type : "SELL_BALL"})

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Ball);