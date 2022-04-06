import styled from "styled-components"
import { ThemeProvider } from "../types"

const Component = styled.h1`
	color: ${({ theme }: ThemeProvider): string => theme.colors?.secondaryColor};
`

export default function Test() {
	return (
		<Component>Hello</Component>
	)
}