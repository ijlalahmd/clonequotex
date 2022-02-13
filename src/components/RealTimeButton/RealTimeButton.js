import React from 'react'

export const RealTimeButton = () => {
    const Style =
     {
        color: "black",
        backgroundColor: "white",
        border:"none",
        padding: "10px",
        borderRadius:"50%",
        position:"absolute",
        bottom:"50%",
        right:"10%",
        zIndex:"99"
      };
  return (
    <div>
        <button style={Style}>
            go
        </button>
    </div>
  )
}
