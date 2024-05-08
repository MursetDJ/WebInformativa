export const getRandomIndex = (count /*numero de elementos*/, max /*tamaño del array*/) => {
    const index = new Set();
    while (index.size < count) {
        const randomIndex = Math.floor(Math.random() * max);
        index.add(randomIndex);
    }
    return Array.from(index);
};

export const getLastestIndex = (count, max) => {
    if (count > max) {
        throw new Error(`El valor de count:${count} no puede ser mayor que max:${max}.`);
    }
    
    const index = [];
    for (let i = max - count; i < max; i++) {
        index.push(i);
    }
    
    return index;
};