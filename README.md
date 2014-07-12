
Simple JavaScript Unit Test example Using QUnit
================================================

**HTML Form layout of the example:-**

    Number 1: [?]
    Number 2: [?]
    Sum of number 1 and number 2: ?
    
    [Calculate Sum]
                
**Folder structure of the example:-**

- Open src/index.html to run the example app
- Open test/index.html to run the unit test

```
|
|
-- src --
|       |-- css
|       |       - style.css
|       |
|       |-- js
|       |       - main.js (Holds App related JS methods)
|       |       - jquery-1.11.1.min.js
|       |
|       | 
|       - index.html
|
|
-- tests --
|       |
|       unit --
|           |-- css
|           |       - qunit-1.14.0.css
|           |
|           |-- js
|           |       - main.js (Holds unit tests)
|           |       - qunit-1.14.0.js
|           |
|           | 
|           - index.html
|
- README.md
```
Online Demo for the app:-
http://opensourcesoftwares.github.io/simple-qunit-example/src/

Online Demo for the qunit test:-
http://opensourcesoftwares.github.io/simple-qunit-example/tests/unit/

**NOTE:**

When creating tests for an application, we recommend placing the tests in a location that is outside of the normal source code tree rather than inside the code package directory. Doing so provides the following benefits:

- Production deployments are simplified by eliminating the need to exclude tests during the build process.
- The risk of accidental disclosure of security-sensitive information stored inside test files is eliminated, as data related to testing is never part of the directory structure that is exposed by production Web servers.
- The tests directory should ideally be subdivided into three to four subdirectories:
    - *functional*: Functional test modules
    - *support*: Testing support files: utility modules, mock data, custom reporters, custom interfaces, etc.
    - *system (optional)*: A separate set of system integration tests that do not correspond directly to individual application modules
    - *unit*: Unit test modules

The directory structure within the functional and unit tests directories should match the directory structure of the main application package so that it is easy to associate tests with their corresponding source code. 
