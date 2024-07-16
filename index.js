// code your solution here
function superbowlWin(array) {
    const wins = array.find(prop2 => prop2.result === "W")
    if (wins) {
        return wins.year;
    }

}