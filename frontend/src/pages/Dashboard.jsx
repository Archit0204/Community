import { useState } from "react"
import Posts from "../components/Posts"
import UploadPost from "../components/UploadPost"

export default () => {

    const [flag, setFlag] = useState(false);

    return (
        <div>
            <UploadPost setFlag={setFlag}/>
            <Posts flag={flag}/>
        </div>
    )

}