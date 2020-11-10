import './App.css';
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
        <Contact name="Black Panther"
                avatar="https://i.ibb.co/4S9wSTD/te-le-chargement.jpg"
                status="Online" />

         <Contact name="Marta"
                avatar="https://randomuser.me/api/portraits/women/85.jpg"
                status="Online" />  

         <Contact name="Jon"
                avatar="https://randomuser.me/api/portraits/men/27.jpg"
                status="Offline" />            
    </div>
  );
}

export default App;
