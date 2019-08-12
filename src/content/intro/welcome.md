# welcome to my website

```javascript
I code stuff

const me = coder
```

&nbsp;

### i am using marked.js with highlighting.js

```javascript
const praise = "We can do beautiful things with these libraries!"

console.log(praise)
```

&nbsp;

### try it out in the left-hand editor!

```javascript
const micTest = 'Hello World!'

console.log(micTest)
```

&nbsp;

### a bit of lorem ipsum to test

**from the 1914 translation by H. Rackham...**

"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"

&nbsp;

### brew it

```javascript
import Coffee from './coffee/Coffee.js'
import Espresso from './coffee/Espresso.js'
import Mug from './coffee/Mug.js'

/**
 * Brews a cup of coffee.
 */
 function brew(): Coffee {
    // create a two shot espresso with arabica grounds,
    const espresso = Espresso(shots = 2, grounds = "arabica")
    
    // get yourself a mug...
    const cuppa = Mug(color = Colors.BLUE)

    // create the cup of coffee!
    return Coffee(espresso, mug)
}

```