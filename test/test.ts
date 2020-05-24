import {
    assertEquals,
    assertThrows,
} from "https://deno.land/std/testing/asserts.ts";
import * as validator from "../mod.ts";

Deno.test('isEmpty', function (): void {
    assertEquals(validator.isEmpty(""), true);
    assertEquals(validator.isEmpty("foo"), false);
    assertEquals(validator.isEmpty("   "), false);
    assertEquals(validator.isEmpty("   ", { ignore_whitespace: true }), true);
})

Deno.test('isFullWidth', function (): void {
    [
        'ひらがな・カタカナ、．漢字',
        '３ー０　ａ＠ｃｏｍ',
        'Ｆｶﾀｶﾅﾞﾬ',
        'Good＝Parts',
    ].forEach(e => {
        assertEquals(validator.isFullWidth(e), true)
    });

    [
        'abc',
        'abc123',
        '!"#$%&()<>/+=-_? ~^|.,@`{}[]',
    ].forEach(e => {
        assertEquals(validator.isFullWidth(e), false)
    });
})

Deno.test('isHalfWidth', function (): void {
    [
        '"#$%&()<>/+=-_? ~^|.,@`{}[]',
        'l-btn_02--active',
        'abc123い',
        'ｶﾀｶﾅﾞﾬ￩',
    ].forEach(e => {
        assertEquals(validator.isHalfWidth(e), true)
    });

    [
        'あいうえお',
        '００１１',
    ].forEach(e => {
        assertEquals(validator.isHalfWidth(e), false)
    });
})

Deno.test('isLowerCase', function (): void {
    assertEquals(validator.isLowerCase(""), true);
    assertEquals(validator.isLowerCase("foo"), true);
    assertEquals(validator.isLowerCase("BAR"), false);
    assertEquals(validator.isLowerCase("BaZ"), false);
})

Deno.test('isUpperCase', function (): void {
    assertEquals(validator.isUpperCase(""), true);
    assertEquals(validator.isUpperCase("foo"), false);
    assertEquals(validator.isUpperCase("BAR"), true);
    assertEquals(validator.isUpperCase("BaZ"), false);
})
