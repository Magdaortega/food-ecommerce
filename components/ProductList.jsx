import styles from "../styles/ProductList.module.css";
import ProductCard from "./ProductCard"

const ProductList = () => {
    return (
        <div className={styles.container}>

            <h1 className={styles.title}>Comida saludable y con Estilo</h1>
            <p className={styles.desc}>
                En Dolce&Vegana te ofrecemos platos con ingredientes especialmente elegidos por nuestro chef y cultivados en nuestra huerta orgánica. Cada plato es una obra de arte que puedes disfrutar con tus amigos. 
            </p>
            <div className={styles.wrapper}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    );
};

export default ProductList