export const fn = (a, b, c) => {
  
  let resultado = 0
  let costeA = 0
  let costeB = 0
  let costeC = 0

  const total = a + b + c
  if (a < 0 || b < 0 || c < 0) {
    throw new Error("No se pueden introducir números negativos")
  }
  if (total < 40 && total % 3 === 0) {
    const oferta = total / 3

    costeA = a * 12
    costeB = b * 14
    costeC = c * 16

    const totalCoste = costeA + costeB + costeC

    resultado = (totalCoste * oferta) / total
    return Math.ceil(resultado)
  } else {
    throw new Error(
      "Tienen que ser menos de 40 empanadillas y en múltiplos de 3"
    )
  }
}
