import React from 'react'
import './col.css'

const Col: React.FC = ({children}) => {
    return (
        <div className="col-6">
            {children}
        </div>
    )
}
export default Col