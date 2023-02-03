# JSON JavaScript object notation

## Documentation 

json.org

## File extension .json

## Values
-   strings
-   numbers
-   arrays
-   objects
-   true
-   null

## Examples

### String
Must be double quoted
empty string is ""

```
"this is a string"
"this is a \"quote\" in the 'middle' of the string
"hearts symbol is \u2665"
```

outputs
```

```

### Number
-   no leading +
-   only one leading 0
-   decimal separator is .

These are allowed
```
json 0, 0.5, 345.555, 1200, -1, -0.57, -23.44, 1.5E10, 2E-2, 2E-2, 1e3
```

These are not allowed
```
00.34, +20, +0.5, 00023
```

## Array

Array begins with brackets [and ends with]. Values in the array are separated with comma , .

``
[1, 2, 3, 4, 5]
["text", "text2"]
[{"name": "matt"}, {"name": "vera", "age":15}]
[true,false,true]
[[1,2,3,],[4,5,6]]
````

## Object
```
{
"name": "matt",
"lname": "riv",
"age": 20
}

{
    "name": "matt",
    "children" [
        {"name": "vera","age": 5}
    ]
},
"children" [
        {"name": "vera",
        "children": [{"name", "jess", "age", 15}]}
    ]
}


```


