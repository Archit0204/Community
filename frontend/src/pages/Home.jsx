import { Link } from "react-router-dom"

export default () => {
    return (
        <section className="flex-col h-full py-28 px-4 bg-gray-900 md:px-8">
            <div className="max-w-xl mx-auto text-center relative">
                <div className="py-4">
                    <h3 className="text-3xl text-gray-200 font-semibold md:text-4xl">
                        Get Unlimited Access To All Discussion Threads
                    </h3>
                    <p className="text-gray-300 leading-relaxed mt-3">
                    Create, join, and follow threads on a wide array of topics. From the latest trends and personal passions to thought-provoking questions and light-hearted banter, our platform is designed to foster engaging and respectful dialogue.
                    </p>
                </div>
                <div className="mt-5 items-center justify-center gap-3 sm:flex">
                    <Link to="/signup"
                        className="block w-full mt-2 py-2.5 px-8 text-gray-700 bg-white rounded-md duration-150 hover:bg-gray-100 sm:w-auto"
                    >
                        Try It Out
                    </Link>
                    <Link
                        to="/login"
                        className="block w-full mt-2 py-2.5 px-8 text-gray-300 bg-gray-700 rounded-md duration-150 hover:bg-gray-800 sm:w-auto"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </section>
    )
}
