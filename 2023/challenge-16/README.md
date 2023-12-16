## Challenge #16: ❌ Friday deployment

Yesterday, there was a production deployment mishap, and now the Christmas tree assembly application is in disarray. The task is to fix it promptly. The issue lies in the changed format of the trees from an array of numbers to an object representation. For instance, the tree `[3, 1, 0, 8, 12, null, 1]` should be transformed into the following object:

```javascript
{
  value: 3,
  left: {
    value: 1,
    left: {
      value: 8,
      left: null,
      right: null
    },
    right: {
      value: 12,
      left: null,
      right: null
    }
  },
  right: {
    value: 0,
    left: null,
    right: {
      value: 1,
      left: null,
      right: null
    }
  }
}
```

The elf on duty who tried to solve the problem before going home, left us some clues:

If a node doesn't have a value, it's represented with null. Therefore, if a node has a null value, it won't have any children.
The root node is at index 0 in the array.
There's a relationship between the index of a node and the index of its children. Look for the pattern!