import Image from 'next/image';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>  
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>Toko</li>
            <li>Diskon</li>
            <li>Produk Baru</li>
            <li>Merek</li>
          </ul>
          <div className={styles.search}>
            <input type="text" placeholder="Cari produk..." />
          </div>
          <div className={styles.cart}>Keranjang</div>
        </nav>
      </header>
      <main className={styles.main}>
        <div className={styles.aboutSection}>
          <h1>Tentang Kami</h1>
          <div className={styles.breadcrumbs}>
            <span>Beranda</span> &gt; <span>Halaman</span> &gt; <span>Tentang Kami</span>
          </div>
          <div className={styles.aboutContent}>
            <Image src="/image/gambar.jpg" alt="Tentang Kami" width={500} height={300} />
            <div className={styles.text}>
              <h2>Ketahui Tentang Bisnis Ecommerce Kami, Sejarah</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...</p>
              <button className={styles.contactButton}>Hubungi Kami</button>
            </div>
          </div>
        </div>
        <div className={styles.features}>
          <h2>Fitur Kami</h2>
          <div className={styles.featureList}>
            <div className={styles.feature}>
              <h3>Pengiriman Gratis</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...</p>
            </div>
            <div className={styles.feature}>
              <h3>100% Uang Kembali</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...</p>
            </div>
            <div className={styles.feature}>
              <h3>Produk Berkualitas</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...</p>
            </div>
            <div className={styles.feature}>
              <h3>Dukungan 24/7</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...</p>
            </div>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.companyInfo}>
          <h4>BLUE THREADS</h4>
          <p>Kami memiliki pakaian yang sesuai dengan gaya Anda dan yang dapat Anda beli sekarang, dari seseorang yang dekat dengan Anda.</p>
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.column}>
            <h4>PERUSAHAAN</h4>
            <ul>
              <li>Tentang</li>
              <li>Fitur</li>
              <li>Karya</li>
              <li>Karir</li>
            </ul>
          </div>
          <div className={styles.column}>
            <h4>BANTUAN</h4>
            <ul>
              <li>Dukungan Pelanggan</li>
              <li>Detail Pengiriman</li>
              <li>Syarat & Ketentuan</li>
              <li>Kebijakan Privasi</li>
            </ul>
          </div>
          <div className={styles.column}>
            <h4>FAQ</h4>
            <ul>
              <li>Akun</li>
              <li>Kelola Pengiriman</li>
              <li>Pesanan</li>
              <li>Pembayaran</li>
            </ul>
          </div>
          <div className={styles.column}>
            <h4>SUMBER DAYA</h4>
            <ul>
              <li>Buku Elektronik Gratis</li>
              <li>Tutorial Pengembangan</li>
              <li>Cara - Blog</li>
              <li>Playlist Youtube</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default About;
