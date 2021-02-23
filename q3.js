
function create_str(str) {
    if (str === null || str === undefined || str.substring(0,3) === 'add')
    {
        return str;
    }
    return "add"+str;
}
document.write(create_str("address  "));
document.write(create_str("ress"));