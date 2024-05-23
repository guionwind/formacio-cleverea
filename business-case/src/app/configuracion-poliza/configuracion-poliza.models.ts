import { Cobertura } from "../common/enums/cobertura.enum"

export const coberturaArray = Object.entries(Cobertura).map(
    ([id, description]) => ({id, description})
)