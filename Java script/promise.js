var promise=new Promise(function(resolve,reject){
    let a=window.prompt("enter a number")
    let b= 3
    if (a == b) {
       resolve()
    } else {
        reject()
        
    }
}
)
promise.
then(function(){
    document.write("sucess")
}).
catch(function(){
    document.write("enter another number")
})



