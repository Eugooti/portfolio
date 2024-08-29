import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {RevealProvider} from "../context/Reveal.jsx";

const projects = [
    {
        title: "Spring Rest API",
        description: "A practice RESTful API built with Spring Boot that provides robust backend services. It features user authentication, real-time data processing, and is designed for scalability and performance.",
        github: "https://github.com/Eugooti/spring_rest_api.git"
    },
    {
        title: "School LMS Dashboard",
        description: "A comprehensive Learning Management System (LMS) dashboard developed with React and Node.js. It includes user management, course tracking, and interactive features to enhance the learning experience.",
        github: "https://github.com/Eugooti/new_hope_academy_client.git"
    },
    {
        title: "School LMS API",
        description: "A backend API for a Learning Management System built with Node.js and Express. It supports course management, user interactions, and real-time updates for an efficient educational environment.",
        github: "https://github.com/Eugooti/new_hope_academy_api.git"
    },
    {
        title: "Expenditure Management API",
        description: "An API designed for managing and analyzing expenditure data. Built with Node.js, it features detailed reporting, budget tracking, and integration with various financial data sources.",
        github: "https://github.com/Eugooti/expenditure_admin_api.git"
    },
    {
        title: "Expenditure Management GraphQLAPI",
        description: "A GraphQL API for managing and analyzing expenditure data. It allows users to query and mutate financial records with flexibility and precision. The API provides detailed reporting, budget tracking, and efficient data management.",
        github: "https://github.com/Eugooti/home_expenditure_graphql.git"
    },
    {
        title: "Expenditure Management App (Client-Side)",
        description: "A user-friendly client-side application for managing and visualizing expenditure data. Built with React, this app provides a comprehensive dashboard for tracking expenses, setting budgets, and generating financial reports. It integrates seamlessly with the GraphQL API for real-time data updates and efficient data handling.",
        github: "https://github.com/Eugooti/home_expenditure_admin.git"
    },
    {
        title: "Home of Students",
        description: "A React-based hostel booking and allotment system. It facilitates remote booking, hostel management, and monitoring of learners, offering a comprehensive solution for hostel administration.",
        github: "https://github.com/Eugooti/Homii_Application.git"
    },
    {
        title: "Utibu Health Frontend",
        description: "A frontend application for ordering prescriptions online. It provides a user-friendly interface for patients to order prescriptions, view their prescription history, and track their orders.",
        github: "https://github.com/Eugooti/utibu-health-client.git"
    },
    {
        title: "Utibu Health API",
        description: "An API for managing online prescription orders. It allows patients to submit orders, access prescription history, and receive real-time updates on order statuses. The API supports secure authentication and efficient data handling.",
        github: "https://github.com/Eugooti/utibu-health-api.git"
    }
];

export default function Projects() {
    const { ref: ref2, inView: inView2 } = useInView({
        triggerOnce: false, // This ensures that the animation can trigger multiple times
        threshold: 0.1, // Trigger the animation when 10% of the component is visible
    });

    return (
        <section className="relative isolate py-16 md:px-6 md:py-12 text-center" id="projects">
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

            <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-center flex-col">
                <RevealProvider>
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-8">Projects</h2>
                </RevealProvider>
                <motion.div
                    ref={ref2}
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 20}}
                    transition={{duration: 0.6, ease: "easeOut"}}
                    className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {projects.map((project, index) => (
                        <div key={index} className="p-6 bg-white flex flex-col justify-between rounded-lg shadow-md border border-gray-200">
                            <div className='pb-4'>
                                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                                <p className="text-base text-gray-700 mt-2">{project.description}</p>
                            </div>

                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                            View on GitHub
                        </a>
                        </div>
                        ))}
                </motion.div>
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
        </section>
    );
}