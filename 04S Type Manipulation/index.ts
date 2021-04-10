(function ( ) {

// keyof 

interface Employee {
    name: string
    age: number
    address: string
}

type KeysOf = keyof Employee

// typeof
const employee = {
    name: "Vilva",
    age: 28,
    address: "Berlin"
}
type TypeOf = typeof employee

// Indexed access

type name = Employee["name"];

// Conditional type
type Id = number
type Email = string
type uniqueId<T extends number | string> = T extends number ? Id : Email


// Mapped types
type weekend = "Saturday" | "Sunday"

type weekendParties = {
    [K in weekend] : number
}

const weekendParty : weekendParties = {
    Saturday: 20,
    Sunday: 10,
}

})()