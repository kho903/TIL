let i = 0;

while (i < 10) {
    console.log(i);
    i++;
}

let isFun = false;
while (!isFun){
    console.log(i);
    i++;
    if (i===30) {
        isFun = true;
    }
}