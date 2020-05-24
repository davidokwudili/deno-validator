# deno-validator

[![Build Status](https://github.com/parasg1999/deno-validator/workflows/CI/badge.svg?branch=master)](https://github.com/parasg1999/deno-validator/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A library for validating and sanitizing strings, inspired by the popular [validator.js](https://github.com/validatorjs/validator.js)

## Strings only
**This library validates and sanitizes strings only.**

## Usage

```typescript
import * as validator from "https://deno.land/x/deno_validator/mod.ts";

validator.isEmail('foo@bar.com'); //=> true
```

## Validators

Here is a list of the validators currently available.

| Validator | Description |
| - | - |
| **equals(str, comparison [, options])** | check if the string matches the comparison.<br/><br/>`options` is an object which defaults to `{ trim: false, ignore_case: false }`. |
| **isEmpty(str [, options])** | check if the string has a length of zero. <br/><br/>`options` is an object which defaults to `{ ignore_whitespace:false }`. |
| **isLowerCase(str)** | check if the string is lowercase. |
| **isUpperCase(str)** | check if the string is uppercase. |