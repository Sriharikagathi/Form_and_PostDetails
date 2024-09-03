import React, { useState } from 'react'

function Model({onClickHandler}) {

  return (

    <div>
        <h3>Company: Geeksynergy Technologies Pvt Ltd</h3>
        <h3>Address: Sanjayanagar, Bengaluru-56</h3>
        <h3>Phone: XXXXXXXXX09</h3>
        <h3>Email: XXXXXX@gmail.com</h3>
        <button onClick={onClickHandler}>Close</button>
    </div>
  )
}

export default Model