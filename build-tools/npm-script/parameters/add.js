function add(a, b) { return parseInt(a) + parseInt(b); }

if (!process.argv[2] || !process.argv[3]) {
    console.log('Insufficient number of arguments! Give two numbers please!');
} else {
    console.log('The sum of',
        process.argv[2],
        'and',
        process.argv[3],
        'is', add(process.argv[2], process.argv[3]));
}

/*
El objeto process.argv contiene los argumentos de la
línea de comandos dados al script. Los dos primeros
elementos, process.argv[0]y process.argv[1], están 
reservados por nodo. Por lo tanto process.argv[2]y 
process.argv[3]le permiten acceder a los argumentos 
de línea de comandos.
*/