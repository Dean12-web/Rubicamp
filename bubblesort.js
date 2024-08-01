let jsonData = [
    {
        "name": "Joni",
        "term": 18
    },
    {
        "definition": "Jon",
        "term": 1945
    },
    {
        "definition": "Jack",
        "term": 100
    }
]

for (let i = 0; i < jsonData.length - 1; i++) { // 0 < 2 T
    for (let j = 0; j < jsonData.length - 1 - i; j++) { // 0 < 2 - 1 - 0 = 0 < 1 T
        if (jsonData[j].term < jsonData[j + 1].term) { // 18 < 1945 T
            // Swap the elements
            let temp = jsonData[j]; // { name: 'Joni', term: 18 }
            jsonData[j] = jsonData[j + 1]; //  { name: 'Jon', term: 1945 }
            jsonData[j + 1] = temp; // { name: 'Jon', term: 1945 }
        }
    }
}

console.log(JSON.stringify(jsonData, null, 2));