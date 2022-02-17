import React, { useState } from 'react';
import {Blank, One, Two, Three, Four, Five, Six} from './dots'
const getSection = (dots) => {
    switch(dots) {
        case 0:
            return <Blank />
        case 1:
            return <One />
        case 2:
            return <Two />
        case 3:
            return <Three />
        case 4:
            return <Four />
        case 5:
            return <Five />
        case 6:
            return <Six />
    }
}

export const Domino = ({topHalf, bottomHalf, index, callback}) => {
    const Top = getSection(topHalf);
    const Bottom = getSection(bottomHalf)
    return (
        <div onClick={()=>callback(index)} style={{}}>
            <>
                {Top}
                {Bottom}
            </>
        </div>
    )
}