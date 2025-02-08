import React from 'react'
import Cards from '../Catalog/Cards'
import Products from '../Catalog/Products'
import Download from './Download'

export default function Catalog() {
    return (
        <div className='catalog'>
            <Cards />
            <Download/>
        </div>
    )
}
