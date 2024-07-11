import React from 'react'
import './Loader.css'
export default function loader() {
    return (
        <div className='loader-container'>
            <svg className='svg' viewBox="25 25 50 50">
                <circle r="20" cy="50" cx="50"></circle>
            </svg>
        </div>
    )
}
