import React from 'react'

function HeroSection() {
  return (
    <div>
       <section className="w-3/4 border border-y-0 border-gray-800" style={{ maxWidth: '800px' }}>
                            {/* Content (Center) */}
                            <aside>
                                <div className="flex">
                                    <div className="flex-1 mx-2">
                                        <h2 className="px-4 py-2 text-xl font-semibold text-white">Home</h2>
                                    </div>
                                    <div className="flex-1 px-4 py-2 mx-2">
                                        <a href="/" className=" text-2xl font-medium rounded-full text-white hover:bg-gray-800 hover:text-blue-300 float-right">
                                            <svg className="m-2 h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                                <g>
                                                    <path d="M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zm-6.49 2.32c-.208.08-.37.25-.44.46l-1.56 4.695-1.56-4.693c-.07-.21-.23-.38-.438-.462l-4.155-1.62 4.154-1.622c.208-.08.37-.25.44-.462l1.56-4.693 1.56 4.694c.07.212.23.382.438.463l4.155 1.62-4.155 1.622zM6.663 3.812h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75s-.335-.75-.75-.75zm2.535 15.622h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z">
                                                    </path>
                                                </g>
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                                <hr className="border-gray-800" />

                                <div className="flex">
                                    <div className="m-2 w-10 py-1">
                                        <img className="inline-block h-10 w-10 rounded-full" src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png" alt="" />
                                    </div>
                                    <div className="flex-1 px-2 pt-2 mt-2">
                                        <textarea className=" bg-transparent text-gray-400 font-medium text-lg w-full" rows="2" cols="50" placeholder="What's happening?"></textarea>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="w-10"></div>

                                    <div className="w-64 px-2">

                                        <div className="flex items-center">
                                            <div className="flex-1 text-center px-1 py-1 m-2">
                                                <a href="/" className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300">
                                                    <svg className="text-center h-7 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z">
                                                        </path>
                                                    </svg>
                                                </a>
                                            </div>

                                            <div className="flex-1 text-center py-2 m-2">
                                                <a href="/" className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300">
                                                    <svg className="text-center h-7 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z">
                                                        </path>
                                                        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                    </svg>
                                                </a>
                                            </div>

                                            <div className="flex-1 text-center py-2 m-2">
                                                <a href="/" className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300">
                                                    <svg className="text-center h-7 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z">
                                                        </path>
                                                    </svg>
                                                </a>
                                            </div>

                                            <div className="flex-1 text-center py-2 m-2">
                                                <a href="/" className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300">
                                                    <svg className="text-center h-7 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                                                        </path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        <button className="bg-blue-400 hover:bg-blue-500 mt-5 text-white font-bold py-2 px-8 rounded-full mr-8 float-right">
                                            Tweet
                                        </button>
                                    </div>
                                </div>

                                <hr className="border-gray-800 border-4" />
                            </aside>
                            <ul className="list-none">
                                <li>
                                    {/* <!--second tweet--> */}
                                    <article className="hover:bg-gray-800 transition duration-350 ease-in-out">
                                        <div className="flex flex-shrink-0 p-4 pb-0">
                                            <a href="/" className="flex-shrink-0 group block">
                                                <div className="flex items-center">
                                                    <div>
                                                        <img className="inline-block h-10 w-10 rounded-full" src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png" alt="" />
                                                    </div>
                                                    <div className="ml-3">
                                                        <p className="text-base leading-6 font-medium text-white">
                                                            Sonali Hirave
                                                            <span className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                                                                @ShonaDesign  . 16 April
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="pl-16">
                                            <p className="text-base width-auto font-medium text-white flex-shrink">
                                                Day 07 of the challenge <a href="/" className="text-blue-400">#100DaysOfCode</a>
                                                I was wondering what I can do with <a href="/" className="text-blue-400">#tailwindcss</a>, so just started building
                                                Twitter UI using Tailwind and so far it looks so promising. I will post my code after completion.
                                                [07/100]
                                                <a href="/" className="text-blue-400"> #WomenWhoCode #CodeNewbie</a>
                                            </p>

                                            <div className="md:flex-shrink pr-6 pt-3">
                                                <div className="bg-cover bg-no-repeat bg-center rounded-lg w-full h-64" style={{ height: '200px', backgroundImage: 'url(https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80)' }}>
                                                    <img className="opacity-0 w-full h-full" src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80" alt="" />
                                                </div>
                                            </div>

                                            <div className="flex items-center py-4">
                                                <div className="flex-1 flex items-center  text-xs text-gray-400 hover:text-blue-400 transition duration-350 ease-in-out">
                                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                                                        <g>
                                                            <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
                                                        </g>
                                                    </svg>
                                                    12.3 k
                                                </div>
                                                <div className="flex-1 flex items-center  text-xs text-gray-400 hover:text-green-400 transition duration-350 ease-in-out">
                                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                                                        <g>
                                                            <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path>
                                                        </g>
                                                    </svg>
                                                    14 k
                                                </div>
                                                <div className="flex-1 flex items-center text-xs text-gray-400 hover:text-red-600 transition duration-350 ease-in-out">
                                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                                                        <g>
                                                            <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
                                                        </g>
                                                    </svg>
                                                    14 k
                                                </div>
                                                <div className="flex-1 flex items-center text-xs text-gray-400 hover:text-blue-400 transition duration-350 ease-in-out">
                                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                                                        <g>
                                                            <path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path>
                                                            <path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>

                                        </div>
                                        <hr className="border-gray-800" />
                                    </article>
                                </li>
                                <li>
                                    {/* <!--second tweet--> */}
                                    <article className="hover:bg-gray-800 transition duration-350 ease-in-out">
                                        <div className="flex flex-shrink-0 p-4 pb-0">
                                            <a href="/" className="flex-shrink-0 group block">
                                                <div className="flex items-center">
                                                    <div>
                                                        <img className="inline-block h-10 w-10 rounded-full" src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png" alt="" />
                                                    </div>
                                                    <div className="ml-3">
                                                        <p className="text-base leading-6 font-medium text-white">
                                                            Sonali Hirave
                                                            <span className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                                                                @ShonaDesign  . 16 April
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="pl-16">
                                            <p className="text-base width-auto font-medium text-white flex-shrink">
                                                Day 07 of the challenge <a href="/" className="text-blue-400">#100DaysOfCode</a>
                                                I was wondering what I can do with <a href="/" className="text-blue-400">#tailwindcss</a>, so just started building
                                                Twitter UI using Tailwind and so far it looks so promising. I will post my code after completion.
                                                [07/100]
                                                <a href="/" className="text-blue-400"> #WomenWhoCode #CodeNewbie</a>
                                            </p>

                                            <div className="md:flex-shrink pr-6 pt-3">
                                                <div className="bg-cover bg-no-repeat bg-center rounded-lg w-full h-64" style={{ height: '200px', backgroundImage: 'url(https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80)' }}>
                                                    <img className="opacity-0 w-full h-full" src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80" alt="" />
                                                </div>
                                            </div>

                                            <div className="flex items-center py-4">
                                                <div className="flex-1 flex items-center  text-xs text-gray-400 hover:text-blue-400 transition duration-350 ease-in-out">
                                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                                                        <g>
                                                            <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
                                                        </g>
                                                    </svg>
                                                    12.3 k
                                                </div>
                                                <div className="flex-1 flex items-center  text-xs text-gray-400 hover:text-green-400 transition duration-350 ease-in-out">
                                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                                                        <g>
                                                            <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path>
                                                        </g>
                                                    </svg>
                                                    14 k
                                                </div>
                                                <div className="flex-1 flex items-center  text-xs text-gray-400 hover:text-red-600 transition duration-350 ease-in-out">
                                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                                                        <g>
                                                            <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
                                                        </g>
                                                    </svg>
                                                    14 k
                                                </div>
                                                <div className="flex-1 flex items-center  text-xs text-gray-400 hover:text-blue-400 transition duration-350 ease-in-out">
                                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                                                        <g>
                                                            <path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path>
                                                            <path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>

                                        </div>
                                        <hr className="border-gray-800" />
                                    </article>
                                </li>
                                <li>
                                    {/* <!--second tweet--> */}
                                    <article className="hover:bg-gray-800 transition duration-350 ease-in-out">
                                        <div className="flex flex-shrink-0 p-4 pb-0">
                                            <a href="/" className="flex-shrink-0 group block">
                                                <div className="flex items-center">
                                                    <div>
                                                        <img className="inline-block h-10 w-10 rounded-full" src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png" alt="" />
                                                    </div>
                                                    <div className="ml-3">
                                                        <p className="text-base leading-6 font-medium text-white">
                                                            Sonali Hirave
                                                            <span className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                                                                @ShonaDesign  . 16 April
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="pl-16">
                                            <p className="text-base width-auto font-medium text-white flex-shrink">
                                                Day 07 of the challenge <a href="/" className="text-blue-400">#100DaysOfCode</a>
                                                I was wondering what I can do with <a href="/" className="text-blue-400">#tailwindcss</a>, so just started building
                                                Twitter UI using Tailwind and so far it looks so promising. I will post my code after completion.
                                                [07/100]
                                                <a href="/" className="text-blue-400"> #WomenWhoCode #CodeNewbie</a>
                                            </p>

                                            <div className="md:flex-shrink pr-6 pt-3">
                                                <div className="bg-cover bg-no-repeat bg-center rounded-lg w-full h-64" style={{ height: '200px', backgroundImage: 'url(https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80)' }}>
                                                    <img className="opacity-0 w-full h-full" src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80" alt="" />
                                                </div>
                                            </div>

                                            <div className="flex items-center py-4">
                                                <div className="flex-1 flex items-center  text-xs text-gray-400 hover:text-blue-400 transition duration-350 ease-in-out">
                                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                                                        <g>
                                                            <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
                                                        </g>
                                                    </svg>
                                                    12.3 k
                                                </div>
                                                <div className="flex-1 flex items-center  text-xs text-gray-400 hover:text-green-400 transition duration-350 ease-in-out">
                                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                                                        <g>
                                                            <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path>
                                                        </g>
                                                    </svg>
                                                    14 k
                                                </div>
                                                <div className="flex-1 flex items-center e text-xs text-gray-400 hover:text-red-600 transition duration-350 ease-in-out">
                                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                                                        <g>
                                                            <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
                                                        </g>
                                                    </svg>
                                                    14 k
                                                </div>
                                                <div className="flex-1 flex items-center  text-xs text-gray-400 hover:text-blue-400 transition duration-350 ease-in-out">
                                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                                                        <g>
                                                            <path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path>
                                                            <path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>

                                        </div>
                                        <hr className="border-gray-800" />
                                    </article>
                                </li>
                            </ul>

                        </section>
    </div>
  )
}

export default HeroSection
