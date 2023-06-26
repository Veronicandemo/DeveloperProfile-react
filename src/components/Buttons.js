import React, { useState } from 'react'
import { BiPlus, BiMinus, BiCartAlt } from 'react-icons/bi'
const style = {
  color: '#ffa500',
}

const Buttons = () => {
  const [num, setNum] = useState(0)
  const numIncreamentHandler = () => {
    if (!isNaN(+num)) {
      setNum(+num + 1)
    }
  }
  const numDecreamentHandler = () => {
    if (!isNaN(+num) && num > 1) {
      setNum(+num - 1)
    }
  }
  return (
    <div className="buttons">
      <div className="btns">
        <BiMinus style={style} onClick={numDecreamentHandler} />
        <p style={{ fontWeight: '900' }}>{num}</p>
        <BiPlus style={style} onClick={numIncreamentHandler} />
      </div>
      <button className="btn btn-secondary">
        <BiCartAlt />
        Add to cart
      </button>
    </div>
  )
}

export default Buttons
