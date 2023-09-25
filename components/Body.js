import styles from "../styles/body.module.css";

const Body = () => {
    return (
        <div className={styles.body}>
            <div className={styles.intro}>
                <div className={styles.pintro}>
                    <div className={styles.p}>
                        <p>
                            Bienvenu sur Gîte NC ! Réservez dès maintenant !<br></br>
                            <br></br>
                            Nos chambres sont composées de 2 chambres à coucher et une salle d&aposeau, afin d&aposaccueillir 2 adultes et un enfant. <br></br>
                            Il y a à votre disposition une salle à manger et une cuisine de quoi reveiller votre âme de cuistot. <br></br>
                            Le wifi, eau chaude, climatiseur et TV sont sompris dans la réservation.<br></br>
                            Nous disposons de 3 Gîtes. Tous aussi agréables les uns que les autres. Les gîtes sont fermé le lundi.
                        </p>
                        <h5 className={styles.p}>Tarifs :</h5>
                        <p className={styles.p}>
                            Chaque chambre est à 5000 XPF la semaine et 7000 XPF le week-end.
                        </p>
                    </div>
                </div>
                <img className={styles.imgReserv} src="../Calendrier.png" alt="Réservation" />
            </div>
            <br></br>
        </div>
    );
};

export default Body;