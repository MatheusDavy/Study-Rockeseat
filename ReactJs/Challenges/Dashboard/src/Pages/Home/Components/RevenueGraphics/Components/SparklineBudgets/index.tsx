import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts'
import { DataBugetsProps } from '../../../../../../API/home'
import { converteCurrencyToCurremtLanguage } from '../../../../../../Context/ConverteCurrency'
import { ContainerBudgets } from './styles'

export function SparklineBudgets({datasGraphics}: DataBugetsProps) {

  const { i18n } = useTranslation()
  const currentLanguage = i18n.language

  const dataUpdated = datasGraphics.map((data: DataBugetsProps) => {
    return {
      "name": data.name,
      "Expenses": converteCurrencyToCurremtLanguage(data.Expenses, currentLanguage, false),
      "Incomes": converteCurrencyToCurremtLanguage(data.Incomes, currentLanguage, false),
    }
  })

  return (
    <ContainerBudgets>
      <BarChart width={700} height={250} data={dataUpdated}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Expenses" fill='#cc0000' />
        <Bar dataKey="Incomes" fill="#33cc33" />
      </BarChart>
    </ContainerBudgets>
  )
}

// Pass props to Home til arrive at component