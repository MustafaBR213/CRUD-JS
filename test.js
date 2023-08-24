function rot13Encrypt(str) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const encrypted = [];

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const index = alphabet.indexOf(char);

        if (index !== -1) {
            let shiftedIndex = (index + 13) % alphabet.length;
            encrypted.push(alphabet[shiftedIndex]);
        } else {
            encrypted.push(char);
        }
    }

    return encrypted.join('');
}

console.log(rot13Encrypt("Hello"));