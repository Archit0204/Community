import { Link } from "react-router-dom";
import '../css/Home.css';
import Footer from '../components/Footer';
import logo from '../assets/images/discussion_dock.png';


export default () => {
    return (
        // <section className="flex-col h-full py-28 px-4 bg-gray-900 md:px-8">
        //     <div className="max-w-xl mx-auto text-center relative">
        //         <div className="py-4">
        //             <h3 className="text-3xl text-gray-200 font-semibold md:text-4xl">
        //                 Get Unlimited Access To All Discussion Threads
        //             </h3>
        //             <p className="text-gray-300 leading-relaxed mt-3">
        //             Create, join, and follow threads on a wide array of topics. From the latest trends and personal passions to thought-provoking questions and light-hearted banter, our platform is designed to foster engaging and respectful dialogue.
        //             </p>
        //         </div>
        //         <div className="mt-5 items-center justify-center gap-3 sm:flex">
        //             <Link to="/signup"
        //                 className="block w-full mt-2 py-2.5 px-8 text-gray-700 bg-white rounded-md duration-150 hover:bg-gray-100 sm:w-auto"
        //             >
        //                 Try It Out
        //             </Link>
        //             <Link
        //                 to="/login"
        //                 className="block w-full mt-2 py-2.5 px-8 text-gray-300 bg-gray-700 rounded-md duration-150 hover:bg-gray-800 sm:w-auto"
        //             >
        //                 Get Started
        //             </Link>
        //         </div>
        //     </div>
        // </section>

        <section className=" main w-full flex-col justify-start items-center">

            <div className="navbar "> 
                <img src={logo} alt="logo_img" />

                <button className="tryitout"> <Link to="/signup"> Try It Out </Link>  </button>

                <Link to="/login"> <button className="login_main">  Login <i className="material-icons">chevron_right</i>  </button> </Link>


            </div>

            <div className="about">
                <h1> Share, Learn, Connect </h1>
                <p>Join threads on trending topics, personal interests, and questions to </p>
                    <p>spark engaging, respectful dialogue.</p>
            </div>

            <div className="tabsDiv">
                <ul>
                    <li className="tabList">
                        <div className="lessContent">
                            <div className="left">
                                Trending
                            </div>
                            <div className="material-icons">
                                whatshot
                            </div>
                        </div>
                        <div className="boldContent">
                                Entertainment
                        </div>
                    </li>
                    <li>

                    <div className="listImg"> 
                        <div> <h1>Akon </h1> <span className="material-icons">bookmark</span> 
                        </div>
                        <div className="w-fit">
                            <span className="material-icons"> favorite</span>
                            <span className="material-icons"> comment</span>
                            <span className="material-icons"> send</span>
                        </div>
                    </div>


                    </li>
                    <li className="tabList">
                    <div className="lessContent">
                            <div className="left">
                                Live Score
                            </div>
                            <div className="material-icons">
                            sports_score
                            </div>
                        </div>
                        <div className="boldContent">
                                Sports
                        </div>
                    </li>
                    <li className="tabList">
                    <div className="lessContent">
                            <div className="left">
                                AI Innovation
                            </div>
                            <div className="material-icons">
                            psychology
                            </div>
                        </div>
                        <div className="boldContent">
                                Education
                        </div>
                    </li>
                    <li className="tabList">
                    <div className="lessContent">
                            <div className="left">
                                Hot Topics
                            </div>
                            <div className="material-icons">
                            newspaper
                            </div>
                        </div>
                        <div className="boldContent">
                                News
                        </div>
                    </li>
                    <li>
                    <div className="listImg2"> 
                        <div> <h1> Seria </h1> <span className="material-icons">bookmark</span> 
                        </div>
                        <div className="w-fit">
                            <span className="material-icons"> favorite</span>
                            <span className="material-icons"> comment</span>
                            <span className="material-icons"> send</span>
                        </div>
                    </div>
                    </li>
                    <li className="tabList">
                    <div className="lessContent">
                            <div className="left">
                                Wind Speed
                            </div>
                            <div className="material-icons">
                            air
                            </div>
                        </div>
                        <div className="boldContent">
                                Nature
                        </div>
                    </li>
                </ul>
            </div>
            

            <ul className="background">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>

            <Footer />
            
        </section>
    )
}
