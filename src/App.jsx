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
    const [onlineStatus, setOnlineStatus] = useState(window.navigator.onLine);

    useEffect(() => {
        const handleOnline = () => setOnlineStatus(true);
        const handleOffline = () => setOnlineStatus(false);

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        // Cleanup event listeners on component unmount
        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    useEffect(() => {
        if (!onlineStatus) {
            messageApi.warning("Connect to the internet").then(() => {
                console.log(onlineStatus);
            });
        }
    }, [onlineStatus, messageApi]);
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
