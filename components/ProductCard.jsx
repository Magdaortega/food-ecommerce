
import image from "next/image";
import styles from "../styles/ProductCard.module.css";


const ProductCard = () => {
  return (
    <div className={styles.container}>
      <img src="/public/img/cu2.png" alt="" width="300" height="300" />
      <h1 className={styles.title}>Veggie fantasy</h1>
      <span className={styles.price}>$12.990</span>
      <p className={styles.desc}>
        Pollo vegano bañado en dulce salsa especiada de la india. 
      </p>
    </div>
  );
};

export default ProductCard;