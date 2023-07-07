function humanReadable (seconds) {
    let min = Math.floor(seconds / 60)
    let hours = Math.floor(min / 60)

    return `${hours.toString().padStart(2, '0')}:${(min % 60).toString().padStart(2, '0')}:${(seconds % 60).toString().padStart(2, '0')}`;
}

console.log(humanReadable(50))