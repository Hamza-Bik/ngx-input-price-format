# InputPrice
This directive automatically formats input values as currency with decimal places.

Features
Automatically formats input values to a currency format with two decimal places.
Allows user input with numbers, commas, and a single decimal point.
Prevents invalid characters from being entered.
Updates the model value with the formatted number on blur.

## Installation
Install the package using npm:

```npm i ngx-input-price-format```


## Usage


Import the ```InputPriceModule```  in your app module:'s ```imports```

```import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputPriceModule } from 'lib-input-price';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    InputPriceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }```


Then, apply the ```libInputPrice``` directive to any input element:

```<input type="text" libInputPrice>```

This will automatically format the input value as currency (e.g., 1000 becomes 1,000.00).


## License
This project is licensed under the MIT License.
