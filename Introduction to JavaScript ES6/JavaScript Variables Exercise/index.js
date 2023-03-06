function swap(a ,b) {
    /*********Do not change the code above********/
    //Write your code on lines 4 - 6
    a = a + b;
    b = a - b;
    a = a - b;
    /*********Do not change the code below********/
    console.log("a is " + a)
    console.log("b is " + b)
}

swap(100, 5)