import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSupportType, setValue, chooseShelter, setShelterID  } from '../../features/formSlice'
import axios from 'axios'

// assets
import '../../../node_modules/normalize.css/normalize.css'
import '../../assets/css/stepOne.scss'
import Wallet from '../../assets/imgs-icons/wllt.svg'
import WalletW from '../../assets/imgs-icons/wllt-w.svg'
import Paw from '../../assets/imgs-icons/paw.svg'
import PawW from '../../assets/imgs-icons/paw-w.svg'

// Validation 
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = Yup.object().shape({
    value: Yup.string().min(1, "Minimálna čiastka je 1€!").required("Je potrebné vybrať čiastku!")
})

const schema_req = Yup.object().shape({
    value: Yup.string().min(1, "Minimálna čiastka je 1€!").required("Je potrebné vybrať čiastku!"),
    shelterName: Yup.string().required("Je potrebné vybrať útolok!")
})

export function StepNumberOne() {

    const [users, setUsers] = useState([])

    // pulling list of shelters
    useEffect(() => {
        axios("https://frontend-assignment-api.goodrequest.com/api/v1/shelters").then((response) => {
            setUsers(response.data.shelters)
        })
    }, [])

    //getting shelters
    const dispatch = useDispatch()
    const history = useHistory()

    //Form data
    const donateDogShelter = useSelector(state => state.donateDogShelter)
    const shelterName = useSelector(state => state.shelterName)
    const value = useSelector(state => state.value)
    const { register, handleSubmit, formState: {errors, isValid } } = useForm({
        defaultValues: {donateDogShelter, shelterName, value},
        resolver: donateDogShelter ? yupResolver(schema_req) : yupResolver(schema),
        mode: "onChange"
    })

    //custom amount option click (checked)
    const handleLabelClick = (e) => {
        let customAmountRadio = document.getElementById('customInput')
        customAmountRadio.checked = true
    };

    // if value changed then get value from text field and set that value in radio button
    const handleInputChange = e => {
        document.getElementById('customInput').value = e.target.value
        document.getElementById('customInput').checked = true
    }

    //you can choose your own shelter
    const handleChange = (e) => {
        const markedIndex = e.target.options.selectedIndex;
        dispatch(setShelterID(e.target.options[markedIndex].getAttribute('data-key')))
    }

    const onSubmit = (data) => {
        let customValue = document.getElementById('customInput').value

        dispatch(chooseShelter(data.shelterName))
        if (customValue !== "on") dispatch(setValue(customValue))
        else dispatch(setValue(data.value))

        history.push("./step-two")
    }

    //changing options wallet/paw
    const transitionWallet = () => {
        let icon = document.getElementById('wallet');
        (icon.src === "http://localhost:3000" + WalletW && !donateDogShelter) ? icon.src = "http://localhost:3000" + Wallet : icon.src = "http://localhost:3000" + WalletW
    }

    const transitionPaw = () => {
        let icon = document.getElementById('paw');
        (icon.src === "http://localhost:3000" + PawW && donateDogShelter) ? icon.src = "http://localhost:3000" + Paw : icon.src = "http://localhost:3000" + PawW
    }


    return (
        // step dots and title
        <div>
            <div className="nav-dots">
                <span className="active"></span>
                <span></span>
                <span></span>
            </div>
            <h1>Vyberte si možnosť, ako chcete pomôcť</h1>
          {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Choose box */}
                <div className="chooseRadioBox">
                    <label className="optionContainer" onMouseEnter={transitionWallet} onMouseLeave={transitionWallet} >
                        <input type="radio" name="donateDogShelter" onChange={() => dispatch(toggleSupportType()) } />
                        <div className="typeSection">
                            <span className="icon">
                                {(donateDogShelter) ? <img src={WalletW} alt='white wallet icon' id="wallet" /> : <img src={Wallet} alt='wallet icon' id="wallet" /> }
                            </span>
                            <h2>Chcem finančne prispieť konkrétnemu útulku</h2>
                        </div>
                    </label>
                    <label className="optionContainer" onMouseEnter={transitionPaw} onMouseLeave={transitionPaw} >
                        <input type="radio" name="donateDogShelter" onChange={() => dispatch(toggleSupportType())} defaultChecked />
                        <div className="typeSection right">
                            <span className="icon">
                            {(donateDogShelter) ? <img src={Paw} alt="paw icon" id="paw" /> : <img src={PawW} alt="white paw icon" id="paw" />}
                            </span>
                            <h2>Chcem finančne prispieť celej nadácii</h2>
                        </div>
                    </label>
                </div>
                {/* Choose shelter */}
                <div className="aboutShelter">
                    <h2 className="title">O projekte</h2>
                    <span className="scope">
                        {donateDogShelter ? "Povinné" : "Nepovinné"}
                    </span>
                </div>
                <div className="chooseShelter">
                    <label htmlFor="dogShelter">Útolok</label>
                    <select name="shelterName" id="shelterName" defaultValue="" required={donateDogShelter} {...register('shelterName')} onChange={ (e) => handleChange(e)}>
                        <option value="" disabled hidden> Vyberte útolok zo zoznamu</option>
                            {users.map((user) => <option value={user.name} key={user.id} data-key={user.id}> {user.name} </option> )}
                    </select>
                    <span className="arrow"></span>
                    {errors.dogShelter && ( <span className="error-message"> {errors.dogShelter.message} </span> )}
                </div>
                <h2 className="title">Suma, ktorou chcete prispieť</h2>
                <div className="amountSection">
                    <label>
                        <input type="radio" name="value" value="5" {...register('value')} />
                        <span className="chooseBtn">5€</span>
                    </label>
                    <label>
                        <input type="radio" name="value" value="10" {...register('value')}/>
                        <span className="chooseBtn">10€</span>
                    </label>
                    <label>
                        <input type="radio" name="value" value="20" {...register('value')}/>
                        <span className="chooseBtn">20€</span>
                    </label>
                    <label>
                        <input type="radio" name="value" value="30" {...register('value')}/>
                        <span className="chooseBtn">30€</span>
                    </label>
                    <label>
                        <input type="radio" name="value" value="50" {...register('value')}/>
                        <span className="chooseBtn">50€</span>
                    </label>
                    <label>
                        <input type="radio" name="value" value="100" {...register('value')}/>
                        <span className="chooseBtn">100€</span>
                    </label>
                    <label onClick={handleLabelClick}>
                        <input type="radio" name="value" id="customInput" {...register('value')}/>
                        <span className="chooseBtn"><input type="text" name="customValue" onChange={handleInputChange}/> €</span>
                    </label>
                    {errors.lastName && ( <span className="error-message"> {errors.lastName.message} </span> )}
                </div>
                <div className="progress-button">
                    {isValid ? <button>Pokračovať</button> : <button disabled>Pokračovať</button>}
                </div>
            </form>
        </div>
        
    )
}

