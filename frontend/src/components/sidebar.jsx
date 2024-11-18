import '../css/Sidebar.css';
import logo from '../assets/images/discussion_dock.png';
import { Link } from 'react-router-dom';


export default () => {
    return(
        <div className=" main_sidebar min-h-screen  text-white">
            <div className=" w-full logo_div flex items-center justify-begin"> 
                <img src={logo} alt="logo img" className="h-20 w-25" /> 
                <div className=" text-2xl div_logotext "> DISCUSSION DOCK  </div> 
            </div>

            <div className="idteller"> 
                
            </div>

            <ul className='space-y-5'>
                <li> <Link to="" className='flex'>  <i className='material-icons'> home </i>  Home </Link>  </li> 
                <li> <Link to="communities" className='flex'>  <i className='material-icons'>  menu </i> Communities </Link></li>  
                <li> <Link to="profile" className='flex'> <i className='material-icons'> person </i> Profile </Link> </li> 
            </ul>
            
        </div>
    )
}