
function checked(currentValue, value){
    if(currentValue == value){
        return "checked"
    }else{
        return ""
    }
}

function printError(errors, campo){
    let message
    console.log()
    if(typeof errors !== 'undefined'){
        errors.errors.forEach(error => {
            if(error.path == campo){
                message = error.message
            }
        })
    }
    return message;
}

module.exports = { checked, printError }