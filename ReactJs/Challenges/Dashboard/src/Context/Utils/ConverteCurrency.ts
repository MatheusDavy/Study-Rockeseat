import { dollarBrl } from "../../API/price_USDBRL";
import { dollarEur } from "../../API/price_USDEUR";

export function converteCurrencyToCurremtLanguage(amount: number | string, code: string, identify: boolean = true, toFixed: number = 2) {
  amount = String(amount)
  amount = amount.replace(/[^\d]/g, ''); //Remove all caracteres beyond numbers
  const dollarAmount = Number(amount.replace(/(\d{2})$/, '.$1')) //add '.' befores the two last numbers

  const differenceRealToDollar = Number(dollarBrl())
  const differenceEurToDollar = Number(dollarEur())

  switch (code) {
    case "en": {
      if (identify) return `US$ ${dollarAmount.toFixed(toFixed)}`;
      else return dollarAmount.toFixed(toFixed)
    }
    case "ptBR":
      if (identify) return `R$ ${(dollarAmount * differenceRealToDollar).toFixed(toFixed)}`;
      else return (dollarAmount * differenceRealToDollar).toFixed(toFixed)
    case "es":
      if (identify) return `€ ${(dollarAmount * differenceEurToDollar).toFixed(toFixed)}`;
      else return (dollarAmount * differenceEurToDollar).toFixed(toFixed)
  }

}
