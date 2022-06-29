//Take array of name of family members
let name_arr = ["Nareshkumar", "Neetaben", "Krunal", "Bhargav", "Preeti", "Maharsh"];
let v_count = [];

//To count vowel from each element and store into other array
for(i = 0; i < name_arr.length; i = i + 1) {

    let temp = 0;
    check_str = name_arr[i];
    for(j = 0; j < check_str.length; j = j + 1) {
        
        if (check_str[j] == "a" || check_str[j] == "e" || check_str[j] == "i" || 
        check_str[j] == "o" || check_str[j] == "u" || check_str[j] == "A" || 
        check_str[j] == "E" || check_str[j] == "I" || check_str[j] == "O" || 
        check_str[j] == "U") {      
            temp = temp + 1;
            // console.log(temp);
        }
    }
    v_count[i] = temp;
}

//To find string in which vowels are maximum
let max = v_count[0];
let max_vowel = name_arr[0];
for(i = 0; i < v_count.length; i = i + 1) {
    if(v_count[i] > max) {
        max = v_count[i];
        max_vowel = name_arr[i];
    }
}
console.log(max_vowel);