import transformDay from "@/utils/functions/transformDay";

const transformDate = (date: string) => {
  const dateTransaction = new Date(date);
  const dateNow = new Date();
  const dayNow = dateNow.getDate();
  const dayTransaction = dateTransaction.getDate();
  const monthNow = dateNow.getMonth();
  const monthTransaction = dateTransaction.getMonth();
  const difDays = dayNow - dayTransaction;

  // Verificar si la diferencia de días es mayor a 7 o menor a -7, o si son de meses diferentes
  if (difDays > 7 || difDays < -7 || monthNow !== monthTransaction) {
    const dayName = transformDay(dateTransaction.getDay());
    const day = dateTransaction.getDate();
    const month = dateTransaction.toLocaleString('default', { month: 'short' });
    return `${dayName} ${day} ${month}`;
  } else {
    const dayName = transformDay(dateTransaction.getDay());
    return dayName;
  }
}
export default transformDate;