const transformDay = (numberDay: number) => {
  switch (numberDay) {
    case 0:
      return "Domingo";
    case 1:
      return "Lunes";
    case 2:
      return "Martes";      
    case 3:
      return "Miércoles";  
    case 4:
      return "Jueves"; 
    case 5:
      return "Viernes"; 
    case 6:
      return "Sábado";  
    case 7:
      return "Hoy";       
    default:
      break;
  }
} 
export default transformDay;