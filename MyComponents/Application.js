import style from '../styles/Application.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faMobile } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

const Applications = () => {
    return (
        <div className={style.application}>
            <div className="grid grid-cols-2 p-4">
                <div >
                    <h6 className="mx-auto text-blue1 w-80">Optical Technological Solutions</h6>
                    <h2 className="mx-auto text-white w-80 mt-4">Modern Solutions for Moder Problems</h2>
                    <h2 className="mx-auto text-white w-80 mt-4">Modern Solutions for Moder Problems</h2>
                </div>
                <div >
                    <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="w-1/3 bg-cover bg-landscape">
                            <div style={{textAlign:"center",}} className="mt-5">
                           <FontAwesomeIcon style={{fontSize:"3rem",}} icon={faMobile}></FontAwesomeIcon>
                           </div>
                        </div>
                        <div className="w-2/3 p-4">
                            <h1 className="text-gray-900 font-bold text-2xl">
                                PekaPay
                            </h1>
                            <p className="mt-2 text-gray-600 text-sm">
                                You can&#x27;t buy your future, but you can do it. Money is nothing, you&#x27;r everything.
                            </p>


                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Applications
