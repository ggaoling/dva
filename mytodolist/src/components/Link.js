import React from 'react'
import PropTypes from 'prop-types'


const Link =({active,children,onClick})=>{
    if(active){
        return <span>{children}</span>
    }
    return (
        <a href="" onCLick={e=>{e.preventDefault(), onClick()}}>
            {children}
        </a>
    )
}

Link.propTypes={
    active:PropTypes.bool.isRequired,
    chldren:PropTypes.node.isRequired,
    onClick:PropTypes.func.isRequired
}

export default Link