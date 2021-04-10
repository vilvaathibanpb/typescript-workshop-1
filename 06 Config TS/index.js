import { add } from "./add";
import { getFullName } from "./printFullName";

export const print = (value) => {
    console.log(value);
}

print(add(2,3));