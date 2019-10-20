import React from 'react'

interface RowProps extends React.HTMLAttributes<HTMLDivElement>{
    children?: React.ReactNode;
}

const Row: React.FC<RowProps> = ({children}) => {
    return <div className="row">{children}</div>
}

export default Row