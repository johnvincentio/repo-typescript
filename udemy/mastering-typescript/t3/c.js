var mySong = {
    title: "a song",
    artist: "b",
    streams: 434633,
    credits: {
        producer: "p",
        writer: "w"
    }
};
function calculate(mySong) {
    return mySong.streams / 3;
}
function printSong(mySong) {
    console.log("Song ".concat(mySong.title, " payout ").concat(calculate(mySong)));
}
printSong(mySong);
