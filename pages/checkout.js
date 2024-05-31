import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CheckoutForm from '../components/CheckoutForm';

export default function Checkout() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Checkout</h1>
        <CheckoutForm />
      </main>
      <Footer />
    </div>
  );
}
