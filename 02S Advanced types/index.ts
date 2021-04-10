(function ( ) {

// Type Alias

type employee = {
    name: Name,
    age: number,
    reportee: employee
}

type address = {
    city: string
    pin: string
}

type Name = string 

interface Name1 string // Not possible for primitives, tuples etc

interface manager {
    name: Name
    age: number
}

interface manager {
    address: string
}

let manager: manager;

manager.

// InterSection

let emp: employee & address


// Extends

interface Person extends address, manager {}

let person: Person

person.

// Function Signature Overloading.

type Email = { email: string }
type PhoneNumber = { phone: number }

// function contactPeople(method: "email", ...details: Email[]): void;
// function contactPeople(method: "phone", ...details: PhoneNumber[]): void;

function contactPeople(
  method: "email" | "phone",
  ...details: (Email | PhoneNumber)[]
): void {
  if (method === "email") {    
      // Do something
  } else {
    // Do something
  }
}

contactPeople("email", { phone: 95664120085 })

// Type Assertions

const a = 24;
(a as string).toUpperCase();
(a as unknown as string).toUpperCase();



// Class
interface Print {
    print: (val: string) => void
}

class Human implements manager, Print {
    public name;
    public age = 0;
    public address; // public, protected, private, readonly
    #pvt = 1;

    constructor(name: string, age: number, address: string ) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    print (val: string) {
        console.log(val);   
    }
}

const human: Human;

interface Construc {
    new (m: manager): Human
}

const fn = (jsClass: Construc) => {
    return new jsClass({ name: "Vilva", age: 28, address: "Berlin"})
}


// Utility types

interface UtilityTest {
    name: string
    id: number
    location: string
    isNew?: boolean
}

const mayBeNull: Partial<UtilityTest>;
mayBeNull.

const allValuesPresent: Required<UtilityTest>;
allValuesPresent.

type Utilities = "pick" | "partial" | "required"
const utils: Record<Utilities, UtilityTest> = {
    pick: {name: "", id: 1, location: ""},
    partial: {name: "", id: 1, location: ""},
    required: {name: "", id: 1, location: ""},
}

const isNew: Pick<UtilityTest, 'isNew'>;

const mandatoryFields: Omit<UtilityTest, 'isNew'>

// Labelled Tuples

let dateOfBirth: [Day:number, Month: string, Year: number ];
dateOfBirth = [01, "Jan", 2014]

// Recursive types

type Recursive = string | number | Array<Recursive>

})()