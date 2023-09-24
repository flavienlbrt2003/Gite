import Figure from 'react-bootstrap/Figure';
import styles from '../styles/figureR.module.css';

function FigureTransitionR() {
    return (
        <Figure>
            <Figure.Image
                src="../TransitionSap.png"
                className={styles.img}
            />
        </Figure>
    );
}

export default FigureTransitionR;