import * as angular from "angular";
import {appModule} from "./app.module";
// import {AppComponent} from "./app.component";
import "./site.css";

// const components = [
//     AppComponent,
// ];

angular.bootstrap(document.querySelector("html"), [appModule.name]);
