// 1. Even character
// Buatlah sebuah fungsi yang dapat mengembalikan ( return ) kumpulan karakter di urutan genap.
// fungsi ini hanya dapat menerima argument tipe data string, dan mengembalikan tipe data string
// contoh test case
// "pratama" -> return "rtm"
// "hellohello" -> return "elhlo"
// "hello hello hello" -> return "el el el"
// "" -> return ""
// 123434 -> return "error input bukan string"

// function evenCharacter(huruf) {
//     if (typeof huruf !== "string") return ('ini bukan string');
//     let = genap
//     for (let i = 0; i < huruf.length; i+=2) {
//         genap += huruf[i]
//     }
//     return genap
// }

// console.log(evenCharacter("alimmakruf"))

function evenCharacter(huruf) {
    if (typeof huruf !== "string") {
        return "error input bukan string"
    } else {
        let genap = ""
        for (let i = 1; i < huruf.length; i+=2) {            
        genap += huruf[i]
        }
        return genap
    }

}

console.log(evenCharacter("alimmakruf"))

// 2. Count Word
// Buatlah sebuah fungsi yang dapat mengembalikan ( return ) jumlah kata yang ada di dalam kalimat,
// fungsi ini hanya dapat menerima argument tipe data string, dan mengembalikan tipe data number
// contoh test case
// "pratama" -> return 1
// "hellohello" -> return 1
// "hello hello hello" -> return 3
// "" -> return 0
// "hore yeay ahaaa" -> return 3
// 123434 -> return "error input bukan string"

function countWord(word) {
    if (typeof word !== 'string'){
        return 'error input bukan string';
    } else if (word === "") {
        return '';
    } else {
        let count = 1
        for (let j = 0; j < word.length; j++) {
            if (word[j] === ' ' && word[j+1] !== ' ') {
                count++
            }
        }
        if (word === '') return '' 
        else return count
    }
}

// console.log(countWord('alim Makruf tri r'))

// 3. Count Vowel And Consonant
// Buatlah sebuah fungsi yang dapat mengembalikan ( return ) jumlah huruf karakter vokal dan karakter konsonan ( huruf mati ),
// fungsi ini hanya dapat menerima argument tipe data string, dan mengembalikan tipe data string
// contoh test case
// "pratama" -> return "jumlah vokal : 3 , jumlah konsonan : 4"
// "hellohello" -> return "jumlah vokal : 4, jumlah konsonan : 6"
// "" -> return "jumlah vokal : 0 , jumlah konsonan 0"
// 123434 -> return "error input bukan string"

function vowelConsonant(input) {
    if (typeof input !== 'string') {
        return 'error input bukan string'
    } else {
        let vowel = 0
        let consonant = 0
        for (let k = 0; k < input.length; k++) {
            if (input[k] === 'a' || input[k] === 'i' || input[k] === 'u' || input[k] === 'e' || input[k] === 'o') {
                vowel++
            } else {
                consonant++
            }
        }
        return `jumlah vokal : ${vowel}, jumlah konsonan : ${consonant}`
    }
}
// console.log(vowelConsonant('indonesia'))

// 4. reverse word
// buatlah sebuah fungsi yang dapat membalikkan tipe data string.
// fungsi ini hanya dapat menerima tipe data string, dan mengembalikan hasil dengan tipe data string juga
// contoh test case
// "hello" -> return "olleh"
// "world!" -> return "!dlrow"
// "asikasikasik" -> return "kisakisakisa"
// "" -> return ""

function reverse(kata) {
    if (typeof kata !== 'string') {
        return 'error input bukan string'
    } else {
        let convert = ''
        for (let m = kata.length - 1; m >= 0; m--) {
            convert += kata[m]
        }
        return convert
    }
    
}

// console.log(reverse('dia'))

// 5. palindrome
// Buatlah sebuah fungsi yang dapat mengecek apakah kata yang dimasukkan adalah palindrome atau tidak
// fungsi ini hanya dapat menerima argument tipe data string dengan minimal 2 karakter, dan mengembalikan tipe data bool ( kembalikan true jika kata tersebut palindrome, kembalikan false jika kata tersebut tidak palindrome atau karakter yang dimasukkan kurang dari 2 karakter )
// apa itu palindrome -> https://id.wikipedia.org/wiki/Palindrom

// contoh test case
// "katak" -> return true
// "kasur" -> return false
// "h" -> return false
// "kasur rusak" -> return true
// "erererrerere" -> return true

