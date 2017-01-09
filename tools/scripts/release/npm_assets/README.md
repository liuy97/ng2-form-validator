# ng2-form-validator

Angular2 Form validator

## Installation

To install this library, run:

```bash
$ npm install ng2-form-validator --save
```

## Use

```bash
$ npm install ng2-form-validator
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { FormValidatorModule } from 'ng2-form-validator';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormValidatorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
add mapping in systemjs config 

'ng2-form-validator': 'node_modules/ng2-form-validator/bundles/form-validator.umd.js',

## validator directives

| Directives  | Usage |
| ------------- | ------------- |
| isAfter  | isAfter = "2012-1-1" |
| isAlpha | isAlpha  |
| isAlphanumeric | isAlphanumeric  |
| isBase64 | isBase64  |
| isBefore | isBefore = "2012-1-1"  |
| isBoolean | isBoolean  |
| isByteLength | isByteLength = {'min': 1, 'max': 10}  |
| isCreditCard | isCreditCard |
| isCurrency | isCurrency |
| isDataURI | isDataURI |
| isDate | isDate |
| isDecimal | isDecimal |
| isDivisibleBy | isDivisibleBy = 3 |
| isEmail | isEmail |
| isEmpty | isEmpty |
| isFloat | isFloat |
| isFQDN | isFQDN |
| isFullWidth | isFullWidth |
| isHalfWidth | isHalfWidth |
| isHexadecimal | isHexadecimal |
| isHexColor | isHexColor |
| isIn | isIn |
| isInt | isInt |
| isIP | isIP |
| isISBN | isISBN |
| isISIN | isISIN |
| isISO8601 | isISO8601 |
| isISSN | isISSN |
| isJSON | isJSON |
| isLength | isLength = {'min': 2, 'max': 22} |
| isLowercase | isLowercase |
| isMACAddress | isMACAddress |
| isMD5 | isMD5 |
| isMobilePhone | isMobilePhone = 'en-US'|
| isMongoId | isMongoId |
| isMultibyte | isMultibyte |
| isNumeric | isNumeric |
| isSurrogatePair | isSurrogatePair |
| isUppercase | isUppercase |
| isURL | isURL |
| isUUID | isUUID |
| isVariableWidth | isVariableWidth |
| isWhitelisted | isWhitelisted = "whitelist" |

```bash
$ npm run test
```

## License

MIT © [liuy97](liuy97@gmail.com)
