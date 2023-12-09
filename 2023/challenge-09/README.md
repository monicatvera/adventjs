# Challenge #9: 🚦 Switch the lights

The city is illuminating with Christmas lights 🎄, and as every year, they need to be fixed!

The lights come in two colors: 🔴 and 🟢. For the display to be appropriate, they must always alternate. That is, if the first light is red, the second must be green, the third red, the fourth green, and so on.

We have been asked to write a function `adjustLights` that, given an array of strings with the color of each light, returns the minimum number of lights that need to be changed for the colors to alternate.

```javascript
adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])
// -> 1 (change the fourth light to 🔴)

adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])
// -> 2 (change the second light to 🟢 and the third to 🔴)

adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])
// -> 0 (they are already alternating)

adjustLights(['🔴', '🔴', '🔴'])
// -> 1 (change the second light to 🟢)
```