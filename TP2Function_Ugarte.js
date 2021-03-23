let nombres = ['Adriana', 'Benito', 'Claudia', 'Daniel', 'Estefania', 'Fernando','Gabriela','Hugo']


function objReturn(array){
    const myObjArray = [];
    
    array.forEach(element => {
        let myName = element.toString();
        let myLen = myName.length;
        let myObj = {name: myName, lenght: myLen};
        myObjArray.unshift(myObj);
    })
    
    return myObjArray;
     
    }

     
    const devolucion = objReturn(nombres)
    
    console.log(JSON.stringify(devolucion));