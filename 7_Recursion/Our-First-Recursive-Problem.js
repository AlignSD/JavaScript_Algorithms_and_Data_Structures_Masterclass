/* Using recursion, check to see if any numbers 
in the array are odd numbers */

const countdown = (num) => {

    if (num <= 0) {
        console.log('all done')
        return
    }

    // first we log our variable
    console.log(num);
    //then we subtract 1 from it
    num --;
    //then we call the function again with our new variable
    countdown(num);

}

countdown(10)