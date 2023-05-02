import { toast } from "react-toastify";
import { ApiUpload } from "../Api/ApiData";

export const handleUploadImage = async (e, setterFun) => {
    let file = e.target.files[0];
    let allowedExtensions = /(\/jpg|\/jpeg|\/png|\/gif)$/i;
    let formData = new FormData();
    formData.append("image", file);
    if (allowedExtensions.exec(file?.type)) {

        try {
            ApiUpload("/upload/file", formData, {
                Headers: {
                    "Content-Type": "multipart/form-data",
                },
            }).then((response) => {
                console.log(response)
                setterFun(response?.data?.data?.image)
                toast.success('Uploaded Successfully')
                return;
            }).catch((error) => {
                toast.error(error?.message)
                return;
            })
        } catch (error) {
            toast.error(error?.message)
            return;

        }
    } else {
        toast.error('Not Valid File Type')
        return;
    }
};