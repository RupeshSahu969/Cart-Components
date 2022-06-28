import React from 'react'

function Button({
    onClick,
childrem,
disabled
}){
    return (
        <div>
            <button style={{
                padding:"1rem",
                border:0,
                borderWidth:"bold",
                backgroundColor:"tomato",
                color:"white"
            }}
            disabled={disabled} onClick={onClick}
            >
                {childrem}
            </button>
        </div>
      )
}


 


export default Button