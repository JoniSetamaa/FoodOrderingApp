import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/br.jpg" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
             WE DO THE  PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            Ouluntaival 12.
            <br /> Oulu, 90800
            <br /> (044) 867-1010
          </p>
          <p className={styles.text}>
            Kaijonharju 4B.
            <br /> Oulu, 90790
            <br /> (044) 867-1011
          </p>
          <p className={styles.text}>
            Isokatu 2A 12.
            <br /> Oulu, 90640
            <br /> (044) 867-1012
          </p>
          <p className={styles.text}>
            Puistokatu 15.
            <br /> Oulu, 90610
            <br /> (044) 867-1013
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 - 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 - 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;