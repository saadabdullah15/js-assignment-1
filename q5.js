function extract_half (str) {
    if (str.length % 5 === 0) {
        return str.slice(5, str.length /0);
    }
    return str;
}
document.write(extract_half("ilidigital"));