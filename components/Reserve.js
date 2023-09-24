'use client'

import React, { useState } from "react";
import styles from "../styles/reserve.module.css";
import Button from 'react-bootstrap/Button';

function Reserve({ arrivalDate, departureDate, nbAdulte, nbEnfant }) {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    if (arrivalDate == "" || departureDate == "") {
        arrivalDate = "**";
        departureDate = "**";
    }

    /* if (nbPersonnes > 3) {
        const nbChambres = 2;
    } else if (nbPersonnes < 3) {
        const nbChambres = 1;
    } */

    return (
        <div className={styles.container}>
            <Button variant="success" onClick={toggleModal} className={styles.button}>Réserver !</Button>

            {modal && (
                <div className={styles.modal}>
                    <div onClick={toggleModal} className={styles.overlay}></div>
                    <div className={styles.modalContent}>
                        <h2 className={styles.message}>
                            Votre réservation du {arrivalDate} au {departureDate} a bien été prise en compte ! Le règlement des chambres se fera au près de l'accueil à l'arrivée.
                        </h2>
                        <Button variant="danger" onClick={toggleModal} className={styles.button}>Fermer</Button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Reserve;
