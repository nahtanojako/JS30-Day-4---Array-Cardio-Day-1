 // Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1
    // Some data we can work with
    const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];
    const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// -----------------------------------------------------------

    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    // let filtered = inventors.filter(function(inventor) {
    //   if(inventor.year >= 1500 && inventor.year < 1600) {
    //     return inventor;
    //   }
    // });
    
    // shortened
    let filtered = inventors.filter( inventor => (inventor.year >= 1500 && inventor.year < 1600) );
    console.table(filtered);
  
// ------------------------------------------------------------

    // Array.prototype.map()
    // 2. Give us an array of the inventors' first and last names
    // let mapped = inventors.map(function(inventor) {
    //   return `${inventor.first} ${inventor.last}`;
    // })
    
    // Shortened
    let mapped = inventors.map( inventor => `${inventor.first} ${inventor.last}`);
    
    console.table(mapped);

   
// -----------------------------------------------------------

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
    // let sorted = inventors.sort(function(a, b) {
    //   if(a.year > b.year) {
    //     return 1;
    //   } else {
    //     return -1;
    //   }
    // });

    // another way
    let sorted = inventors.sort( (a, b) => a.year - b.year);

    console.table(sorted);


// ---------------------------------------------------------

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live?
    // let totalYears = inventors.reduce(function(total, inventor) {
    //   return total + (inventor.passed - inventor.year);
    // }, 0);

    // using arrow function
    let totalYears = inventors.reduce((total, inventor) => {
      
      // update the value of total by adding the years of inventor's lived
      return total + (inventor.passed - inventor.year);
      
    }, 0); // set the initial value to 0

    console.log(totalYears);
    
// ----------------------------------------------------------

    // 5. Sort the inventors by years lived shortest to longest
    let oldest = inventors.sort( (a, b) => {
      
      // make a storage of the first person years lived
      let prevInventor = a.passed - a.year;
      
      // make a storage of the next person years lived
      let nextInventor = b.passed - b.year;
      
      return prevInventor > nextInventor ? 1 : -1;
    });
    
    console.table(oldest);
    
    
// -----------------------------------------------------

    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

    // get the parent element
    let category = document.querySelector('.mw-category');

    // get all the links of the parent element and convert it from nodelist into array
    let links = Array.from(category.querySelectorAll('a'));

    // map all the text content
    // filter the text content that has the word 'de'
    let de = links.map(link => link.textContent).filter(streetName => streetName.includes('de'));
    
    
// ------------------------------------------------------

    // 7. sort Exercise
    // Sort the people alphabetically by last name
    //the last name comes before the comma
    let alpha = people.sort(function(prev, next) {
      
      // make a storage of prev person and next person and convert it to an array and include comma
      let [aLast, aFirst] = prev.split(', ');
      let [bLast, bFirst] = next.split(', ');
      
      // if the last name of the first person is greater than the next person bring him forward otherwise bring backward
      return aLast > bLast ? 1 : -1;
    });

    console.table(alpha)
   
// --------------------------------------------------------

    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

    let transportation = data.reduce(function(obj, item) {
      // If no item found in the object set it to 0
      if (!obj[item]) {
        obj[item] = 0;
      }
      
      // add every instances of item
      obj[item]++;
      
      // return the obj
      return obj;
    }, {}); // set the initial value to blank object

    console.log(transportation);