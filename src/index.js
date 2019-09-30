module.exports = function multiply(first, second) {
    var output = BigInt(first) * BigInt(second);
    return output.toString();
}
