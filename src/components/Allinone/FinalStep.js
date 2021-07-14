import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import axios from 'axios'

//styles
import '../../assets/css/stepThree.scss'

//validation
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = Yup.object().shape({
    terms: Yup.boolean().oneOf([true], 'Musíte súhlasiť so spracovaním osobných údajov!')
})

export const FinalStep = () => {

    //Whole state
    let state = {...useSelector(state => state)}

    //Post request
    state.shelterID = parseInt(state.shelterID)
    state.phone = state.country.substring(1) + state.phone
    delete state.donateDogShelter
    delete state.shelterName
    delete state.country

    //rendering data...
    const type = useSelector((state) => state.donateDogShelter)
    const shelterName = useSelector((state) => state.shelterName)
    const value = useSelector((state) => state.value)
    const firstName = useSelector((state) => state.firstName)
    const lastName = useSelector((state) => state.lastName)
    const fullName = firstName + " " + lastName
    const email = useSelector((state) => state.email)
    const phone = useSelector((state) => state.country) + useSelector((state) => state.phone)
    const terms = useSelector(state => state.terms)

    //useForm
    const { register, handleSubmit, formState: {errors, isValid} } = useForm({
        defaultValues: {terms},
        resolver: yupResolver(schema),
        mode: "all"
    })

    //getting data
    const onSubmit = () => {
        axios.post('https://frontend-assignment-api.goodrequest.com/api/v1/shelters/contribute', state)
        .then((response) => {
            if(response.status === 200) {
                alert("ĎAKUJEME! Požiadavka bola úspešne odoslaná :)")
                console.log(response)
            }
        }, (error) => {console.log(error);});
    }

    return (
        <div>
            <div className="nav-dots">
                <span></span>
                <span></span>
                <span className="active"></span>
            </div>
            <h1>Skontrolujte si zadané údaje</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="final-step">
                    <h2 className="title">Akou formou chcem pomôcť</h2>
                    <p>{type ? "Chcem finančne prispieť konkrétnemu útulku" : "Chcem finančne prispieť celej nadácii"}</p>

                    <h2 className="title">Najviac mi záleží na útulku</h2>
                    <p>{(shelterName !== "") ? shelterName : 'Nevybral som žiadny útulok'}</p>

                    <h2 className="title">Suma, ktorou chcem pomôcť</h2>
                    <p>{value} €</p>

                    <h2 className="title">Meno a priezvisko</h2>
                    <p>{fullName}</p>

                    <h2 className="title">E-mailová adresa</h2>
                    <p>{email}</p>

                    <h2 className="title">Telefónne číslo</h2>
                    <p>{phone}</p>

                    <label>
                        <input type="checkbox" name="terms" id="terms" {...register('terms')} />
                        <span className="agree-term"></span>
                        <span className="agreement-text">Súhlasím so spracovaním mojích osobných údajov</span>
                        {errors.terms && (<span className="error-message" >{errors.terms.message}</span>)}
                    </label>
                </div>
                <div className="progress-button">
                    <Link to="/step-two" className="back-btn">Späť</Link>
                    {isValid ? <button>Odoslať formulár</button> : <button>Odoslať formulár</button>}
                </div>
            </form>
        </div>
    )
}