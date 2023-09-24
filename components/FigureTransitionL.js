import Figure from 'react-bootstrap/Figure';
import styles from '../styles/figureL.module.css';

function FigureTransitionL() {
  return (
    <Figure>
      <Figure.Image
        src="../TransitionSap.png"
        className={styles.img}
      />
    </Figure>
  );
}

export default FigureTransitionL;