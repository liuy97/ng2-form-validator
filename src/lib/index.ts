import {
  Directive,
  Input,
  NgModule,
  ModuleWithProviders,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewContainerRef
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule,
  Validator,
  NG_VALIDATORS,
  Validators,
  AbstractControl,
  ValidatorFn
} from '@angular/forms';

import { ContainsValidatorDirective } from './validator/lib/contains';
import { EmailValidatorDirective } from './validator/lib/isEmail';
import { IsURLValidatorDirective } from './validator/lib/isURL';
import { IsMACAddressValidatorDirective } from './validator/lib/isMACAddress';
import { IsIPValidatorDirective } from './validator/lib/isIP';
import { IsFQDNValidatorDirective } from './validator/lib/isFQDN';
import { IsBooleanValidatorDirective } from './validator/lib/isBoolean';
import { IsAlphaValidatorDirective } from './validator/lib/isAlpha';
import { IsAlphanumericValidatorDirective } from './validator/lib/isAlphanumeric';
import { IsNumericValidatorDirective } from './validator/lib/isNumeric';
import { IsLowercaseValidatorDirective } from './validator/lib/isLowercase';
import { IsUppercaseValidatorDirective } from './validator/lib/isUppercase';
import { IsAsciiValidatorDirective } from './validator/lib/isAscii';
import { IsFullWidthValidatorDirective } from './validator/lib/isFullWidth';
import { IsHalfWidthValidatorDirective } from './validator/lib/isHalfWidth';
import { IsVariableWidthValidatorDirective } from './validator/lib/isVariableWidth';
import { IsMultibyteValidatorDirective } from './validator/lib/isMultibyte';
import { IsSurrogatePairValidatorDirective } from './validator/lib/isSurrogatePair';
import { IsIntValidatorDirective } from './validator/lib/isInt';
import { IsFloatValidatorDirective } from './validator/lib/isFloat';
import { IsDecimalValidatorDirective } from './validator/lib/isDecimal';
import { IsHexadecimalValidatorDirective } from './validator/lib/isHexadecimal';
import { IsDivisibleByValidatorDirective } from './validator/lib/isDivisibleBy';
import { IsHexColorValidatorDirective } from './validator/lib/isHexColor';
import { IsMD5ValidatorDirective } from './validator/lib/isMD5';
import { IsJSONValidatorDirective } from './validator/lib/isJSON';
import { IsEmptyValidatorDirective } from './validator/lib/isEmpty';
import { IsLengthValidatorDirective } from './validator/lib/isLength';
import { IsByteLengthValidatorDirective } from './validator/lib/isByteLength';
import { IsUUIDValidatorDirective } from './validator/lib/isUUID';
import { IsMongoIdValidatorDirective } from './validator/lib/isMongoId';
import { IsDateValidatorDirective } from './validator/lib/isDate';
import { IsAfterValidatorDirective } from './validator/lib/isAfter';
import { IsBeforeValidatorDirective } from './validator/lib/isBefore';
import { IsInValidatorDirective } from './validator/lib/isIn';
import { IsCreditCardValidatorDirective } from './validator/lib/isCreditCard';
import { IsISINValidatorDirective } from './validator/lib/isISIN';
import { IsISBNValidatorDirective } from './validator/lib/isISBN';
import { IsISSNValidatorDirective } from './validator/lib/isISSN';
import { IsMobilePhoneValidatorDirective } from './validator/lib/isMobilePhone';
import { IsCurrencyValidatorDirective } from './validator/lib/isCurrency';
import { IsISO8601ValidatorDirective } from './validator/lib/isISO8601';
import { IsBase64ValidatorDirective } from './validator/lib/isBase64';
import { IsDataURIValidatorDirective } from './validator/lib/isDataURI';
import { IsWhitelistedValidatorDirective } from './validator/lib/isWhitelisted';

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
