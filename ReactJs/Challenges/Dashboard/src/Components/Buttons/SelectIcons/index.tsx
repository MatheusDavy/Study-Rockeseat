import { Button } from "./styles"
import { BsFillHouseFill } from 'react-icons/bs'
import { AiFillCar } from 'react-icons/ai'
import { GiReceiveMoney } from 'react-icons/gi'
import { IoPhonePortrait } from 'react-icons/io5'

interface Props {
    icon: any
    active: boolean
    selectButton: (color: string, index: number) => void
    index: number
}

export function ButtonIcon({ icon, active, index, selectButton }: Props) {

    function handleSelectIcon(event: React.MouseEvent<HTMLButtonElement>) {
        const buttonSelected = event.target as HTMLButtonElement
        const icon = buttonSelected.dataset.icon;
        selectButton(icon!, index)
    }

    return (
        <Button
            className="color--button"
            active={active}
            data-icon={icon}
            onClick={(e) => handleSelectIcon(e)}
            type="button"
        >
            {icon}
        </Button>
    )
}
