export function initialsOfNames(firstname: string, lastname: string) {
  const f = firstname.charAt(0).toUpperCase();
  const l = lastname.charAt(0).toUpperCase();
  return `${f}${l}`;
}