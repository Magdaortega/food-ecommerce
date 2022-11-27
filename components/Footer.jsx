import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            COMIDA Y ESTILO, TODO EN EL MISMO LUGAR
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>ESTAMOS MUY CERCA DE TI</h1>
          <p className={styles.text}>
            <br /> NEW YORK
            <br /> BIG AVENUE
          </p>
          <p className={styles.text}>
                      <br /> SANTIAGO
            <br /> AVENIDA VITACURA
          </p>
          <p className={styles.text}>
                       <br /> SAO PAULO
            <br /> AVENIDA BRASIL 
          </p>
          
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>ESTAMOS ABIERTOS</h1>
          <p className={styles.text}>
          
            <br />  ATENCIÓN 24 HORAS
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default Footer;