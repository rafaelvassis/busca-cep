export function normalizarCEP(entrada){
    return entrada
    .split("")
    .filter((caractere) => caractere >= "0" && caractere <= "9")
    .join("");
}