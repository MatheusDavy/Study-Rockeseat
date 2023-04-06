import { useState } from "react"
import { DataBugetsProps, DataPlansProps } from "../../../../API/home"
import { SparklineAreaData } from "../../../../Data/page_home"
import { SparklineBudgets } from "./Components/SparklineBudgets"
import { SparklinePlans } from "./Components/SparklinePlan"
import { ButtonChangeGraphics, ButtonChangeGraphicsContainer, RevenueContainer, RevenueHeaderContainer } from "./styles"


interface RevenueGraphicsProps {
  dataPlans: DataPlansProps
  dataBudgets: DataBugetsProps
}

export function RevenueGraphics({dataPlans, dataBudgets}: RevenueGraphicsProps){

    const [expensiveIsActive, setExpensiveIsActive] = useState(!true)

    function handleGraphics(buttonClicked: any){
        setExpensiveIsActive(buttonClicked === 'active' ? true : false)
    }

    return(
        <RevenueContainer>

            <RevenueHeaderContainer>
                <p>Revenue Updates</p>

                <ButtonChangeGraphicsContainer>
                    <ButtonChangeGraphics expenseIsActive={!expensiveIsActive} onClick={()=>{handleGraphics('notActive')}}>
                        <span>Budgets</span>
                    </ButtonChangeGraphics>

                    <ButtonChangeGraphics expenseIsActive={expensiveIsActive} onClick={()=>{handleGraphics('active')}}>
                        <span>Plans</span>
                    </ButtonChangeGraphics>
                </ButtonChangeGraphicsContainer>

            </RevenueHeaderContainer>

            {!expensiveIsActive ? 
                <SparklineBudgets datasGraphics={dataBudgets} />
            : 
                <SparklinePlans datasGraphics={dataPlans} />
            }

        </RevenueContainer>
    )
}