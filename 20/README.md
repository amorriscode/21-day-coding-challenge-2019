# Challenge #20 - Bouncy Castles

There's a new attraction at this year's town festival. The organizers have decided to bring in several inflatable attractions, but they have no clue how to much blow them up. Each attraction needs to be pumped to a precise volume to achieve maximum festival fun!

The attractions are each made up of a combination of several different shapes: cones, spheres and prisms. For example, the giant inflatable duck is made up of two spheres (the body and head) and a cone (the beak) 🦆.

## Instructions

Each shape has a different calculation for determining volume, so we'll need to create a few functions that will help us figure out the volume of the various inflatable attractions.

In this challenge, we'll need to implement four functions.

The first three will calculate the volume of the individual shapes:

- `sphereVolume()` will calculate the volume of a sphere given a radius
- `coneVolume()` will calculate the volume of a cone given a radius and a height
- `prismVolume()` will calculate the volume of a prism given a height, a width, and a depth

The fourth function, `totalVolume()`, will receive an array containing the different shapes that make up a single attraction. The totalVolume function should use the previous three functions to calculate the total volume of an attraction.

Don't worry about getting the answers to the perfect precision: our tests will check to see that you're within a correct range.

## Examples

Input:

```javascript
const sphere = {
  type: 'sphere',
  radius: 2
}

sphereVolume(sphere.radius)
```

Output:

```javascript
33.5102
```

Input:

```javascript
const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

coneVolume(cone.radius, cone.height)
```

Output:

```javascript
47.12385
```

Input:

```javascript
const prism = {
  type: 'prism',
  height: 3,
  width: 4,
  depth: 5
}

prismVolume(prism.height, prism.width, prism.depth)
```

Output:

```javascript
60
```

Input:

```javascript
const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

totalVolume(duck)
```

Output:

```javascript
272318.257
```
