import { JWT } from "./JWT";

export interface ResponseJWT {
    Ok:                boolean;
    CodigoEstado:      string;
    Mensaje:           string;    
    Elementos:         JWT[];    
}