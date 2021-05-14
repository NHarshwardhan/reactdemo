import React from 'react'
import Childfunctional from './ChildFunctional'

export default function Parentfunctional() {
    const data = 'Data from Parent'
    return (
        <div>
             <Childfunctional dataParentToChild={data} />
        </div>
    )
}
