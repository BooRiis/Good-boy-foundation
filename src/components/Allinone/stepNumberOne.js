import React from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'

// assets
import '../../../node_modules/normalize.css/normalize.css'
import '../../assets/css/style.scss'

export function stepNumberOne() {
    return (
        <div>
            <div className="nav">
                <span className="active"></span>
                <span></span>
                <span></span>
            </div>
            <h1>Vyberte možnosť, ako chcete pomôcť</h1>
        </div>
    )
}

