# jquery.character-limit
A very simple jQuery plugin which allows character limits to be placed on textareas

## Prerequisites
1. jQuery (tested with v1.3+)

## How to use
1. Include the plugin in your html page `<script type="text/javascript" src="jquery.character-limit.js"></script>`  
2. After document ready initialise the plugin on your textarea `$("textarea").characterLimit()`

## Examples
To restrict a textarea to a maximum of 100 characters you can use the default setting as follows
```html
<html>
    <head>
        <!-- Include jquery libraries here -->
        <script type="text/javascript" src="jquery-character-limit.js" ></script>
        <script type="text/javascript" src="main.js" ></script>
    </head>
    <body>
        <textarea id="restrict"></textarea>
    </body>
</html>
```
```javascript
//main.js
$(function() {
    $("#restrict").characterLimit();
});
```

To customise the maximum characters allowed you can override the default settings as follows
```javascript
//main.js
$(function() {
    $("#restrict").characterLimit({
        maxCharacters:20
    });
});
```
