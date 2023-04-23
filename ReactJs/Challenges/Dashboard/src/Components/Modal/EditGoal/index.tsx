import { useEffect, useState } from "react";
import nextId from "react-id-generator";

/* ----------/ Context /---------*/
import { useGoalsContext } from "../../../Context/Goals";
import { colorsAvailable, iconsAvailble } from "../../../Context/Goals/datas";
import { maskInputCurrency } from "../../../Context/Utils/maskCurrency";
import * as validateType from '../../../Context/Utils/FormValidate/type-validate'
import { defaultClassError } from "../../../Context/Utils/FormValidate/type-validate";

/* ----------/ Components /---------*/
//Styles
import {
    ModalContainer,
    ModalLayer,
    ModalHeader,
    ButtonSubmit,
    FormsContainer,
    GroupButton,
    ButtonContainer,
    MessageError
} from "./styles";

//import
import { InputGroup } from "../../InputsGoals";
import { ButtonIcon } from "../../Buttons/SelectIcons";
import { ButtonColor } from "../../Buttons/SelectColors";

/* ----------/ Icon /---------*/
import { IoMdClose } from "react-icons/io";
import { FaClipboardList } from "react-icons/fa";
import { RiErrorWarningLine } from 'react-icons/ri'

/* ----------/ Interfaces /---------*/
import { GoalsProps } from "../../../Context/Goals/interfaces";
import SubmitFieldsToValidate from "../../../Context/Utils/FormValidate/validate";

/*
    SUMMARY
    1 - States / Const / Variables
    2 - UseEffects
    3 - Functions
    4 - Return Element

*/

const initalValues: GoalsProps = {
    id: '',
    name: '',
    date: '',
    amountInitial: '',
    amountFinal: '',
    bgColor: '',
    icon: '',
    percent: 0
}

export function GoalsEditModal() {
    /* ----------/ 1 - States / Const / Variables /---------*/
    const messageId = 'goals-edit'
    const { isOpenEditModal, goals_API, openCloseEditModal, actionCurrent } = useGoalsContext();
    const [inputsValues, setInputValues] = useState(initalValues)
    const [selectColor, setSelectColor] = useState<number | null>(null);
    const [selectIcon, setSelectIcon] = useState<number | null>(null);

    /* ----------/ 2 - UseEffects /---------*/

    useEffect(() => {
        let findDatas

        goals_API.forEach(goal => {
            if (goal.id == isOpenEditModal.id_WillEdited) {
               findDatas = goal
            }
        })

        if(findDatas) setInputValues(findDatas)
    }, [isOpenEditModal])

    /* ----------/ 2 - Functions /---------*/
    function handleCloseModal() {
        openCloseEditModal(false, '');
    }

    const activeButtonColor = (color: string, index: number) => {
        if (selectColor == index) {
            setInputValues({ ...inputsValues, bgColor: '' })
            return setSelectColor(null)
        }
        setSelectColor(index)

        setInputValues({ ...inputsValues, bgColor: color })
    }

    const activeButtonIcon = (icon: string, index: number) => {
        if (selectIcon == index) {
            setInputValues({ ...inputsValues, icon: '' })
            return setSelectIcon(null)
        }
        setSelectIcon(index)

        setInputValues({ ...inputsValues, icon: icon })
    }

    function handleInputValues(event: React.ChangeEvent<HTMLInputElement>) {
        const fieldName = event.target.name
        const fieldValue = event.target.value
        const currencyField = fieldName == 'amountInitial' || fieldName == 'amountFinal'

        switch (currencyField) {
            case true : {
                const newData = maskInputCurrency(fieldValue)
                setInputValues((current) => {
                    return {
                        ...current,
                        [fieldName]: newData
                    }
                })
                break
            }
            default: {
                setInputValues((current) => {
                    return {
                        ...current,
                        [fieldName]: fieldValue
                    }
                })
                break
            }
        }

    }

    function handleSubmit() {
        event?.preventDefault()
        let error = false

        let name = {
            values: inputsValues.name,
            type: validateType.TYPE_NOT_NULL,
            messageErrorId: `${messageId}-name`
        }

        let date = {
            values: inputsValues.date,
            type: validateType.TYPE_NOT_NULL,
            messageErrorId: `${messageId}-date`
        }

        let finalAmount = {
            values: inputsValues.amountFinal,
            type: validateType.TYPE_CURRENCY,
            messageErrorId: `${messageId}-amountFinal`
        }

        let initialAmount = {
            values: inputsValues.amountInitial,
            type: validateType.TYPE_CURRENCY,
            messageErrorId: `${messageId}-amountInitial`
        }

        let bgColor = {
            values: inputsValues.bgColor,
            type: validateType.TYPE_NOT_NULL,
            messageErrorId: `${messageId}-bgcolor`
        }

        let icon = {
            values: inputsValues.icon,
            type: validateType.TYPE_NOT_NULL,
            messageErrorId: `${messageId}-icon`
        }

        const isItAllowedToSend = new SubmitFieldsToValidate([name, date, icon, finalAmount, initialAmount, bgColor])


        if (isItAllowedToSend) {
            actionCurrent.updateGoals(inputsValues)
            handleCloseModal()
            return 0
        }
    }

    /* ----------/ 3 - Return Element /---------*/

    return (

        <ModalLayer isOpen={isOpenEditModal.isOpenModal}>
            <ModalContainer>
                <ModalHeader>
                    <h1 className="title">Edit Goals</h1>
                    <button className="btn--close-modal-goals" onClick={handleCloseModal}>
                        <IoMdClose size={24} />
                    </button>
                </ModalHeader>

                <FormsContainer id="goal-edit-form" onSubmit={handleSubmit}>
                    <div className="item item-1">

                        <InputGroup
                            idError={`${messageId}-name`}
                            messageError="Nome inválido"
                            name="name"
                            value={inputsValues.name}
                            typeInput="text"
                            typeFormat="default"
                            setValue={(event)=> handleInputValues(event)}
                            icon={<FaClipboardList size={20} />}
                            label='Nome'
                            borderBottom={true}
                            placeholder='Novo Carro'
                        />

                        <InputGroup
                            idError={`${messageId}-date`}
                            messageError="Data inválido"
                            name="date"
                            value={inputsValues.date}
                            typeInput="date"
                            typeFormat="default"
                            setValue={(event)=> handleInputValues(event)}
                            icon={<FaClipboardList size={20} />}
                            label='Data'
                            borderBottom={true}
                            placeholder='21/02/2014'
                        />

                        <GroupButton>
                            <span>Icone</span>
                            <ButtonContainer>

                                {iconsAvailble.map((icon: any, index: number) =>(
                                    <div key={index}>
                                        <ButtonIcon 
                                        active={selectIcon == index}
                                        index={index}
                                        icon={icon}
                                        selectButton={activeButtonIcon}
                                    />
                                    </div>
                                ))}
                            </ButtonContainer>
                            <MessageError id={`message-error-${messageId}-icon`} className={defaultClassError}>
                                <RiErrorWarningLine size={13} />
                                Selecione um icone
                            </MessageError>
                        </GroupButton>
                    </div>

                    <div className="item item-2">

                        <InputGroup
                            idError={`${messageId}-amountFinal`}
                            messageError="Valor inválido"
                            name="amountFinal"
                            value={inputsValues.amountFinal}
                            typeInput="text"
                            typeFormat="currency"
                            setValue={(event)=> handleInputValues(event)}
                            icon={<FaClipboardList size={20} />}
                            label='Goal value final'
                            borderBottom={true}
                            placeholder='3.000,00'
                        />

                        <InputGroup
                            idError={`${messageId}-amountInitial`}
                            messageError="Valor inválido"
                            name="amountInitial"
                            value={inputsValues.amountInitial}
                            typeInput="text"
                            typeFormat="currency"
                            setValue={(event)=> handleInputValues(event)}
                            icon={<FaClipboardList size={20} />}
                            label='Goal value initial'
                            borderBottom={true}
                            placeholder='1.000,00'
                        />

                        <GroupButton className="group--bgColor">
                            <span>Color</span>
                            <ButtonContainer>

                                {colorsAvailable.map((color: string, index: number) => (
                                    <div key={index}>
                                        <ButtonColor
                                        bgColor={color}
                                        selectButton={activeButtonColor}
                                        active={selectColor == index}
                                        index={index}
                                    />
                                    </div>
                                ))}

                            </ButtonContainer>

                            <MessageError id={`message-error-${messageId}-bgcolor`} className={defaultClassError}>
                                <RiErrorWarningLine size={13} />
                                Selecione uma cor
                            </MessageError>
                            
                        </GroupButton>

                    </div>
                </FormsContainer>

                <ButtonSubmit type="submit" form="goal-edit-form">
                    ENVIAR
                </ButtonSubmit>
            </ModalContainer>
        </ModalLayer>


    );
}

