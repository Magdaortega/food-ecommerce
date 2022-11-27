import Image from "next/image";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.logo}>
        <Image src="/img/logo.png" alt="" width="120" height="70" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>Pide ahora</div>
          <div className={styles.text}>+56966120508</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Homepage</li>
          <li className={styles.listItem}>Productos</li>
          <li className={styles.listItem}>Menu</li>
          
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/img/cart.png" alt="" width="30" height="30" />
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;