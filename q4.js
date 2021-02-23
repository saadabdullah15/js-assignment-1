function Count_vowel(str)
{

    return str.replace(/[^aeiou]/g,"").length;
}

document.write(Count_vowel("saad abdullah"));