import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: "light";
    bgColor: string;
    textColor: string;
    accentColor: string;
  }
}
