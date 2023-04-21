import { GoalsCard } from "../../Components/GoalsCard";
import { GoalsEditModal } from "../../Components/Modal/EditGoal";
import { GoalsModal } from "../../Components/Modal/Goals";
import { useGoalsContext } from "../../Context/Goals";
import { ContainerGoals, GoalsContent, GoalsHeader } from "./styles";

// Icons
import { IoMdAddCircle } from 'react-icons/io'

export function Goals() {

    const { openCloseModal, goals_API } = useGoalsContext()

    function handleOpenModal() {
        openCloseModal()
    }

    return (

        <>
            <ContainerGoals>

                <GoalsHeader>
                    <h1 className="title">Goals</h1>
                    <button className="btn--add-cc" onClick={handleOpenModal}>
                        <IoMdAddCircle size={24} />
                    </button>
                </GoalsHeader>


                {goals_API.length != 0 && (
                    <GoalsContent>
                        {goals_API.map(goal => (
                            <GoalsCard
                            id={goal.id}
                            bgColor={goal.bgColor}
                            percent={goal.percent}
                            date={goal.date}
                            amountFinal={goal.amountInitial}
                            amountInitial={goal.amountFinal}
                            icon={goal.icon}
                            name={goal.name}
                        />
                        ))}
                    </GoalsContent>
                )}



            </ContainerGoals>

            <GoalsModal />
            <GoalsEditModal />
        </>
    )
}