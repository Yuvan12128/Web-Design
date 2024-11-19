import { useParams } from "react-router-dom";

function User(){
    const {id}=useParams()
    return(
        <>
        <h1>Yuvan</h1>
        <p><b>{id}</b></p>
        </>
    )
}
export default User;