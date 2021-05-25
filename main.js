// let a = 20;


// if(a % 2 ==  0){

//     console.log(a + ' is even number');
// }else{

//     console.log(a +  'is odd number');
// }

let date = new Date()
 

let today = date.getDay()


switch(today){

    case 0:
        console.log('today is sunday');
    break;
    case 1:
        console.log('today is monday');
    break;
    case 2:
        console.log('today is tuesday');
    break;
    case 3:
        console.log('today is wednesday');
    break;
    case 4:
        console.log('today is tuesday');
    break;
    case 5:
        console.log('today is friday');
    break;
    case 6:
        console.log('today is saturday');
    break;
    default:console.log('not valid day')
                 
}