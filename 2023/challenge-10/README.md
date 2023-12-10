# Challenge #10: 🎄 Create your own Christmas tree

Sam Elfman has a brilliant idea! He wants to offer a service that creates a customized Christmas tree 🎄 in a matter of seconds.

To create it, we are given a string to form the tree and a number indicating its height. Each character of the string represents an ornament of the tree, and we use them cyclically until we reach the indicated height. At least, they will always pass us one.

We must return a multiline string with the Christmas tree made with the ornaments, the indicated height plus a final line with the trunk formed by the character | in the center and, finally, a newline \n.

## Example Usage:

```javascript
createChristmasTree("123", 4)
// ->
//    1
//   2 3
//  1 2 3
// 1 2 3 1 2
//    |

createChristmasTree("*@o", 3)
// ->
//   *
//  @ o
// * @ o
//   |
```
**Note:**

- The tree should always be centered, adding blank spaces to the left of each line.
- Create spaces only to the left of each line of the tree; do not leave blank spaces to the right.
- The ornaments have a white space between them for separation.