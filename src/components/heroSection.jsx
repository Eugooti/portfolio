'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../assets/images/logez.png'
import image from '../assets/images/TIM_6275.jpg'





export default function HeroSection() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


    const links=[
        {label:"Profile",ref:"#profile"},
        {label:"Stack",ref:"#stack"},
        {label:"Skills",ref:"#skills"},
        {label:"Projects",ref:"#projects"},
        {label:"Experience",ref:"#Experience"},
        {label:"Contact",ref:"#contact"},
    ]



    return (
        <div className="" id={'profile'}>
            <header className="absolute  inset-x-0 top-0 z-50">
                <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                    <div className="flex pl-8 lg:flex-1">
                        <h1
                            className="graffiti text-4xl text-white text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-yellow-500 to-red-500 drop-shadow-xl tracking-tight">
                            E.O
                        </h1>

                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="h-6 w-6"/>
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {links.map((item, index) => (
                            <a key={index} href={item.ref} className="text-sm font-semibold leading-6 text-gray-900">
                                {item.label}
                            </a>
                        ))}
                    </div>


                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">

                    </div>
                </nav>
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-50" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <h1
                                    className="graffiti text-4xl text-white text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-yellow-500 to-red-500 drop-shadow-xl tracking-tight">
                                    E.O
                                </h1>
                            </a>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {links.map((item,index) => (
                                        <a
                                            key={index}
                                            href={item.ref}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>

            <div  className="relative isolate lg:pt-32 px-6 pt-20 lg:px-8">
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
                <div className="mx-auto grid md:grid-cols-2 sm:grid-cols-1  max-w-6xl sm:py-5 lg:py-0">
                    <div className=" text-start">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Hi, I'm <span className="text-blue-500">Eugene Ochieng</span>
                        </h1>
                        <p className="text-lg text-gray-900 md:text-xl mb-6">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            I'm a <span className="text-blue-500">Software Engineer</span> specializing in building (and
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            occasionally designing) exceptional digital experiences. I'm passionate about creating
                            solutions that improve and automate processes.
                        </p>

                        <div className="mt-10 flex items-center justify-center gap-x-6">

                            <a href="#projects" className="text-sm rounded-md bg-indigo-600 font-semibold text-white shadow-sm leading-6 px-3.5 py-2.5 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                View my work <span aria-hidden="true">→</span>
                            </a>

                            <a
                                download="Eugene_Ochieng_Resume.pdf"
                                href="/OCHIENG_EUGENE_OTIENO_RESUME.pdf" className="text-sm font-semibold leading-6 text-gray-900">
                                Download Resume <span aria-hidden="true">→</span>
                            </a>


                        </div>
                    </div>
                    <div className="w-full md:w-full mt-8 md:mt-0 flex justify-center">
                        <img
                            src={image}
                            alt="Eugene Ochieng"
                            className="rounded-full w-64 h-64 object-cover shadow-lg"
                        />
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
        </div>
    )
}
