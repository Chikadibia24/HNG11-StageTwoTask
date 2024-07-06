import './App.css'
import NavBar from "../src/components/navbar";
import Footer from "../src/components/footer";

function App() {

  return (
    <div className="flex flex-col gap-[100px] items-center" >
      <NavBar />
      <Footer/>
    </div>
  )
}

export default App
