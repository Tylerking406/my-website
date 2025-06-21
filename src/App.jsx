import './App.css'
import Card from './Card.jsx'
import herImage from './assets/her.jpg';
function App() {

  return (
    <div className="App">
      <Card
        image={herImage}
        title="Thimna Shushu"
        content="Thimna Shushu is a passionate software developer with a keen interest in web technologies and user experience design. She enjoys building interactive applications and is always eager to learn new skills. In her free time, Thimna loves reading, hiking, and exploring new places." />
      <Card
        image="https://picsum.photos/200/300"
        title="Sample Card"
        content="This is a sample card with a random image from Picsum. It serves as an example of how to use the Card component in your application." />

    
    </div>
  )
}

export default App
