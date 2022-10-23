import React from 'react'

function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase()
        return lower.charAt(0).toUpperCase()+word.slice(1)
    }
    // console.log(capitalize())
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show container mt-2`}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)}! </strong>
        {props.alert.msg}
        {/* <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button> */}
      </div>
    )
  );
}

export default Alert