function palindrome(statement) {
    if (typeof statement !== "string"){
        return 'error input bukan string';
    } else {
        let hasil = ''
        for (let n = statement.length - 1; n >= 0; n--) {
            hasil += statement[n]         
            if (hasil === statement[n]) {
                return true
            } else {
                return false
            }
        }
        console.log(hasil)
    }
    
}

// console.log(palindrome('katak'))

// 6. Exchange coin
// buatlah sebuah fungsi yang dapat mengecek pecahan dari input kumpulan coin, pecahan yang tersedia adalah 1000, 500, 200, 100, 50, 20, 10, 5, dan 1.
// fungsi ini hanya menerima argumen berupa tipe data number dan mengembalikan tipe data string

// Ilustrasi :
// input 1752
// return "1000, 500, 200, 50, 1, 1"

// input 879
// return "500, 200, 100, 50, 20, 5, 1, 1, 1, 1"

// contoh test case
// 1752 -> return "1000, 500, 200, 50, 1, 1"
// 879 -> return "500, 200, 100, 50, 20, 5, 1, 1, 1, 1"
// 50 -> return "50"
// 0 -> return ""
// 5000 -> return "1000, 1000, 1000, 1000, 1000"

function exchangeCoin(number) {
    // if (typeof number !== number) {
    //     return 'error input bukan number'
    // } else {
        let exchange = ''
        while (number > 0) {
            if (number - 1000 >= 0) {
                exchange += '1000, ';
                number-= 1000;
            } else if (number - 500 >= 0) {
                exchange += '500, ';
                number -= 500;
            } else if (number - 200 >= 0) {
                exchange += '200, ';
                number -= 200;
            } else if (number - 100 >= 0) {
                exchange += '100, ';
                number -= 100;
            } else if (number - 50 >= 0) {
                exchange +='50, ';
                number -= 50;
            } else if (number - 20 >= 0) {
                exchange += '20, ';
                number -= 20;
            } else if (number - 5 >= 0) {
                exchange += '5, ';
                number -= 5;
            } else if (number - 1 >= 0) {
                exchange += '1, '
                number -= 1;
            }
        }
        console.log(exchange)
    }
exchangeCoin(1752)

// 7. Asteriks loop
// buatlah sebuah fungsi yang dapat menampilkan jumlah asterik sesuai perulangan yang dimasukkan, seperti ilustrasi berikut :

// input 2

// *
// **

// input 4

// *
// **
// ***
// ****
// fungsi ini hanya dapat menerima argumen tipe data number tanpa mengembalikan data, cukup menampilkan hasilnya saja menggunakan console.log

// contoh test case
// input 3

// *
// **
// ***

// input 5

// *
// **
// ***
// ****
// *****

// input 0


// input 10

// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********

function asteriks(dot) {
    for (let o = 0; o <= dot; o++) {
        let str = '';
        for (let p = 0; p <= o; p++) {
            str +='*'
            let space = ''
            for (let q = 0; q < p; q++) {
                space += ' '
            }
            space += 'n'
            console.log(space)
        }
        str += '\n'
        console.log(str)
    }
}

console.log(asteriks(5))

// 8. Pyramid loop
// buatlah sebuah fungsi yang dapat menampilkan gambar segitiga pyramid dengan tinggi sesuai argumen yang dimasukkan, seperti ilustrasi berikut :

// input 3
 
//   *     | tinggi 3
//  ***    |
// *****   |

// input 5

//     *       | tinggi 5
//    ***      |
//   *****     |
//  *******    |
// *********   |
// fungsi ini hanya dapat menerima argumen tipe data number tanpa mengembalikan data, cukup menampilkan hasilnya saja menggunakan console.log

// contoh test case
// input 3 :

//   *  
//  ***
// *****

// input 10 :

//          *         
//         ***
//        *****
//       *******
//      *********
//     ***********
//    *************
//   ***************
//  *****************
// *******************

// clue :  baris
//         setiap baris ada berapa karakter




// BONUS
// 8. sorting data
// buatlah fungsi yang dapat mengurutkan data dari terkecil ke yang terbesar.
// fungsi ini hanya menerima satu argumen dengan tipe data string, kemudian mengembalikan hasilnya dengan tipe data string

// contoh test case
// "54223" -> return "22345"
// "10101010" -> return "00001111"
// "dddcccbbbaaa" -> return "aaabbbcccddd"
// "bubur" -> return "bbruu"
// "" -> return ""

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    111111111111111111111111                                                                                                                                