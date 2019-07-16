Implement sortPeopleByClass function which accepts object with people names and their classes chain.
It should return array of names sorted according to person class from higher rank to lower rank.

Example: lower-upper-lower-middle-middle-upper

There's three classes: higher, middle and lower.

higher > middle > lower.

lower-upper
middle-upper        > middle
upper-upper

lower-middle
middle-middle       > lower
upper-middle       

In case people has different amount of ancestors, you need to assume that all missed ancestors had middle class.
In case people has the same resulted class you need to sort them by name.

sortPeopleByClass({
  'John': 'lower-middle-middle-upper-lower class',
  'Yulia': 'upper-upper class',
  'Simon': 'middle-upper-upper class',
  'Akira': 'lower-lower-middle class',
  'Rich': 'middle-lower-upper-upper-upper class'
}); -> ['Rich', 'Simon', 'Yulia', 'Akira', 'John']