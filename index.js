// code your solution here

// const theRecord = [
//     { year: "2015", result: "L"},
//     { year: "2014", result: "N/A"},
//     { year: "2013", result: "L"},
//   ]

function superbowlWin(record){
    // Finding the winObject
    const winObject = record.find(e => e.result === 'W')

    if (winObject != undefined) {
        return winObject.year
    } else {return winObject}
}
