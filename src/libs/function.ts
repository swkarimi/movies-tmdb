export const convertDate = (date: string) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]
  return `${months[parseInt(date.slice(5, 7)) - 1]} ${date.slice(0, 4)}`
}
