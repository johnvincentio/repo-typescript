
type Song = {
    title: string,
    artist: string,
    streams: number,
    credits: {
        producer: string,
        writer: string
    }
    optional?: string
};

let mySong: Song = {
    title: `a song`,
    artist: `b`,
    streams: 434633,
    credits: {
        producer: `p`,
        writer: `w`
    }
};

function calculate(mySong: Song): number {
    return mySong.streams / 3
}

function printSong(mySong: Song): void {
    console.log(`Song ${mySong.title} payout ${calculate(mySong)}`);
}

printSong(mySong);
