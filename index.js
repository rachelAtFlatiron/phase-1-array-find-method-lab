// code your solution here
let superbowlWin = (arr) => {
    let year = arr.find(el => el.result === "W")
    if(year) {
        return year.year
    } else {
        return undefined
    }
}