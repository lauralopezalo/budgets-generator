import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                <p className="text-base font-semibold text-tangerine">404</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
                <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link to='/budget' className="border-2 border-tangerine bg-white font-bold text-tangerine rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-tangerine hover:text-white active:bg-orange-500">Go back home</Link>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound;