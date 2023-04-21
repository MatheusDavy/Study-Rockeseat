import { useEffect, useState } from "react";
import nextId from "react-id-generator";

/* ----------/ Context /---------*/
import { useGoalsContext } from "../../../Context/Goals";
import { colorsAvailable, iconsAvailble } from "../../../Context/Goals/datas";
import { maskInputCurrency } from "../../../Context/Utils/maskCurrency";

/* ----------/ Components /---------*/
//Styles
import {
    ModalContainer,
    ModalLayer,
    ModalHeader,
    ButtonSubmit,
    FormsContainer,
    GroupButton,
    ButtonContainer
} from "./styles";

//import
import { InputGroup } from "../../InputsGoals";
import { ButtonIcon } from "../../Buttons/SelectIcons";
import { ButtonColor } from "../../Buttons/SelectColors";

/* ----------/ Icon /---------*/
import { IoMdClose } from "react-icons/io";
import { FaClipboardList } from "react-icons/fa";

/* ----------/ Interfaces /---------*/
import { GoalsProps } from "../../../Context/Goals/interfaces";

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
            return setSelectColor(null)
        }
        setSelectColor(index)

        setInputValues({ ...inputsValues, bgColor: color })
    }

    const activeButtonIcon = (icon: string, index: number) => {
        if (selectIcon == index) {
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

        // Forms Validation
        // if (!inputsValues.name) {
        //     error = true
        //     // callMessageError('Nome inválido')
        //     return 0
        // }

        // if(!inputsValues.date){
        //     error = true
        //     // callMessageError('Data inválida')
        //     return 0
        // }

        // if ((!goalAmount || goalAmount[0] == '0') && !error) {
        //     error = true
        //     // callMessageError('O valor não pode ser 0!')
        //     return 0
        // }

        // if ((!initialGoalAmount || initialGoalAmount[0] == '0') && !error) {
        //     error = true
        //     // callMessageError('O valor não pode ser 0!')
        //     return 0
        // }
        // if(!iconSelect){
        //     error = true
        //     // callMessageError('Selecione um ícone!')
        //     return 0
        // }
        // if(!colorSelect){
        //     error = true
        //     // callMessageError('Selecione uma cor!')
        //     return 0
        // }

        if (!error) {
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
                    <h1 className="title">Goals</h1>
                    <button className="btn--close-modal-goals" onClick={handleCloseModal}>
                        <IoMdClose size={24} />
                    </button>
                </ModalHeader>

                <FormsContainer id="goal-form" onSubmit={handleSubmit}>
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
                                    <ButtonIcon 
                                        active={selectIcon == index}
                                        index={index}
                                        icon={icon.icon}
                                        selectButton={activeButtonIcon}
                                    />
                                ))}
                            </ButtonContainer>
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
                                    <ButtonColor
                                        bgColor={color}
                                        selectButton={activeButtonColor}
                                        active={selectColor == index}
                                        index={index}
                                    />
                                ))}

                            </ButtonContainer>
                        </GroupButton>

                    </div>
                </FormsContainer>

                <ButtonSubmit type="submit" form="goal-form">
                    ENVIAR
                </ButtonSubmit>
            </ModalContainer>
        </ModalLayer>


    );
}

