(function ( ) {
// Type inferance

let iAmNumber: any = 20;

iAmNumber = "hello";

// Explicit type

let iAmString: any = 20;

iAmString = "hello";

// Primitives

const N: number = 20
const S: string = "Hello"
const isTrue: boolean = true

// Array & Tuples

const arr1: number[] = [1,2,3]
arr1.push(5)

const arr2: Array<string> = ["1","2","3"]
arr2.push("5")

const tuple: [number, string, number] = [1, "2", 3]

// Functions 

const testFn = (val: string[]) => {
    console.log(val.map((v) => v))
}

const add = (a: number, b: number): string => (a+b).toString()
const c = add (1,2)

// Objects


let address = {
    name: "Vilva",
    city: "Berlin"
} 

let newAddress: {
    name: string,
    country?: string
    city?: string
} 

// address = {}

newAddress = {
    name: "Vilva",
    city: "Berlin"
} 

// Optional
newAddress = {
    name: "Shiva"
}

// Literal Types

let myName: "Vilva" = "Vilva";
myName = "Vilva"
myName = "Vilva"


// Union types

let phoneNumberOrEmail: string | number;
phoneNumberOrEmail = 9877788111;
phoneNumberOrEmail = "test@gmail.com"
phoneNumberOrEmail = 123

// Enums

enum WeekEnds {
    Saturday= "Saturday",
    Sunday= "Sunday"
}

let weekends;
weekends = WeekEnds.Saturday

type weekEndValue = keyof typeof WeekEnds

let weekendDays: weekEndValue = 'Saturday'

})()