export const getDate = (newDate) => {
  let year = newDate.getFullYear();
  let month = newDate.getMonth() + 1 < 10 ? "0" + (newDate.getMonth() + 1) : newDate.getMonth() + 1;
  let day = newDate.getDate() < 10 ? "0" + newDate.getDate() : newDate.getDate();
  return year + '-' + month + '-' + day;
}