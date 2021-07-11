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
                {/* Choose box */}
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
                {/* Choose shelter */}
                <div className="aboutShelter">
                    <h2 className="title">O projekte</h2>
                    <span className="scope">

                    </span>
                </div>
                <div className="chooseShelter">
                    <label htmlFor="dogShelter">Útolok</label>
                    <select name="shelterName" id="shelterName" defaultValue="" required="">
                        <option value="" disabled hidden> Vyberte útolok zo zoznamu</option>

                    </select>
                    <span className="arrow"></span>
                </div>
                <h2 className="title">Suma, ktorou chcete prispieť</h2>
                <div className="amountSection">
                    <label>
                        <input type="radio" name="value" value="5" />
                        <span className="chooseBtn">5€</span>
                    </label>
                    <label>
                        <input type="radio" name="value" value="10" />
                        <span className="chooseBtn">10€</span>
                    </label>
                    <label>
                        <input type="radio" name="value" value="20" />
                        <span className="chooseBtn">20€</span>
                    </label>
                    <label>
                        <input type="radio" name="value" value="30" />
                        <span className="chooseBtn">30€</span>
                    </label>
                    <label>
                        <input type="radio" name="value" value="50" />
                        <span className="chooseBtn">50€</span>
                    </label>
                    <label>
                        <input type="radio" name="value" value="100" />
                        <span className="chooseBtn">100€</span>
                    </label>
                    <label>
                        <input type="radio" name="value" id="customInput" />
                        <span className="chooseBtn"><input type="text" name="customValue" /> €</span>
                    </label>
                </div>
                <div className="progress-button">
                    <button>Pokračovať</button>
                </div>
            </form>
        </div>
        
    )
}

