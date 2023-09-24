'use client'
import { createContext } from 'react'

const Context = createContext()

import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import styles from "../styles/slider.module.css";

const imageUrls = ["../Chambre1.jpg", "../Chambre2.jpg", "../SalleBain1.jpg", "../Garden.jpg"];

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = { imageIndex: 0 };
    }

    // Cette fonction met à jour l'indice de l'image dans les deux sens
    updateImageIndex = (increment) => {
        const newIndex = (this.state.imageIndex + increment + imageUrls.length) % imageUrls.length;
        this.setState({ imageIndex: newIndex });
    }

    render() {
        return (
            <div className={styles.container}>
                <Button variant="outline-secondary" size="lg" className={styles.buttonL} onClick={() => this.updateImageIndex(-1)}>
                    <FontAwesomeIcon icon={faArrowLeft} className={styles.arrows} />
                </Button>

                <div className={styles.imgcontainer}>
                    <img
                        src={imageUrls[this.state.imageIndex]}
                        className={styles.img}
                    />
                </div>

                <Button variant="outline-secondary" size="lg" className={styles.buttonR} onClick={() => this.updateImageIndex(1)}>
                    <FontAwesomeIcon icon={faArrowRight} className={styles.arrows} />
                </Button>

            </div>
        )
    }
}

export default Slider;
