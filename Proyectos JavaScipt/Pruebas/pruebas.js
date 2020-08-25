array1 = new Array();
array2 = new Array();
for (let i = 0; i < 23 + 1; i++) {
    array1[i] = i;
    for (let j = 0; j < array1.length; j++) {
        array1[i] = array2;
        for (let a = 0; a < array1.length; a++) {
            array1[i][a] = a;
        }
    }
}
process.stdout.write("hola");
