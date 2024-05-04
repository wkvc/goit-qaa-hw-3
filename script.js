// Zadanie 1
const fruits = ["Jabłko", "Banan", "Pomarańcza", "Winogrona", "Arbuz"];

// Zadanie 2
const numbers = [2, 8, 4, 10, 6, 3, 7];
const threshold = 5;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > threshold) {
        console.log(`Liczba większa niż ${threshold}: ${numbers[i]}`);
    }
}