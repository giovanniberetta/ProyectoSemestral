import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Programs from './components/Programs';
import ContactForm from './components/ContactForm';

function App() {
    return (
        <div>
            <Header />
            <main>
                <About />
                <Programs />
                <ContactForm />
            </main>
            <Footer />
        </div>
    );
}

export default App;
