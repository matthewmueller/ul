
# ul

  &lt;ul&gt; component

## Installation

  Install with [component(1)](http://component.io):

    $ component install matthewmueller/ul

## Example

```js
ul()
  .li('Fruits')
  .ul()
    .li('Green')
    .ul()
      .li('Pear')
      .li('Apple')
      .ul()
        .li('Granny Smith')
        .li('Sour')
        .close()
        .end()
      .li('Grapes')
      .close()
      .end()
    .li('Yellow')
    .ul()
      .li('Banana')
      .li('Apple')
      .close()
      .end()
    .li('Purple')
    .ul()
      .li('Plum')
      .li('Grapes')
      .close()
      .end()
    .end()
  .li('Vegetables')
```

## API

### ul()

Create a list

### ul#li(el)

Create a list containing `el`

### ul#ul()

Create an inner list. The previous `<li>` will toggle the `<ul>`

### ul#open()

Open the list

### ul#close()

Close the list

### ul#end()

Return previous `ul` instance

## License

  The MIT License (MIT)

  Copyright (c) 2014 <copyright holders>

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
