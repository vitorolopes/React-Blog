import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PostList from './components/PostList';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Hero/>
       <PostList/>
    </div>
  );
}

export default App;
