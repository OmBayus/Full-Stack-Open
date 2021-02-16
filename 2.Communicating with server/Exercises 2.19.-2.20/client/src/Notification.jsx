import React from "react"

const Notification = ({ message,style }) => {
      if (message === null) {
        return null
      }
    
      return (
        <div className="error" style={{color:style}}>
          {message}
        </div>
      )
}

export default Notification