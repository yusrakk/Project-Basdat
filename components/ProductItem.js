
const ProductItem = ({ image, title, price, discount, rating }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-5">
      <div className={styles.productItem}>
        <img src={image} className={`img-fluid ${styles.productThumbnail}`} />
        <h3 className={styles.productTitle}>{title}</h3>
        <strong className={styles.productPrice}>${price}</strong>
        {discount && <span className={styles.productDiscount}>${discount}</span>}
        <div className={styles.rating}>
          {Array(5).fill(0).map((_, i) => (
            <span key={i} className={i < rating ? styles.starFilled : styles.starEmpty}>&#9733;</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
