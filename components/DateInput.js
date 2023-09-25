'use client'

import React from 'react';
import styles from "../styles/dateinput.module.css";

function DateInput({ arrivalDate, departureDate, setArrivalDate, setDepartureDate }) {

    const handleArrivalDateChange = (event) => {
        setArrivalDate(event.target.value);
    };

    const handleDepartureDateChange = (event) => {
        setDepartureDate(event.target.value);
    };

    return (
        <div className={styles.dateInputContainer}>
            <div className={styles.dateInput}>
                <label className={styles.label}>Date d&aposarrivée :</label>
                <input
                    type="date"
                    value={arrivalDate}
                    onChange={handleArrivalDateChange}
                    className={styles.customInput}
                />
            </div>
            <div className={styles.dateInput}>
                <label className={styles.label}>Date de départ :</label>
                <input
                    type="date"
                    value={departureDate}
                    onChange={handleDepartureDateChange}
                    className={styles.customInput}
                />
            </div>
        </div>
    );
}

export default DateInput;
