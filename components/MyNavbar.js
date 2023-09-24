'use client'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../styles/mynavbar.module.css';

function MyNavbar() {
    return (
        <Navbar className={styles.navbar}>
            <Container className={styles.container}>
                <Navbar.Brand id={styles.gite}>Gîte NC</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Text id={styles.text}>
                    Signed in as: Loubriat Flavien
                </Navbar.Text>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;