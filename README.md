# Internet of Dachboden

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.


# Python Server

## Dependencies
The python server requires `simplejson` and `cherrypy`.

```
sudo easy_install cherrypy
sudo easy_install jsonpickle
```

## Running


```
grunt build
python server.py        # requires server.py, pyod/ and dist/
```


