import { FaCheckCircle } from 'react-icons/fa'
import {  MessageSuccess } from "./styles";

interface Props {
    id: string
    message: string
}

export function SuccessMessageForm({ id, message }: Props) {
    return (


        <MessageSuccess id={`message-success-${id}`}>
            <FaCheckCircle size={30} />
            <span id={`message-success-${id}-text`}>{message}</span>
        </MessageSuccess>
    )
}