export  function formatAmount(amount: string){
  const amountNumber = parseInt(amount)
  const amountFormated = new Intl.NumberFormat('de-DE', ).format(amountNumber)
  console.log(amountFormated)
  return `$ ${amountFormated},00`
}