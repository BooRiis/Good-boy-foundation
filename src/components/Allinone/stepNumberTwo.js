import React from 'react'

export const StepNumberTwo = () => {
    return (
        <div>
            <div className="nav-dots">
                <span className="active"></span>
                <span></span>
                <span></span>
            </div>
            <h1>Potrebujeme od Vás zopár informácií</h1>
            <form>
                <h2 className="title">O vás</h2>
                <div className="meta-data">
                    <label>
                        <span className="name">Meno</span>
                        <input type="text" id="firstName" name="firstName" placeholder="Zadajte Vaše meno" />
                    </label>
                    <label>
                        <span className="name">Priezvisko</span>
                        <input type="text" id="lastName" name="lastName" placeholder="Zadajte Vaše priezvisko"/>
                    </label>
                    <label>
                        <span className="name">E-mailová adresa</span>
                        <input type="text" id="email" name="email"  placeholder="Zadajte Váš e-mail"/>
                    </label>
                    <label>
                        <span className="name">Telefonné číslo</span>
                        <input type="text" id="phone" name="phone" className="country" placeholder="Zadajte Vaše číslo"/>
                    </label>
                </div>
                <div className="progress-button">
                    <button>Pokračovať</button>
                </div>
            </form>
        </div>
    )
}
