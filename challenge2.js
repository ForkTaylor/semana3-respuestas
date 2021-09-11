function minMax(aNumbs) {
    //Implementación
    let max = Math.max(...aNumbs);

    let min = Math.min(...aNumbs);

    let numObj = Object.create({})

    numObj.min = min
    numObj.max = max

    return (numObj);
}

module.exports = minMax;