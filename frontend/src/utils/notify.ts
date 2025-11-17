import toast from 'react-hot-toast'

export type ToastShape = {
    type: "success" | "error",
    message: string
}

export const notify = ({ type, message }: ToastShape) => {
    switch(type){
        case "success":
            toast.success(message)
            break

        case "error":
            toast.error(message)
            break
    }
}