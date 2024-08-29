import { Timeline } from "antd";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {RevealProvider} from "../context/Reveal.jsx";

const Experience = () => {
    const { ref: ref1, inView: inView1 } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });



    return (
        <section className="relative py-8 px-6 md:px-12 rounded-2xl overflow-hidden text-center" id="experience">
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

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8 ">
                <div className='flex align-middle justify-center'>
                    <RevealProvider>
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-8">Experience</h2>
                    </RevealProvider>
                </div>

                <Timeline mode="alternate" className="space-y-6">
                    <Timeline.Item color="green" label="2022/09/01 - 2023/04/01">
                        <motion.div
                            ref={ref1}
                            className="p-4 bg-gray-300 rounded-lg shadow-md"
                            initial={{ opacity: 0, x: -50 }} // Start from left
                            animate={{ opacity: inView1 ? 1 : 0, x: inView1 ? 0 : -50 }} // Move to original position
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Project Coordinator</h3>
                            <ul className="list-disc list-inside text-gray-600 mb-4">
                                <li>Coordinated the development of Home of Students</li>
                                <li>Tasked with the design and development of the client-side</li>
                                <li>Project documentation</li>
                            </ul>
                            <Link
                                className="text-sm text-blue-600 font-semibold hover:underline"
                                to="https://github.com/Eugooti/Homii_Application.git"
                            >
                                Open project <span aria-hidden="true">→</span>
                            </Link>
                        </motion.div>
                    </Timeline.Item>
                    <Timeline.Item color="red" label="2022/06/13 - 2022/08/26">
                        <motion.div
                            ref={ref1}
                            className="p-4 bg-gray-300 rounded-lg shadow-md"
                            initial={{ opacity: 0, x: 50 }} // Start from right
                            animate={{ opacity: inView1 ? 1 : 0, x: inView1 ? 0 : 50 }} // Move to original position
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Software Engineering Intern</h3>
                            <ul className="list-disc list-inside text-gray-600 mb-4">
                                <li>Provided ICT support</li>
                                <li>Tested Android and iOS applications</li>
                                <li>Conducted a cyber drill</li>
                            </ul>
                        </motion.div>
                    </Timeline.Item>
                    <Timeline.Item label="2024/01/03 - 2024/06/21">
                        <motion.div
                            ref={ref1}
                            className="p-4 bg-gray-300 rounded-lg shadow-md"
                            initial={{ opacity: 0, x: -50 }} // Start from left
                            animate={{ opacity: inView1 ? 1 : 0, x: inView1 ? 0 : -50 }} // Move to original position
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Computer Studies Teacher</h3>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Provided ICT support</li>
                                <li>Developed School LMS API</li>
                            </ul>
                        </motion.div>
                    </Timeline.Item>
                </Timeline>
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
};

export default Experience;
