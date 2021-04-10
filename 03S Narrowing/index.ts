(function ( ) {

    // Narrowing

    let neverValue: never;
    neverValue = null;

    const print = (input: string | number) => {
        if(typeof input === "string") {
            console.log("String", input);   
        }
        else if(typeof input === "number") {
            console.log("Number", input);   
        } else {
            console.log(input);
        }
    }

})()