import Head from 'next/head'



export default function Navbar({ children }) {
  const defaultTheme = require('tailwindcss/defaultTheme')

  module.exports = {
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        },
      },
    },
    // ...
  }
  return (
    <div className="sticky top-0 z-50">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap"
          rel="stylesheet"
        />



      </head>

      <div className="w-full 
      
        bg-gradient-to-r
        from-pink-500
        via-red-500
        to-yellow-500
        background-animate
        @keyframes AnimationName
        ">


        <header class=" text-white body-font  ">
          <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span class="ml-3 text-xl text-white">PekaPay</span>
            </a>
            <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
              <a class="mr-5 items-center border-0 py-1 px-3  hover:bg-gray-200 rounded hover:text-gray-900">About</a>
              <a class="mr-5 items-center border-0 py-1 px-3 hover:bg-gray-200 rounded hover:text-gray-900">Pricing</a>
              <a class="mr-5 items-center border-0 py-1 px-3 hover:bg-gray-200 rounded hover:text-gray-900">Contact</a>
              <a class="mr-5 items-center border-0 py-1 px-3 hover:bg-gray-200 rounded hover:text-gray-900">service</a>
            </nav>
            <button class="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded hover:text-gray-900 mt-4 md:mt-0">Sign in
     
    
    </button>

          </div>
        </header>



      </div>
    </div>

  )
}
