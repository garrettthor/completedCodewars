/*
The Story:

Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.
Task Overview:

You have to write a function that accepts three parameters:

    cap is the amount of people the bus can hold excluding the driver.
    on is the number of people on the bus excluding the driver.
    wait is the number of people waiting to get on to the bus excluding the driver.

If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.
Usage Examples:

enough(10, 5, 5);
// 0, He can fit all 5 passengers
enough(100, 60, 50);
// 10, He can't fit 10 out of 50 waiting
*/


function enough(cap, on, wait){
  let avail = cap - on
  let leftBehindInTheCold = (avail - wait)*-1
  if (avail < wait){
    return leftBehindInTheCold
  } else if (avail >= wait){
    return 0
  }
}


//I had to make an interactive story out of this to make it make sense.  It's super simple, I must just be dumb.  The question wanted a POSITIVE amount for people left behind.  So I added the *-1 to the leftBehindInTheCold variable.  Sometimes you just have to write it out the long way first....

/*
function enough(cap, on, wait){
  let avail = cap - on
  let leftBehindInTheCold = (avail - wait)*-1
  console.log(`Good morning, there are ${avail} seats available on the bus to Flavor Town, and ${wait} people who want to board.`)
  if (avail < wait){
    console.log(`Unfortunately, ${leftBehindInTheCold} of you must wait out in the cold to die.`)
  } else if (avail > wait){
    console.log(`All aboard!  We even have ${avail-wait} seats left!`)
  } else if (avail === wait){
    console.log(`You folks lucked out!  There are ${avail-wait} seats now; we're all full!`)
  }
}

enough(10, 5, 5)
enough(100, 60, 50)
enough(20, 5, 5)
*/