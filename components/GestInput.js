'use client'

import React from 'react';
import styles from "../styles/gestinput.module.css";

function GuestInput({ nbAdulte, nbEnfant, setnbAdulte, setnbEnfant }) {

    const handleAdultsChange = (event) => {
        setnbAdulte(event.target.value);
    };

    const handleChildrenChange = (event) => {
        setnbEnfant(event.target.value);
    };

    return (
        <div className={styles.guestInputContainer}>
            <div className={styles.guestInput}>
                <label className={styles.label}>Adultes (à partir de 11 ans) :</label>
                <input
                    type="number"
                    value={nbAdulte}
                    max={4}
                    min={1}
                    onChange={handleAdultsChange}
                    className={styles.customInput}
                />
            </div>
            <div className={styles.guestInput}>
                <label className={styles.label}>Enfants (jusqu&aposà 11 ans):</label>
                <input
                    type="number"
                    value={nbEnfant}
                    max={2}
                    min={0}
                    onChange={handleChildrenChange}
                    className={styles.customInput}
                />
            </div>
        </div>
    );
}

export default GuestInput;

