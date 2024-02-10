/* --> If */
    let purchase = 1400;
    if (purchase>=1500){
        console.log("Discount!")
    }
    
    let player = 'John';
    let points = 144;
    let minPoints = 100;
    if(points>=minPoints){
        console.log(`Well done, ${player}!`);
    }

/* --> Else if */
    let score = 98;
    if(score >=100){
    console.log("Level Completed!");
    } else {
    console.log("Try again!");
    }


    let color = readLine();
/*  red => 1
    green => 2
    black => 3
    other cases => unknown */
    if (color=="green"){
        console.log(2);
    } else if (color=="red"){
        console.log(1);
    } else if (color=="black"){
        console.log(3);
    } else {
        console.log("unknown");
    }


/* --> Switch */
    let choice = 1;

    switch(choice){
    case 1:       //match!
        console.log("Sports");
        break;      //stop 
    case 2:
        console.log("Business");
        break;
    case 3:
        console.log("Technology");
        break;
    default:
        console.log("Unknown");
        break;
    }