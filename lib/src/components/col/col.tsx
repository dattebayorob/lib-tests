import React from 'react'

const Col: React.FC = ({children}) => {
    return (
        <div className="col-6">
            {children}
        </div>
    )
}
export default Col