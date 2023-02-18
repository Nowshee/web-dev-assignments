// import logo from './logo.svg';
import './App.css';
import CardComponents from './Components.js/CardComponents'

function App() {
  return (
    <div>
    

      <CardComponents Name="Nowsheen" email="nsb@gmail.com" contact={235858965} images="https://img.freepik.com/premium-vector/cute-girl-face-cartoon_18591-41507.jpg?w=2000"/>
      <br />
     
      <CardComponents Name="Sahil" email="sah@gmail.com" contact={239858965} images= "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.961811548.1661752223&semt=ais"/>
      
      <br />
  
      <CardComponents Name="Sheenu" email="ssb@gmail.com" contact={234558965}  images= "https://img.freepik.com/premium-vector/cute-girl-face-cartoon_18591-41514.jpg?w=2000"/>
    </div>

  );
}

export default App;
