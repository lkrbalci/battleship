const Ship = (Length) => {
    let shipBody = []
    let sunk = false

    for (let i = 0; i < Length; i++) {
        shipBody[i] = "+"
    }

    const hit = (cell) => {
        shipBody[cell] = "X"
    }

    const isSunk = () => {
        (shipBody.filter(position => position === "X")) ?
            sunk = false :
            sunk = true
    }


}



export default Ship