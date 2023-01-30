import 'styled-components'
import { Light } from '../styles/themes/light'
import { Dark } from '../styles/themes/dark'

type ThemeType = typeof Light
type ThemeType = typeof Dark

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}