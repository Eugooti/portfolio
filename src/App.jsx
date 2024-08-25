import './App.css'
import {message} from "antd";
import HeroSection from "./components/heroSection.jsx";
import TechStack from "./components/Stack.jsx";
import Contact from "./components/contact.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/footer.jsx";
import {useEffect, useState} from "react";
import Experience from "./components/Experience.jsx";

function App() {
    const [messageApi, contextHolder] = message.useMessage();


    const [onlineStatus] = useState(window.navigator.onLine);

    useEffect(() => {
        if (!onlineStatus){
            messageApi.warning("Connect to internet").then(()=>{
                console.log(onlineStatus)
            })
        }
    }, [onlineStatus]);
    return (
    <div>
        {contextHolder}

        <HeroSection/>
        <TechStack/>
        <Skills/>
        <Projects/>
        <Experience/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App
