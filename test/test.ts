import {
    assertEquals,
    assertThrows,
} from "https://deno.land/std/testing/asserts.ts";
import * as validator from "../mod.ts";

Deno.test('isEmpty', function(): void {
    assertEquals(validator.isEmpty(""),true);
    assertEquals(validator.isEmpty("any string"),false);
    assertEquals(validator.isEmpty("   "),false);
    assertEquals(validator.isEmpty("   ",{ignore_whitespace:true}),true);
})

Deno.test('isUpperCase', function(): void {
    assertEquals(validator.isUpperCase(""),true);
    assertEquals(validator.isUpperCase("any string"),false);
    assertEquals(validator.isUpperCase(" ANYTHING  "),true);
})

Deno.test('isLowerCase', function(): void {
    assertEquals(validator.isLowerCase(""),true);
    assertEquals(validator.isLowerCase("any string"),true);
    assertEquals(validator.isLowerCase(" ANYTHING  "),false);
})