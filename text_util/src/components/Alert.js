import React from 'react'

export default function Alert(props) {
    const capitalize=(word)=>{
        return word.charAt(0).toUpperCase()+word.slice(1)
        //first letter od sucess type made capita;
    }
  return (
    props.alert && <div>
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>{capitalize(props.alert.type)}</strong>:{props.alert.message}
    <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
    </div>
    </div>
  )
}
