# KisanhubTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

This project it's a Kisanhub coding test.

This code, app, have a great failure thanks the library ng2-charts (based on charts) that can update the graph on other dates properly.

For updating the graph when changing the dates (from to to), you must, first change the dates and (after that) change the metrics in otder to change the type of graph. Only in that way (now) it updated the graph.

I know it can be solved by patching, but it's a problem for using the ng2-chart library.

Every component/service have a lot of comments to understand what I have do and how. I hope you understand it well.

## How its done

It can be done in several ways, so much that you can count them but I have selected this:

- Two components (selector and graph)
- One service for the data
- Material 2
- Bootstrap (for responsive)
- ng2-chart as a library for showing the data

On these way it can be show of a service, input, output (communication between components), the update method on angular... well, the typical use of angular :)

First you choose the where and the metric, then the component (selector one) uses the service for consulting the aw3 for fetching the data (and have all). The selector component shows you then the dates to choose, and, after you choose two it, comunicates with the other component (graph) witch generates the graph and the data table. Nothing more, nothing less.

Can it be done in other ways? Yes, for example with only one component, or without the service or using other library for the graph... but as I say, this way it's more modulable and show my "programming skills" (I suppose).

### Selector Component

This component it's for selecting the data. No need of constructor, no need of really nothing, only the material 2 way.

It recives the years of the graph component (from the filter), nothing more.

No css needed thanks to bootstrap.

### Graph Component

This is the principal component. Show the graph and the data.

It have the inputs from the selector component and the output emiter for the year.

It have a lot of methods too, from when it changes (ngOnChanges) to some private for updating/filtering the data (populateTheData). About filtering, of course it can be refactored to something better.

I have put the methods for the ng2-chart for click and hover events if needed but aren't used. They are there for future development (if... I don't know, you want to do something when clicking).

The documentation is on the comments.

### Fetch Service

A typical service to be inyected in the graph component for fetching the data, nothing more nothing less. Very easy to understant

## Build

On the /dist you cand fnd the build of all of this, but, if you want, you can download it and test it (internet conection needed).

The way to run it from the code:

1. Download it
2. npm install
3. ng serve

The way to run it from the dist:

1. Download it
2. Put the /dist and all the files on your server
3. Open it :)

# From here the typical doc of the ng

Yes after here there's the typical documentation of the NG (angular-cli).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
