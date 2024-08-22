import { Button } from 'antd';
import image from '../assets/images/team-11.jpg'
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";

const HeroSection2 = () => {
    const currentYear = new Date().getFullYear();

    return (
        <section className="bg-gray-900 h-52 text-white md:py-5 px-6 md:px-12 rounded-2xl">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                />
            </div>
            <div className="mx-auto mt-11 max-w-7xl px-6 lg:px-8">
                <nav className="flex justify-center space-x-6 mb-6">
                    <a href="#about" className="text-sm font-medium text-gray-500 hover:text-gray-900">Profile</a>
                    <a href="#blog" className="text-sm font-medium text-gray-500 hover:text-gray-900">Skills</a>
                    <a href="#jobs" className="text-sm font-medium text-gray-500 hover:text-gray-900">Experience</a>
                    <a href="#press" className="text-sm font-medium text-gray-500 hover:text-gray-900">Projects</a>
                </nav>

                <div className="flex justify-center space-x-6 mb-6">
                    <a href="#" className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Facebook</span>
                        <FaFacebook className="h-6 w-6"/>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Instagram</span>
                        <FaInstagram className="h-6 w-6"/>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Twitter</span>
                        <FaTwitter className="h-6 w-6"/>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">GitHub</span>
                        <FaGithub className="h-6 w-6"/>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">YouTube</span>
                        <FaLinkedin className="h-6 w-6"/>
                    </a>
                </div>

                <p className="text-center text-xs leading-5 text-gray-500">
                    &copy; {currentYear} Ochieng Eugene Otieno. All rights reserved.
                </p>
            </div>

        </section>
    );
};

export default HeroSection2;
