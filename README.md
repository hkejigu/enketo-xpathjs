Enketo-XPathJS [![npm version](https://badge.fury.io/js/enketo-xpathjs.svg)](http://badge.fury.io/js/enketo-xpathjs) [![Build Status](https://travis-ci.org/enketo/enketo-xpathjs.svg?branch=master)](https://travis-ci.org/enketo/enketo-xpathjs)
=======

Enketo-XPathJS is a fork of XPathJS, a pure JavaScript implementation of [XPath 1.0](http://www.w3.org/TR/xpath/) and [DOM Level 3 XPath](http://www.w3.org/TR/DOM-Level-3-XPath/) specifications. 

This fork extends XPathJS with custom ODK/OpenRosa functions and the 'date' datatype. 


Features
--------

  * Works in all major browsers: IE8+, Firefox, Chrome, Safari, Opera
  * Supports XML namespaces!
  * No external dependencies, include just a single .js file
  * Regression tested against [hundreds of unit test cases](http://projects.aidwebsolutions.com/xpathjs_javarosa/tests/).
  * Works in pages served as both, _text/html_ and _application/xhtml+xml_ content types.
  * The core is [benchmarked](http://www.pokret.org/xpathjs/benchmark/) against other XPath implementations.

Getting Started
--------

  1. Include with `npm install enketo-xpathjs --save` or manually download and add [build/enketo-xpathjs.min.js](https://raw.github.com/enketo/enketo-xpathjs/master/build/enketo-xpathjs.min.js) file.
  
  2. Include enketo-xpathjs.min.js in the \<head> of your HTML document.
     NOTE: Make sure HTML document is in strict mode i.e. it has a !DOCTYPE declaration at the top!
  
  2. Initialize XPathJS:
     
     ```javascript
    // bind XPath methods to document and window objects
    // NOTE: This will overwrite native XPath implementation if it exists
    XPathJS.bindDomLevel3XPath();
    ```
     
  3. You can now use XPath expressions to query the DOM:
     
     ```javascript
    var result = document.evaluate(
        '//ul/li/text()', // XPath expression
        document, // context node
        null, // namespace resolver
        XPathResult.ORDERED_NODE_SNAPSHOT_TYPE
    );
    
    // loop through results
    for (var i = 0; i < result.snapshotLength; i++) {
        var node = result.snapshotItem(i);
        alert(node.nodeValue);
    }
    ```

Take a look at some [working examples](http://www.pokret.org/xpathjs/examples/) to get a better idea of how to use XPathJS.

Note that [ODK/OpenRosa spec](http://opendatakit.github.io/odk-xform-spec/) deviates from the XPath spec in a few ways. Since these deviations deal with core XPath 1.0 functions, and will (maybe) eventually be rectified, no workarounds have been introduced in this fork to mimic the deviated behaviour. Where necessary Enketo includes workarounds to correct expressions before they are sent to the XPath evaluator. This way it can easily be removed in the future and the Evaluator stays 'pure'.

An exception are the ODK deviations for native XPath 1.0 function round(), concat() and position(). These functions were replaced with custom versions as they do not break the original functionality of the native functions.

Take a look at the [**CAVEATS**](https://github.com/andrejpavlovic/xpathjs/blob/master/CAVEATS.md) document to get a better understanding of XPathJS limitations.


Background
--------

While developing [Enketo](http://blog.enketo.org/) - an offline-web application to conduct surveys in areas with problematic Internet connectivity using the ODK/OpenRosa form format - the need arose for a client-side XPath Processor that could be easily extended. Andrej Pavlovic' excellent XPathJS project was chosen due to the very easily readable code and seemingly robust implementation (and indeed no bugs were found!) of the DOM Level 3 XPath Processor.

I hope this project helps to promote the adoption of a platform with multiple data collection, entry, collation and analysis apps that use an open format and can work together.

Development
--------

  * [Source code](https://github.com/enketo/enketo-xpathjs)
  * [Issue tracker](https://github.com/enketo/enketo-xpathjs)


License
--------

See the [XPathJS project](https://github.com/andrejpavlovic/xpathjs) for license information of XPathJS. This fork has the same license.


Build
--------

In order to build the code yourself, you will need the following tools:


```bash
git clone https://github.com/andrejpavlovic/xpathjs.git
cd xpathjs
npm install
grunt dist
```

Test
----------

Run tests headlessly with `grunt karma:headless` and in browsers with `grunt karma:browsers`.


Change log
--------

See [change log](./CHANGELOG.md)
