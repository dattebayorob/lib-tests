import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom'

interface Props extends RouteComponentProps{
    test?: string
}

const Router: React.FC<Props> = (props)=>{
    const { pathname } = props.location
    console.log(props.test)
    return <div>
        Router test { pathname }
    </div>
}

export default withRouter(Router)
