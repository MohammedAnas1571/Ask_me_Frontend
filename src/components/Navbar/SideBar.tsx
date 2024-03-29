import { Outlet } from "react-router-dom"


const SideBar = () => {
  return (
   <div className="flex flex-row min-h-screen text-gray-800 border border-red-500">
  
          <aside
              className=" w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 "
          >
              <div className=" flex items-center justify-center py-4">
                  <div className="inline-flex">
                      <div className="inline-flex flex-row items-center">

                          <span className=" text-black text-2xl font-bold ml-1 uppercase">smartup</span>
                      </div>
                  </div>
              </div>
              <div className=" px-4 py-6">
                  <ul className="flex flex-col w-full">
                      <li className="my-px">
                          <a
                              href="#"
                              className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 bg-gray-100"
                          >
                              <span className="flex items-center justify-center text-lg text-gray-400">
                                  <svg
                                      fill="none"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      className="h-6 w-6"
                                  >
                                      <path
                                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                  </svg>
                              </span>
                              <span className="ml-3">Dashboard</span>
                          </a>
                      </li>

                      <li className="my-px">
                          <a
                              href="#"
                              className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                          >
                              <span className="flex items-center justify-center text-lg text-gray-400">
                                  <svg
                                      fill="none"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      className="h-6 w-6"
                                  >
                                      <path
                                          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                  </svg>
                              </span>
                              <span className="ml-3">Manager</span>
                          </a>
                      </li>

                      <li className="my-px">
                          <div
                              className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                          >
                              <span className="flex items-center justify-center text-lg text-red-400">
                                  <svg
                                      fill="none"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      className="h-6 w-6"
                                  >
                                      <path
                                          d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                                  </svg>
                              </span>
                              <span className="ml-3">Logout</span>
                          </div>
                      </li>
                  </ul>
              </div>
          </aside>
     <Outlet/>
  </div>
  )
}

export default SideBar