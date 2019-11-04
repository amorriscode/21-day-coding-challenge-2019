# Challenge #5 - Voting Station Calculation

The election is looming, and the dutiful City of Codeville staff has finalized most of the details, except for one thing: where will citizens vote? There are hundreds of buildings in town, but there are very specific requirements for what constitutes an acceptable voting station. With very little time to decide, the city needs our help to sort through the building data.

## Instructions

Complete the function `chooseStations(stations)` that takes in an array of possible voting stations, and then only returns the names of the stations that are appropriate.

Your function will receive an array of stations, where each station itself is an array with a name, a capacity, and a venue type.

In order for a station to be deemed appropriate, it must have a **capacity of at least 20**, and be a **school** or **community centre**.

## Examples

Input:

```javascript
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];
```

Output:

```javascript
['Bright Lights Elementary', 'Moose Mountain Community Centre'];
```
