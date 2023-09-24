import React from 'react';
import styles from "../styles/footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <h5 className={styles.text}>Contacts :<br></br><br></br></h5>
                <ul className={styles.text}>
                    <li className={styles.text}>Téléphone : 53.06.79</li>
                    <li className={styles.text}>Email : Flavien.loubriat@outlook.fr</li>
                    <li className={styles.text}>Adresse : 14 rue de la balade, 98835 Dumbéa, Nouvelle calédonie</li>
                </ul>
            </div>

        </footer>
    );
}

export default Footer;