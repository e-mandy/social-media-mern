import toast from 'react-hot-toast'

export type ToastShape = {
    type: "success" | "error",
    message: string
}

export const notify = (Content: ToastShape) => {
    const { type, message } = Content;
    switch(type){
        case "success":
            toast.success(message)
            break

        case "error":
            toast.error(message)
            break
    }
}