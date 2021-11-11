import style from "../styles/Home.module.css"
const Nav1 = () => {
    return (
        <div className={style.intro}>
       
            <div className="container mx-auto">
            <nav className="text-white">
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex justify-between">
					<div className="flex space-x-7">
						<div>
							
							<a href="#" className="flex items-center py-4 px-2">
								<img src="logo.png" alt="Logo" className="h-8 w-8 mr-2" />
								
							</a>
						</div>
					
						<div className="hidden md:flex items-center space-x-1">
							<a href="" className="py-4 px-2 text-white border-b-4 border-green-500 font-semibold ">Home</a>
							<a href="" className="py-4 px-2 text-white font-semibold hover:text-green-500 transition duration-300">Services</a>
							<a href="" className="py-4 px-2 text-white font-semibold hover:text-green-500 transition duration-300">About</a>
							<a href="" className="py-4 px-2 text-white font-semibold hover:text-green-500 transition duration-300">Contact Us</a>
						</div>
					</div>
					
					<div className="hidden md:flex items-center space-x-3 ">
						<a href="" className="py-2 px-2 font-medium text-white rounded hover:bg-green-500 hover:text-white transition duration-300">Log In</a>
						<a href="" className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Sign Up</a>
					</div>
				
					<div className="md:hidden flex items-center">
						<button className="outline-none mobile-menu-button">
						<svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
							x-show="!showMenu"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
					</div>
				</div>
			</div>
		
			<div className="hidden mobile-menu">
				<ul className="">
					<li className="active"><a href="index.html" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
					<li><a href="#services" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a></li>
					<li><a href="#about" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
					<li><a href="#contact" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
				</ul>
			</div>
		
		</nav>
            </div>
			<div className="container">
            {/* <div className="grid grid-cols-2 p-4 mt-8">  */}
			<div className="flex"> 
              <div className="mx-auto">
                   <div className="p-4 ml-5 text-left text-black1 text-8xl z-n1 opacity-80">
                        <h1>Payments</h1>
                         <h1>Infrastructure</h1>  {/* #3a3a3a */}
                        <h1>for the internet</h1>
                    </div>
                    <p className="text-xl m-4 max-w-screen-sm ">
                          Millions of businesses of all sizes—from startups to large enterprises—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.
                    </p>
                </div>
                    
                <div></div>
             </div>
            </div>
        </div>
    )
}

export default Nav1
