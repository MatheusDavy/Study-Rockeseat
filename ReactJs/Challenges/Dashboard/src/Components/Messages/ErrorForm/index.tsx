import { RiErrorWarningFill } from 'react-icons/ri'
import { MessageError } from "./styles";

interface Props {
    id: string
    message: string
}

export function ErrorMessageForm({id, message}:Props){
    return(
        <MessageError id={`message-error-${id}`}>
            <RiErrorWarningFill />
            <span id={`message-error-${id}-text`}></span>
        </MessageError>
    )
}