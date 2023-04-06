import { useTranslation } from 'react-i18next'
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts'
import { DataPlansProps } from '../../../../../../API/home'
import { converteCurrencyToCurremtLanguage } from '../../../../../../Context/ConverteCurrency'
import { ContainerPlans } from './styles'



export function SparklinePlans({datasGraphics}: DataPlansProps) {

  const { i18n } = useTranslation()
  const currentLanguage = i18n.language

  const dataUpdated = datasGraphics.map((data: DataPlansProps) => {
    return {
      "name": data.name,
      "Goal": converteCurrencyToCurremtLanguage(data.Goal, currentLanguage, false),
      "Reached": converteCurrencyToCurremtLanguage(data.Reached, currentLanguage, false),
    }
  })

  return (
    <ContainerPlans>
      <BarChart width={700} height={250} data={dataUpdated}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Reached" fill="#8884d8" />
        <Bar dataKey="Goal" fill="#82ca9d" />
      </BarChart>
    </ContainerPlans>
  )
};