function teste(){
    let a = document.getElementById("a")
    let b = document.getElementById("b")
    let c = document.getElementById("c")
    let delta
    let X1
    let X2
    let x1Input = document.getElementById("x1-input")
    let x2Input = document.getElementById("x2-input")
    let deltaInput = document.getElementById("delta")

    x1Input.innerText = x1Input.value
    x2Input.innerText = x2Input.value
    deltaInput.innerText = deltaInput.value


    delta = b.value * b.value - 4 * a.value * c.value

    if(delta < 0){
        deltaInput.value = delta
        x1Input.value = ""
        x2Input.value = ""
        return
    } else {
        deltaInput.value = ""
    }


    X1 = (-b.value + Math.sqrt(delta)) / (2 * a.value)
    X2 = (-b.value - Math.sqrt(delta)) / (2 * a.value)

    deltaInput.value = delta
    x1Input.value = X1
    x2Input.value = X2 
    if(Number.isInteger(X1) || Number.isInteger(X2)){
        if(Number.isInteger(X1) === false){
            if(X1 === X1.toFixed(2)){
                X1 = X1 * 100
                x1Input.value = X1 + "/" + "100"
            } else {
                X1 = X1 * 10
                x1Input.value = X1 + "/" + "10"
            }
        }
        if(Number.isInteger(X2) === false){
             if(X2 === X2.toFixed(2)){
                 X2 = X2 * 100
                 x2Input.value = X2 + "/" + "100"
             } else {
                 X2 = X2 * 10
                 x2Input.value = X2 + "/" + "10"
             }
        }
    }
}
