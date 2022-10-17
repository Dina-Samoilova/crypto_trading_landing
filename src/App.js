import { Header, About, Future, Blog } from './containers';
import { Navbar, Mouse } from './components';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <div>
        <Navbar />
        <Header />
      </div>
      <Mouse />
      <section className='bg-image'>
        <About />
        <Future />
        <Blog />
      </section>
    </div>
  );
}

export default App;
