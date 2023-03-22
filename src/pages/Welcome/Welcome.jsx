import React from "react";
import { Link } from 'react-router-dom';
// import { StyledWelcome, StyledDescription, StyledStartButton } from "./Welcome.styles";


// const Welcome = (props) => {
//     return (
//         <StyledWelcome>
//             <StyledDescription>
//                 Benvingut a la web de pressupostos.
//                 <br /> <br />Aquí podràs crear pressupostos detallats per als teus projectes de pàgines web, consultoria SEO i Google Adds.
//             </StyledDescription>
//             <StyledStartButton><Link to='/budget'>Començar</Link>
//             </StyledStartButton>
//         </StyledWelcome>
//     );
// }

// export default Welcome;

const Welcome = () => {
    return (
        <div className="bg-orange-400 min-h-screen flex items-center">
            <div className="mx-auto max-w-2xl sm:px-6 sm:py-32 lg:px-8 max-h-screen">
                <div className="flex items-center relative overflow-hidden min-h-screen sm:min-h-fit bg-stone-100 px-6 py-16 shadow-2xl sm:rounded-3xl lg:px-24 ">
                    <svg
                        viewBox="0 0 1024 1024"
                        className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
                        aria-hidden="true"
                    >
                        <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                        <defs>
                            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                <stop stopColor="#fb923c" />
                                <stop offset={1} stopColor="#f87171" />
                            </radialGradient>
                        </defs>
                    </svg>
                    <div className=" text-center lg:py-20">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Welcome to the budgets generator
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-700">
                            You can create detailed budgets for your website projects, SEO consulting and Google Ads campaigns here.
                        </p>
                        <div className="mt-10 flex items-center justify-center">
                            <button className="rounded-md bg-orange-400 text-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-red-400">
                                <Link to='/budget'>Get started</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Welcome;