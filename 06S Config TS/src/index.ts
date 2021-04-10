import { add } from "./add";
import { getFullName } from "./printFullName";

export const print = (value: any) => {
    console.log(value);
}

print(add(2,3));

const contact = {
    firstName: "Vilva",
    lastName: "Athiban"
}

print(getFullName(contact))