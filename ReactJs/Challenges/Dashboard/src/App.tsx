import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global."
import { Router } from "./Routes/router"
import { useContext, useState } from "react"

import { light } from "./styles/themes/light"
import { dark } from "./styles/themes/dark"

import { ChangeThemeContext, ChangeThemeProvider } from "./Context/Theme"
import { ActiveAsidebarProvider } from "./Context/ActiveAsidebar"
import "./API/home"
import { CreditCardProvider } from "./Context/CreditCard"
import { TransactionsProvider } from "./Context/Transactions"
import { TransactionProvider } from "./Context/Transaction"

function App() {

  const { theme } = useContext(ChangeThemeContext)

  return (
    <ThemeProvider theme={theme}>
      <CreditCardProvider>
       <TransactionProvider>
        <Router />
       </TransactionProvider>
      </CreditCardProvider>
      <GlobalStyle />
    </ThemeProvider>


  )
}

export default App
