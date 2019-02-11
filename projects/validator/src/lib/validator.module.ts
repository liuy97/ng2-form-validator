import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContainsValidatorDirective } from './contains';
import { EmailValidatorDirective } from './isEmail';
import { IsURLValidatorDirective } from './isURL';
import { IsMACAddressValidatorDirective } from './isMACAddress';
import { IsIPValidatorDirective } from './isIP';
import { IsFQDNValidatorDirective } from './isFQDN';
import { IsBooleanValidatorDirective } from './isBoolean';
import { IsAlphaValidatorDirective } from './must.alpha';
import { IsAlphanumericValidatorDirective } from './isAlphanumeric';
import { IsNumericValidatorDirective } from './isNumeric';
import { IsLowercaseValidatorDirective } from './isLowercase';
import { IsUppercaseValidatorDirective } from './isUppercase';
import { IsAsciiValidatorDirective } from './isAscii';
import { IsFullWidthValidatorDirective } from './isFullWidth';
import { IsHalfWidthValidatorDirective } from './isHalfWidth';
import { IsVariableWidthValidatorDirective } from './isVariableWidth';
import { IsMultibyteValidatorDirective } from './isMultibyte';
import { IsSurrogatePairValidatorDirective } from './isSurrogatePair';
import { IsIntValidatorDirective } from './isInt';
import { IsFloatValidatorDirective } from './isFloat';
import { IsDecimalValidatorDirective } from './isDecimal';
import { IsHexadecimalValidatorDirective } from './isHexadecimal';
import { IsDivisibleByValidatorDirective } from './isDivisibleBy';
import { IsHexColorValidatorDirective } from './isHexColor';
import { IsMD5ValidatorDirective } from './isMD5';
import { IsJSONValidatorDirective } from './isJSON';
import { IsEmptyValidatorDirective } from './isEmpty';
import { IsLengthValidatorDirective } from './isLength';
import { IsByteLengthValidatorDirective } from './isByteLength';
import { IsUUIDValidatorDirective } from './isUUID';
import { IsMongoIdValidatorDirective } from './isMongoId';
import { IsDateValidatorDirective } from './isDate';
import { IsAfterValidatorDirective } from './must.after';
import { IsBeforeValidatorDirective } from './isBefore';
import { IsInValidatorDirective } from './isIn';
import { IsCreditCardValidatorDirective } from './isCreditCard';
import { IsISINValidatorDirective } from './isISIN';
import { IsISBNValidatorDirective } from './isISBN';
import { IsISSNValidatorDirective } from './isISSN';
import { IsMobilePhoneValidatorDirective } from './isMobilePhone';
import { IsCurrencyValidatorDirective } from './isCurrency';
import { IsISO8601ValidatorDirective } from './isISO8601';
import { IsBase64ValidatorDirective } from './isBase64';
import { IsDataURIValidatorDirective } from './isDataURI';
import { IsWhitelistedValidatorDirective } from './whitelist.directive';

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [
    ContainsValidatorDirective,
    EmailValidatorDirective,
    IsURLValidatorDirective,
    IsMACAddressValidatorDirective,
    IsIPValidatorDirective,
    IsFQDNValidatorDirective,
    IsBooleanValidatorDirective,
    IsAlphaValidatorDirective,
    IsAlphanumericValidatorDirective,
    IsNumericValidatorDirective,
    IsLowercaseValidatorDirective,
    IsUppercaseValidatorDirective,
    IsAsciiValidatorDirective,
    IsFullWidthValidatorDirective,
    IsHalfWidthValidatorDirective,
    IsVariableWidthValidatorDirective,
    IsMultibyteValidatorDirective,
    IsSurrogatePairValidatorDirective,
    IsIntValidatorDirective,
    IsFloatValidatorDirective,
    IsDecimalValidatorDirective,
    IsHexadecimalValidatorDirective,
    IsDivisibleByValidatorDirective,
    IsHexColorValidatorDirective,
    IsMD5ValidatorDirective,
    IsJSONValidatorDirective,
    IsEmptyValidatorDirective,
    IsLengthValidatorDirective,
    IsByteLengthValidatorDirective,
    IsUUIDValidatorDirective,
    IsMongoIdValidatorDirective,
    IsDateValidatorDirective,
    IsAfterValidatorDirective,
    IsBeforeValidatorDirective,
    IsInValidatorDirective,
    IsCreditCardValidatorDirective,
    IsISINValidatorDirective,
    IsISBNValidatorDirective,
    IsISSNValidatorDirective,
    IsMobilePhoneValidatorDirective,
    IsCurrencyValidatorDirective,
    IsISO8601ValidatorDirective,
    IsBase64ValidatorDirective,
    IsWhitelistedValidatorDirective,
    IsDataURIValidatorDirective
  ],
  exports:  [
    ContainsValidatorDirective,
    EmailValidatorDirective,
    IsURLValidatorDirective,
    IsMACAddressValidatorDirective,
    IsIPValidatorDirective,
    IsFQDNValidatorDirective,
    IsBooleanValidatorDirective,
    IsAlphaValidatorDirective,
    IsAlphanumericValidatorDirective,
    IsNumericValidatorDirective,
    IsLowercaseValidatorDirective,
    IsUppercaseValidatorDirective,
    IsAsciiValidatorDirective,
    IsFullWidthValidatorDirective,
    IsHalfWidthValidatorDirective,
    IsVariableWidthValidatorDirective,
    IsMultibyteValidatorDirective,
    IsSurrogatePairValidatorDirective,
    IsIntValidatorDirective,
    IsFloatValidatorDirective,
    IsDecimalValidatorDirective,
    IsHexadecimalValidatorDirective,
    IsDivisibleByValidatorDirective,
    IsHexColorValidatorDirective,
    IsMD5ValidatorDirective,
    IsJSONValidatorDirective,
    IsEmptyValidatorDirective,
    IsLengthValidatorDirective,
    IsByteLengthValidatorDirective,
    IsUUIDValidatorDirective,
    IsMongoIdValidatorDirective,
    IsDateValidatorDirective,
    IsAfterValidatorDirective,
    IsBeforeValidatorDirective,
    IsInValidatorDirective,
    IsCreditCardValidatorDirective,
    IsISINValidatorDirective,
    IsISBNValidatorDirective,
    IsISSNValidatorDirective,
    IsMobilePhoneValidatorDirective,
    IsCurrencyValidatorDirective,
    IsISO8601ValidatorDirective,
    IsBase64ValidatorDirective,
    IsWhitelistedValidatorDirective,
    IsDataURIValidatorDirective
  ],
  entryComponents: [  ]
})

export class FormValidatorModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FormValidatorModule
    };
  }
}
