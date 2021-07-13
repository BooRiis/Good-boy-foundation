import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { setEmail, setFirstName, setPhone, setLastName, toggleCountry } from '../../features/formSlice'


//styles
import '../../assets/css/stepTwo.scss'

//icons
import Sk from '../../assets/imgs-icons/svk.svg'
import Cz from '../../assets/imgs-icons/cz.svg'


//validation
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const phoneForCountries = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = Yup.object().shape({
    firstName: Yup.string().trim().transform(value => value === '' ? undefined : value).min(2, "Dĺžka musí byť viac ako 2 znaky!").max(30, "Dĺžka nemôže presahovať 30 znakov!"),
    lastName: Yup.string().min(2, "Dĺžka musí byť viac ako 2 znaky!").max(30, "Dĺžka nemôže presahovať 30 znakov!").required("Tento údaj je povinný"),
    email: Yup.string().email("Nesprávny formát e-mailovej adresy!").required("Tento údaj je povinný!"),
    phone: Yup.string().matches(phoneForCountries, 'Nesprávny formát čísla').required("Tento údaj je povinný!"),
})


export const StepNumberTwo = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const firstName = useSelector(state => state.firstName)
    const lastName = useSelector(state => state.lastName)
    const email = useSelector(state => state.email)
    const phone = useSelector(state => state.phone)
    const country = useSelector(state => state.country)
    const { register, handleSubmit, formState: {errors, isValid} } = useForm({
        defaultValues: {firstName, lastName, email, phone},
        resolver: yupResolver(schema),
        mode: "onBlur"
    })

    const onSubmit = (data) => {
        dispatch(setFirstName(data.firstName))
        dispatch(setLastName(data.lastName))
        dispatch(setEmail(data.email))
        dispatch(setPhone(data.phone))
        history.push("./step-three")
    }

    return (
        <div>
            <div className="nav-dots">
                <span className="active"></span>
                <span></span>
                <span></span>
            </div>
            <h1>Potrebujeme od Vás zopár informácií</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="title">O vás</h2>
                <div className="form-inf">
                    <label>
                        <span className="name">Meno</span>
                        <input type="text" id="firstName" name="firstName" {...register('firstName')} placeholder="Zadajte Vaše meno" />
                        {errors.firstName && ( <span className="error-message"> {errors.firstName.message} </span>)}
                    </label>
                    <label>
                        <span className="name">Priezvisko</span>
                        <input type="text" id="lastName" name="lastName" {...register('lastName')} placeholder="Zadajte Vaše priezvisko"/>
                        {errors.lastName && ( <span className="error-message"> {errors.lastName.message} </span>)}
                    </label>
                    <label>
                        <span className="name">E-mailová adresa</span>
                        <input type="text" id="email" name="email" {...register('email')}  placeholder="Zadajte Váš e-mail"/>
                        {errors.email && ( <span className="error-message"> {errors.email.message} </span>)}
                    </label>
                    <label>
                        <span className="name">Telefonné číslo</span>
                        <input type="text" id="phone" name="phone" {...register('phone')}  placeholder={country} className="country"/>
                        <div className="country-side" onClick={() => dispatch(toggleCountry())}>
                            {country === "+420" ? <img src={Cz} alt=""/> : <img src={Sk} alt=""/>}
                        </div>
                        {errors.phone && ( <span className="error-message"> {errors.phone.message} </span>)}
                    </label>
                </div>
                <div className="progress-button">
                    <Link to="/" className="back-btn">Späť</Link>
                    { isValid ? <button>Pokračovať</button> : <button disabled>Pokračovať</button>}
                </div>
            </form>
        </div>
    )
}
