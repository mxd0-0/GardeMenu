import Header from './components/Header';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import HoursSection from './components/HoursSection';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <Hero />
            <MenuSection />
            <HoursSection />
            <Footer />
        </div>
    );
}

export default App;