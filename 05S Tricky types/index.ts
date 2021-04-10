// Generics
interface Person {
  name: string;
  age: number;
}

interface Manager {
  name: string;
  age: number;
  reportees: Person[];
}

function increaseAge<T extends Person, Manager>(arr: Array<T>): Array<T> {
  return arr.map((person) => ({
    ...person,
    age: person.age + 1,
  }));
}

// Type Guards

type TriState = "yes" | "no" | "unknown";

function userRadio(state: TriState) {
  if (state == "yes") {
    console.log("User selected yes");
  } else if (state == "no") {
    console.log("User selected no");
  } else {
    console.log("User has not made a selection yet", state);
  }
}

// Declaration merging

namespace Animals {
  export class Zebra {}
}
namespace Animals {
  export interface Legged {
    numberOfLegs: number;
  }
  export class Dog {}
}

interface Document {
  createElement(tagName: any): Element;
}
interface Document {
  createElement(tagName: "div"): HTMLDivElement;
  createElement(tagName: "span"): HTMLSpanElement;
}
interface Document {
  createElement(tagName: string): HTMLElement;
  createElement(tagName: "canvas"): HTMLCanvasElement;
}

// Operators

// Optional chaining
type Age = {
  value?: number;
};
interface Employee {
  name: string;
  age?: Age;
}

const employee: Employee = { name: "vilva" };
const age: number = employee?.age.value;

// Nullish coalescing
let foo, bar;
const x = foo ?? bar;

const y = foo !== null && foo !== undefined ? foo : bar;

// Non-null assertion

type A = {
  x: string;
  y?: string;
};

function test(a?: A) {
  const output = a.y!;
  console.log(output);
}

// import type

import type { add } from "./add";

// const addFn = add;

type test = typeof add;

// is operator

function isNumber(n: any): n is number {
  return isNumber(n);
}

const n = 2;
const num = isNumber(n) ? n : Number(n);

// Template literal types

type sides = `${"top" | "bottom"}-${"left" | "right"}`;

const side: sides = "top-left";

// Error Handling

const serverCall = () => {};

try {
  serverCall;
} catch (e: unknown) {
  if (e instanceof Error) {
    console.log(e.stack);
  } else {
    console.log(e);
  }
}

// Create types for Array.map for Object

export interface Obj<T = any> {
  [k: string]: T | undefined;
}

export function mapObj<T, S>(inputObj: Obj<T>, cb: (x: T) => S): Obj<S> {
  const out: Obj<S> = {};
  Object.keys(inputObj).forEach((key) => {
    const val = inputObj[key];
    if (typeof val !== "undefined") out[key] = cb(val);
    // out[key] = f(val);
  });
  return out;
}
