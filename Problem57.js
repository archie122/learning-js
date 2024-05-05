function permutations(string) {
    result = [];

    generate('', string, result);

    return result
}

function generate(prefix, remaining, list) {
    if (remaining == 0) {
        list.push(prefix);
        return;
    }

    for (let i = 0; i < remaining.length; i++) {
        generate(prefix + remaining[i], remaining.replace(remaining[i], ''), list)
    }
}

console.log(permutations('aabb'))