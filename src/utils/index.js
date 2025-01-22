export function getInitial(fullName) {
    const names = fullName.split(" ");
    const initials = names.splice(0, 2).map((name) => name[0].toUpperCase());
    const initialsString = initials.join("");
    return initialsString;

}
