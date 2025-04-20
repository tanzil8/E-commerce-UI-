import { toast } from "react-toastify";

// Success Toast
export const handleSuccess = (msg) => {
    toast.success(msg, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,       // Optional: closes after 3s
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};

// Error Toast
export const handleError = (msg) => {
    toast.error(msg, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,       // Optional
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};
