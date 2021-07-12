import { createSlice } from '@reduxjs/toolkit'

export const stepFormSlice = createSlice({
  name: 'stepFormSlice',
  initialState: {
    donateDogShelter: false,
    shelterName: "",
    shelterID: null,
    value: "",
    firstName: "",
    lastName: "",
    email: "",
    phode: "",
    country: "+421"
  },
  reducers: {
    toggleSupportType: state => { state.donateDogShelter = !state.donateDogShelter},
    chooseShelter: (state, action) => {state.shelterName = action.payload},
    setShelterID: (state, action) => {state.shelterID = action.payload},
    setValue: (state, action) => {state.value = action.payload},
    setFirstName: (state, action) => {state.firstName = action.payload},
    setLastName: (state, action) => {state.lastName = action.payload},
    setEmail: (state, action) => {state.email = action.payload},
    setPhone: (state, action) => {state.email = action.payload},
    toggleCountry: (state, action) => {state.country = (state.country === "+421") ? state.country = "+420" : state.country = "+421" ; console.log(state.country)}
  }
})

export const reducer = stepFormSlice.reducer

// Action creators are generated for each case reducer function
export const { toggleSupportType, chooseShelter, setShelterID, setValue, setFirstName, setLastName, setEmail, setPhone, toggleCountry } = stepFormSlice.actions
