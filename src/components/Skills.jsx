import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {RevealProvider} from "../context/Reveal.jsx";

export default function Skills() {
    const { ref: ref1, inView: inView1 } = useInView({
        triggerOnce: false, // This ensures that the animation can trigger multiple times
        threshold: 0.1, // Trigger the animation when 10% of the component is visible
    });

    const skills = [
        { skill: "Full-Stack Development", description: "Proficient in Node.js, ReactJS, and Next.js for building scalable applications." },
        { skill: "Testing", description: "Experienced in Unit and Functional Testing." },
        { skill: "Database Design", description: "Strong knowledge of SQL databases, MongoDB, and database fundamentals (NoSQL/SQL)." },
        { skill: "Programming Languages", description: "Proficient in Java, Python, and JavaScript." },
        { skill: "Server-Side Technologies", description: "Skilled in Spring Boot, Node.js, and Python Django." },
        { skill: "API Design", description: "Experienced in designing RESTful APIs and GraphQL services." },
        { skill: "DevOps", description: "Familiarity with DevOps processes and tools like Git and GitHub." },
        { skill: "Technical Support", description: "Experienced in providing technical support and troubleshooting for application issues." },
        { skill: "Technical Documentation", description: "Experienced in documenting technical processes and ensuring quality assurance through testing." },
        { skill: "Problem-Solving", description: "Excellent analytical and problem-solving skills." },
        { skill: "Attitude", description: "Positive attitude and willingness to learn new technologies." },
        { skill: "Soft skills", description: "Integrity, leadership, attention to detail, discipline, agility, and humility." }
    ];

    return (
        <section  className="relative isolate py-5 md:px-6 md:py-5 text-center" id="skills">
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
                    <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-8">My Skills</h1>
                </RevealProvider>
                <div
                    ref={ref1}
                    className="mt-10 grid grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-x-8 md:gap-x-12 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-5"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="relative  flex flex-col gap-y-6 rounded-2xl p-6 ring-1 ring-gray-900/10 shadow-xl border border-gray-200 bg-white"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 20}}
                            transition={{duration: 0.6, ease: "easeOut"}}
                        >
                            <h2 className="text-lg font-semibold text-gray-900">{skill.skill}</h2>
                            <p className="text-base text-gray-700">{skill.description}</p>
                        </motion.div>
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
        </section>);
}
