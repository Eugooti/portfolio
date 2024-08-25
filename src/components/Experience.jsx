import {Timeline} from "antd";
import {Link} from "react-router-dom";

const Experience = () => {
  return(
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

          <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="text-3xl pb-4 font-bold tracking-tight text-gray-900 sm:text-4xl">Experience</h2>
              <Timeline mode="alternate" className='py-5'>
                  <Timeline.Item color={'green'} label="2022/09/01 - 2023/04/01 ">
                      <div className='pb-4'>
                          <h2 className='text-lg font-bold'>Project Coordinator</h2>
                          <ul>
                              <li>Coordinated the development of Home of Students</li>
                              <li>Tasked in the design and development of the Client side</li>
                              <li>Project Documentation.</li>
                          </ul>
                          <Link
                              className="text-sm text-blue-800 font-semibold leading-6"
                              to="https://github.com/Eugooti/Homii_Application.git">
                              Open project <span aria-hidden="true">→</span>
                          </Link>

                      </div>
                  </Timeline.Item>
                  <Timeline.Item  color='red' label="2022/06/13 - 2022/08/26">
                      <div className='pb-4'>
                          <h2 className='text-lg font-bold'>Software Engineering intern</h2>
                          <ul>
                              <li>Provided ICT Support.</li>
                              <li>Tested their Android and IOS Application.</li>
                              <li>Conducted a cyber drill.</li>
                          </ul>
                      </div>

                  </Timeline.Item>
                  <Timeline.Item label="2024/01/03 - 2024/06/21">
                      <h2 className='text-lg font-bold'>Computer Studies Teacher</h2>
                      <ul>
                          <li>Provided ICT Support.</li>
                          <li>Developed School LMS API.</li>
                      </ul>
                  </Timeline.Item>
              </Timeline>


          </div>

          <div
              aria-hidden="true"
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl
                  sm:top-[calc(100%-30rem)]"
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
  )
}
export default Experience;