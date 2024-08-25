import { motion } from 'framer-motion';
import express from '../assets/images/express-logo-freelogovectors.svg'
import django from '../assets/images/Django_logo.svg.png'
import git from '../assets/images/Git-logo-orange.svg'
import github from '../assets/images/github-original-wordmark.svg'
import springBoot from '../assets/images/Spring_Framework_Logo_2018.svg'
import reactJs from '../assets/images/reactjs-ar21.svg'
import node from '../assets/images/Node.js_logo_2015.svg'
import mysql from '../assets/images/MySQL_textlogo.svg'
import mongoDb from '../assets/images/MongoDB_Logo.svg'
import java from '../assets/images/Java-logo-vector-01.svg'
import javaScript from '../assets/images/Unofficial_JavaScript_logo_2.svg'
import python from '../assets/images/python-3.svg'

export default function TechStack() {

    const logos = [
        { src: express, alt: "Express" },
        { src: django, alt: "Django" },
        { src: git, alt: "Git" },
        { src: github, alt: "GitHub" },
        { src: springBoot, alt: "Spring Boot" },
        { src: reactJs, alt: "React" },
        { src: node, alt: "Node.js" },
        { src: mysql, alt: "MySQL" },
        { src: mongoDb, alt: "MongoDB" },
        { src: java, alt: "Java" },
        { src: javaScript, alt: "JavaScript" },
        { src: python, alt: "Python" }
    ]

    return (
        <div id={'stack'} className="relative py-8 px-6 md:px-12 rounded-2xl overflow-hidden">

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

            <div className="mx-auto max-w-7xl text-center px-6 lg:px-8">
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">My Tech Stack.</h1>

                <div
                    className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">

                    {logos.map((logo, index) => (
                        <motion.img
                            key={index}
                            width={158}
                            height={48}
                            alt={logo.alt}
                            src={logo.src}
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            animate={{rotate: [0, 5, -5, 0]}}
                            transition={{duration: 2, repeat: Infinity, repeatType: 'loop'}}
                        />
                    ))}

                </div>
            </div>

            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                />
            </div>

        </div>
    )
}
