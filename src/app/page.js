import Image from "next/image";
import Navbar from "./components/navbar"
import Input from "./components/input"
import Information from "./components/information"
import History from "./components/history"
import Alert from "./components/alert"

const Home = async () => {
  return (
    <>
    
      <div className="mt-1 w-[100%] h-[89%] flex justify-between">        
        {/* LEFT */}
        <div className="w-[40%] box-border flex flex-col items-center">
          <div className="h-[20%] flex items-center">
            <Input />
          </div>
          <div className="h-[80%] w-[100%] bg-white rounded-tr-lg">
            <History />
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-[60%] h-[100%] ">
          <div className="h-[80%] px-2 box-border">
            <Information />
          </div>
          <div className="h-[20%]">
            <Alert />
          </div>
        </div>
      </div>
  </> 
  );
}

export default Home;
