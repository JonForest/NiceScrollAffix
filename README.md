# NiceScrollAffix
NiceScroll versus Bootstrap Affix fix

#### HTML Element
```html
<div id="helpSection" data-spy="affix" data-attach-to="#content" data-offset-top="68">
```
This is per the Bootstrap mark-up, but with the addition of an ```data-attach-to```.  The value here should be the jQuery selector for the element on which NiceScroll has been attached.



#### The Javascript
Include the Javascript file in this repo at the end of your HTML file, after JQuery and NiceScroll.
