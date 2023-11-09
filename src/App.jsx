import Header from './components/Header';
import Hero from './components/Hero';

import './App.css';

function App() {
  const data = [
    {
        "src": "./freiren.webp",
        "alt": "Wallpaper HD 1"
    },
    {
        "src": "./maquia.png",
        "alt": "Wallpaper HD 2"
    },
    {
        "src": "./86.webp",
        "alt": "Wallpaper HD 3"
    }
  ]
  
  return (
    <>
      <Header />
      <section className='slide-section'>
        <Hero data={data}/>
      </section>
      
    </>
  );
}

export default App;
