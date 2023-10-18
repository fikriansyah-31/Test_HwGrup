function loop(x) {
    const result = [];
    for (let i = 1; i <= x; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("TigaLima");
        } else if (i % 3 === 0) {
            result.push("Tiga");
        } else if (i % 5 === 0 ) {
            result.push("Lima");
        } else {
            result.push(i);
        }
    }
    return result;
}
// Untuk runing code dengan perintah "npx jest" karna saya buat unit test nya
module.exports = loop
