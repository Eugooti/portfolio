'use client'

import {useState} from 'react'
import {Switch} from '@headlessui/react'
import {useForm} from "antd/es/form/Form.js";
import {Form, Input, message} from "antd";
import TextArea from "antd/es/input/TextArea.js";
import {db} from "../config/firebase.config.js";
import {addDoc,collection} from "firebase/firestore"


export default function Contact() {
    const [agreed, setAgreed] = useState(false)
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = useForm();

    const Collection=collection(db,"contact_us")

    const onFormFinish = async (values) => {
        // Handle form submission
        if (!agreed) {
            messageApi.warning("Agree to privacy policy");
        } else {
            try {
                 await addDoc(Collection, values);
                messageApi.success("Message sent.").then(()=>form.resetFields());
            } catch (error) {
                console.error("Error adding document: ", error);
                messageApi.error("Failed to send. Please try again.");
            }
        }
    };


    const onFormFinishFailed = (errorInfo) => {
        // todo handle form finish fail
        console.log(errorInfo)
    };


    const rules={
        required:[{required:true,message:"Required field."}]
    }

    return (
        <div className="relative  isolate py-10 md:px-6 md:py-6" id='contact'>
        {contextHolder}
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
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Me</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                    Have a question or just want to connect? Feel free to reach out—I’d love to hear from you!
                </p>
            </div>


            <Form
                form={form}
                name="basic"
                layout="vertical"
                initialValues={{remember: true}}
                onFinish={onFormFinish}
                onFinishFailed={onFormFinishFailed}
                className='px-12'
            >
            <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
                    <Form.Item
                        rules={rules.required}
                        label="First name" name="firstName">
                        <Input
                            className="min-w-0 border-2 border-purple-400 flex-auto rounded-md  bg-white/5 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                            size={"large"}/>
                    </Form.Item>
                    <Form.Item
                        rules={rules.required}
                        label="Last name" name="lastName">
                        <Input
                            className="min-w-0 border-2 border-purple-400 flex-auto rounded-md  bg-white/5 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                            size={"large"}/>
                    </Form.Item>
                    <Form.Item
                        rules={rules.required}
                        label="Phone number" name="phone">
                        <Input
                            className="min-w-0 border-2 border-purple-400 flex-auto rounded-md  bg-white/5 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                            size={"large"}/>
                    </Form.Item>
                    <Form.Item
                        rules={rules.required}
                        label="Email address" name="email">
                        <Input
                            className="min-w-0 border-2 border-purple-400 flex-auto rounded-md  bg-white/5 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                            size={"large"}/>
                    </Form.Item>
                </div>
                <Form.Item
                    rules={rules.required}
                    label="Subject" name="subject">
                    <Input
                        className="min-w-0 border-2 border-purple-400 flex-auto rounded-md  bg-white/5 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        size={"large"}/>
                </Form.Item>

                <Form.Item
                    rules={rules.required}
                    label="Message" name="message">
                    <TextArea
                        className="min-w-0 border-2 border-purple-400 flex-auto rounded-md  bg-white/5 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        rows={4}/>
                </Form.Item>
                <Form.Item label="Switch"  valuePropName="checked">
                    <div className="flex h-6 items-center">
                        <Switch
                            checked={agreed}
                            onChange={setAgreed}
                            className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-[checked]:bg-indigo-600"
                        >
                            <span className="sr-only">Agree to policies</span>
                            <span
                                aria-hidden="true"
                                className="h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                            />
                        </Switch>
                        <label className="text-sm pl-3 leading-6 text-gray-600">
                            By selecting this, you agree to our{' '}
                            <a href="#" className="font-semibold text-indigo-600">
                                privacy&nbsp;policy
                            </a>
                            .
                        </label>
                    </div>
                </Form.Item>


                <div className="mt-10">
                    <button
                        type="submit"
                        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  focus-visible:outline-indigo-600"
                    >
                        Let's Talk
                    </button>
                </div>
            </Form>

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
