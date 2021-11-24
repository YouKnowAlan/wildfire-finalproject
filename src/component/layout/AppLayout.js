import Navbar from './Navbar';
import Footer from './Footer';

export default function AppLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <div className="max-w-7xl mx-auto py-6 px-6 lg:px-8">{children}</div>
      </main>
      <Footer />
    </>
  );
}
