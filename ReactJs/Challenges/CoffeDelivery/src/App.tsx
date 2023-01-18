import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import { UserDataFormProvider } from './context/userDataForm'
import { DataCoffeProvider } from './context/dataCoffes'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>

      <DataCoffeProvider>

        <UserDataFormProvider >
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </UserDataFormProvider>

      </DataCoffeProvider>

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
