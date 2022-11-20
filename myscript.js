const books = [
    {title: 'Total loss', pages: 600, genre: 'fantasy', rating: 5},
    {title: 'Total enlightenment', pages: 250, genre: 'romance', rating: 2},
    {title: 'Big loss', pages: 400, genre: 'fantasy', rating: 7},
    {title: '10th Joy', pages: 32, genre: 'action', rating: 8},
    {title: 'Quickfix', pages: 15, genre: 'fantasy', rating: 1},
    {title: 'World Ender', pages: 199, genre: 'fantasy', rating: 3},
    {title: 'Paranormal', pages: 200, genre: 'thriller', rating: 9},
    {title: '300', pages: 600, genre: 'criminology', rating: 10},
    {title: 'Renewer', pages: 472, genre: 'biology', rating: 2},
];
//PRZYKŁADY:
//tworzymy funkcje
const filterTitleStartsWithTotal = (list) => list.filter((book) => book.title.startsWith('Total'));
const filterGenreIsFantasy = (list) => list.filter((book) => book.genre === 'fantasy');
const mapToPages = (list) => list.map(({pages}) => pages);
const sumPages = (book) => book.reduce((currSum, newPage) => currSum + newPage)
//tworzymy kompozycje
const badCompose = (fn1, fn2, fn3) => (x) => fn3(fn2(fn1(x)));
const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);
//tworzymy funkcję używającą kompozycji
const titleStartsWithTotalPages = compose(sumPages, mapToPages, filterTitleStartsWithTotal);
const genreIsFantasyPages = compose(sumPages, mapToPages, filterGenreIsFantasy);



const zad1_litery = (books) => {

    var litery = [];
    let i = 0

    books.forEach(book => {
    litery[i] = book.title.replace(" ", "").length;
    i++
    });

    return litery;   
}

const zad1_strony = (books) => books.filter(x => x.pages %2 == 0);

const zad1_gatunek = (books) => books.filter(filtr => filtr.genre.endsWith("y"));


const kompozycja = compose(zad1_litery, zad1_strony, zad1_gatunek);




const zad2_ocena = (books) => books.filter(filtr => filtr.rating > 5);
const zad2_strony = (books) => books.filter(filtr => filtr.pages %2 != 0);
const zad2_liczba = (books) => books.filter(filtr => /\d/.test(filtr.title));

const kompozycja2 = compose(zad2_ocena, zad2_strony, zad2_liczba);



const zad3 = (books) =>
{
    var max = books[0].title.length;
    var max2 = max;
    var max_tytul = books[0].title;
    var max2_Tytul = max_tytul;

    for(let i = 1; i < books.length; i++)
    {
        if(books[i].title.length > max)
        {
            max2 = max;
            max2_Tytul = max_tytul;
            max = books[i].title.length;
            max_tytul = books[i].title;
        }
        if(books[i].title.length > max2 && books[i].title.length < max )
        {
            max2 = books[i].title.length;
            max2_Tytul = books[i].title;
        }
    }

 
    
    return max2_Tytul;
};


//wypisujemy dla książek
console.log(titleStartsWithTotalPages(books));
console.log(genreIsFantasyPages(books));

console.log("Zadanie 6");
console.log(kompozycja(books));

console.log("Zadanie 7");
console.log(kompozycja2(books));

console.log("Zadanie 8");
console.log(zad3(books));

