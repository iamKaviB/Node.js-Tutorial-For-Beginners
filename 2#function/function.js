function callFunction(fun){
 fun();
}

var hey = function(){
    console.log('bye');
}

callFunction(hey);
