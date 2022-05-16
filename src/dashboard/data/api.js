import axios from "axios";
import Swal from "sweetalert2";

export const multipleFilesUpload=async(data)=>{
    try {
        await axios.post('https://automartbackend.herokuapp.com/api/multiplefile/addmultiplefile', data).then((response)=>{
            if(response.data==="file uploaded successfully"){
                new Swal("You have Post a new Car Successfully")
                window.location.reload();
            }else{
                new Swal("Oops!!! Something went Wrong")
            }
        })
    } catch (error) {
        throw error;
    }
}