/**
 * Basic FLAMES Logic
 * For see the full advanced version, visit: https://flamescalculators.co.in
 * Note- where you not get full advanced version code because its a developer hardwork it can't be shared.
 */

function calculateFlames(name1, name2) {
    // 1. Remove spaces and convert to lowercase
    const n1 = name1.replace(/\s+/g, '').toLowerCase();
    const n2 = name2.replace(/\s+/g, '').toLowerCase();

    // 2. Remove common characters
    let arr1 = n1.split('');
    let arr2 = n2.split('');

    arr1.forEach((char, index) => {
        const matchIndex = arr2.indexOf(char);
        if (matchIndex !== -1) {
            arr1[index] = '';
            arr2[matchIndex] = '';
        }
    });

    const count = [...arr1, ...arr2].filter(Boolean).length;

    // 3. FLAMES Elimination
    const options = ["Friendship", "Love", "Affection", "Marriage", "Enemy", "Sibling"];
    let index = 0;
    let currentOptions = [...options];

    while (currentOptions.length > 1) {
        index = (index + count - 1) % currentOptions.length;
        currentOptions.splice(index, 1);
    }

    return currentOptions[0];
}

console.log(calculateFlames("Rahul", "Anjali")); // Example Output