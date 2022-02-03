// function longestCommonPrefix(strs: string[]): any | void {
//     const strsWithoutFirst = strs.slice(1);
//     const first = strs[0];
//     let prefix: Set<string> = new Set();
//     if (first)
//         first.split("").forEach((char, index) => {
//             console.log(char)
//             for (const str of strsWithoutFirst) {
//                 if (str[index] === char) {
//                     prefix.add(prefix ? char : char);
//                     // prefix = prefix ? prefix + char : char;
//                     console.log(char, prefix)
//                 } else prefix.delete(char)
//             }
//             return prefix;
//         })
//     else return ""
// };

function longestCommonPrefix(strs: string[]): any | void {
    if (strs.length === 0) return '';
    const first = strs[0];
    let prefix: string = '';
    const fromLongest = strs.sort((a, b) => b.length - a.length);
    // for (const [index, char] of first!.split('')) {
    //     for (const str of fromLongest) {
    //         if (str)
    //     }
    // }
    for (let i = 0; i < first!.length; i++) {
        for (let j = 0; j < fromLongest.length; j++) {
            if (fromLongest[j]![i] !== first![i]) return prefix;
            else prefix += first![i];
        }
    }
}

export const main014 = (async function main014() {
    const strs = ['flower', 'flow', 'flight'];
    const strs2 = ['dog', 'racecar', 'car'];
    // console.log(longestCommonPrefix(strs));
    // console.log(longestCommonPrefix(strs2));
})().catch(e => console.error(e));
