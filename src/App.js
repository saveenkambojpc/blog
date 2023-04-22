import Header from "./components/Header";
import Home from "./pages/Home";


export default function App() {
  return (

    <div>
      <Header />
      <div className=" lg:px-32 mb-6 ">

        <Home />
      </div>
    </div>
  );
}


