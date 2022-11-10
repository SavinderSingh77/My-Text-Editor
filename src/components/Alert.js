import React from 'react'
export default function Alert(props) {
  const capitilize = (text)=>{
    return text[0].toUpperCase()+text.slice(1).toLowerCase();
  }
  return (
    <div style = {{height:'60px'}}>
    {props.alert && <div className={`alert alert-${props.alert.type}`} role="alert" style = {{background:'#ddffdd'}}>{capitilize(props.alert.type)} : {props.alert.msg}
    </div>}
    </div>

  )
}
