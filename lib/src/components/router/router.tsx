import React from 'react';
import { useLocation } from 'react-router-dom'

interface Props{
    test?: string
}

const Router: React.FC<Props> = (props)=>{
    const { pathname } = useLocation()
    console.log(props.test)
    return <div>
        Router test { pathname }
    </div>
}

export default Router
