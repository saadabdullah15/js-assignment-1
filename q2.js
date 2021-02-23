let num=2;
if (num === 2) {
    document.write("true");
} else if (num > 1) {
    for (let i = 2; i < num; i++) {

        if (num % i !== 0) {
            document.write("true");
        } else if (num === i * i) {
            document.write("false");
        } else {
            document.write("false")
        }
    }
} else {
    document.write("false");
}