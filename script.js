// Hardcoded list of 100 fruits and vegetables, gotten help of AI. 
const Dictionary = [
    "Acorn Squash", "Apple", "Apricot", "Artichoke", "Asparagus", 
    "Aubergine", "Avocado", "Banana", "Bell Pepper", "Berry", 
    "Bitter Melon", "Blackberry", "Blackcurrant", "Blood Orange", "Blueberry", 
    "Bok Choy", "Boysenberry", "Broccoli", "Brussels Sprout", "Butternut Squash", 
    "Cabbage", "Cantaloupe", "Carrot", "Cauliflower", "Celery", 
    "Cherry", "Cherry Tomato", "Chickpea", "Chili Pepper", "Clementine", 
    "Coconut", "Collard Greens", "Corn", "Courgette", "Cranberry", 
    "Cucumber", "Custard Apple", "Daikon", "Date", "Dragonfruit", 
    "Edamame", "Eggplant", "Elderberry", "Endive", "Fennel", 
    "Fig", "Garlic", "Ginger", "Gooseberry", "Grape", 
    "Grapefruit", "Green Bean", "Green Onion", "Guava", "Honeydew Melon", 
    "Iceberg Lettuce", "Jackfruit", "Jalapeno", "Kale", "Kiwi", 
    "Kumquat", "Leek", "Lemon", "Lentil", "Lettuce", 
    "Lime", "Lychee", "Mandarin", "Mango", "Melon", 
    "Mulberry", "Mushroom", "Nectarine", "Okra", "Olive", 
    "Onion", "Orange", "Papaya", "Parsnip", "Passionfruit", 
    "Peach", "Pear", "Pea", "Persimmon", "Pineapple", 
    "Plum", "Pomegranate", "Potato", "Pumpkin", "Radish", 
    "Raspberry", "Red Cabbage", "Red Onion", "Snow Pea", "Spinach", 
    "Squash", "Strawberry", "Sweet Potato", "Tomato", "Watermelon"
];

const SearchInput = document.getElementById('SearchInput');
const WordList = document.getElementById('WordList');
const WordCount = document.getElementById('WordCount');
const SearchTitle = document.getElementById('SearchTitle'); 

function RenderList(WordsToDisplay, SearchQuery = "") {
    WordList.innerHTML = "";
    WordCount.textContent = WordsToDisplay.length;

    for (let i = 0; i < WordsToDisplay.length; i++) {
        let CurrentWord = WordsToDisplay[i];
        let ListItem = document.createElement('li');

        if (SearchQuery !== "") {
            let Regex = new RegExp(`(${SearchQuery})`, "gi");
            ListItem.innerHTML = CurrentWord.replace(Regex, `<span class="highlight">$1</span>`);
        } else {
            ListItem.textContent = CurrentWord;
        }

        WordList.appendChild(ListItem);
    }
}

RenderList(Dictionary);

SearchInput.addEventListener('input', function() {
    let Query = SearchInput.value.trim().toLowerCase();

    if (Query === "") {
        SearchTitle.textContent = "Search"; 
        RenderList(Dictionary);
    } else {
        SearchTitle.textContent = "Searching . . . . . "; 
        
        let FilteredWords = [];
        for (let i = 0; i < Dictionary.length; i++) {
            if (Dictionary[i].toLowerCase().includes(Query)) {
                FilteredWords.push(Dictionary[i]);
            }
        }
        
        RenderList(FilteredWords, Query);
    }
});