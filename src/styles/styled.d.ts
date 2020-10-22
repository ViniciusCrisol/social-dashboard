import 'styled-componens';

import theme from './themes/dark';

export type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
