export const formatDate = (date) =>{
    const month = date.toLocaleString("en-us", { month: "short" });
    const day = date.getDate();
    const year = date.getFullYear();

    const formattedDate = `${day}-${month}-${year}`;

    return formattedDate;
}
export function dateFormatter(dateString) {
    const inputDate = new Date(dateString);

    if (isNaN(inputDate)) {
      return "Invalid Date";
    }

    const year = inputDate.getFullYear();
    const month = String(inputDate.getMonth() + 1).padStart(2, "0");
    const day = String(inputDate.getDate()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }



export function getInitial(fullName) {
    const names = fullName.split(" ");
    const initials = names.splice(0, 2).map((name) => name[0].toUpperCase());
    const initialsString = initials.join("");
    return initialsString;

}
