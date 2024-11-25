
export default({setdarkmode, darkmode}) =>{
    function changeMode() {
        console.log("Mode Changed");
        console.log(darkmode);
        
        setdarkmode(!darkmode);
        console.log(darkmode);
        
    }
    return(
        <div className=" p-10 w-4/5">
            <ul classname="">
                <li className="mb-1 flex justify-between p-1 rounded-lg hover:border" onClick={changeMode} > Theme  <span className="material-icons"> light_mode </span></li>
                <li className="mb-1 flex justify-between p-1 rounded-lg hover:border">Language </li>
                <li className="mb-1 flex justify-between p-1 rounded-lg hover:border">Two-Factor Authentication (2FA)</li>
                <li className="mb-1 flex justify-between p-1 rounded-lg hover:border">Data Usage </li>
            </ul>
        </div>
    )
}