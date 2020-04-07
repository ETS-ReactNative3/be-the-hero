import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import React from 'react';

import './styles.css';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon () {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Logo"/>
                <form>
                    <h1> Faça seu Logon</h1>
                    <input placeholder="Sua ID" />
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02051" />
                        Não tenho Cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes"/>
        </div>       
    );
}
