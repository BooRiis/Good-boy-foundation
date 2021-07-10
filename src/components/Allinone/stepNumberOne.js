import React from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'

// assets
import '../../../node_modules/normalize.css/normalize.css'
import '../../assets/css/stepOne.scss'
import wllt from '../../assets/imgs-icons/wllt.svg'
import paw from '../../assets/imgs-icons/paw.svg'

export function stepNumberOne() {
    return (
        // step dots and title
        <div>
            <div className="nav-dots">
                <span className="active"></span>
                <span></span>
                <span></span>
            </div>
            <h1>Vyberte možnosť, ako chcete pomôcť</h1>
          {/* Form */}
            <form>
                <div className="chooseRadioBox">
                    <label className="optionContainer" >
                        <input type="radio" name="donateDogShelter"  />
                        <div className="typeSection">
                            <span className="icon">
                                <img src={wllt} alt="" />
                            </span>
                            <h2>Chcem finančne prispieť konkrétnemu útulku</h2>
                        </div>
                    </label>
                    <label htmlFor="" className="optionContainer" >
                        <input type="radio" name="donateDogShelter"  />
                        <div className="typeSection right">
                            <span className="icon">
                                <img src={paw} alt="" />
                            </span>
                            <h2>Chcem finančne prispieť celej nadácii</h2>
                        </div>
                    </label>
                </div>
            </form>
        </div>
        
    )
}

