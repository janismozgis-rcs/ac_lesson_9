var number = 0;

while (number < 20) {
    number = number + 1;
    if (number % 2 == 0) {
        continue;
    }
    console.log(number);
}
while (number < 20) {
    number = number + 1;
    if (number % 2 == 0) {
        continue;
    }
    console.log(number);
}

console.log('-----------------');

var number2 = 50;
while (number2 >= 1) {
    if (number2 % 5 == 0) {
        console.log('yay');
    } else {
        console.log(number2);
    }
    number2--;    
}
while (number2 >= 1) {
    number2--;
    if (number2 % 5 == 0) {
        console.log('yay');
    } else {
        console.log(number2);
    }
}

var number3 = 10;
do {
    console.log('foo');
} while(number3 > 20);

for (var number4 = 50; number4 > 0; number4--) {
    console.log(number4);
}


var animals = ['cat', 'dog', 'elePHPant'];

for (var animal of animals) {
    console.log(animal);
}





// fizz bazz
// Skaita no 0 - 50
// Ja skaitlis bez atlikuma dalās ar 2, tad izvada Fizz.
// Ja skaitlis bez atlikuma dalās ar 3, tad izvada Bazz.
// Ja skaitlsi bez atlikuma dalās ar 2 un 3, tad izvada Fizz Bazz.
// Ja ne ar vienu, tad izvada slaitli
console.log('-------------------------------');
for (var i = 0; i < 50; i++) {
    var out = '';
    if (i % 2 == 0) {
        out = 'Fizz ';
    }

    if (i % 3 == 0) {
        out += 'Bazz';
    }

    if (out == '') {
        out = i;
    }

    console.log(out);
}