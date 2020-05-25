import { equals } from "./lib/equals.ts";
import { isEmpty } from "./lib/isEmpty.ts";
import { isFullWidth } from "./lib/isFullWidth.ts";
import { isHalfWidth } from "./lib/isHalfWidth.ts";
import { isLowerCase } from "./lib/isLowerCase.ts";
import { isUpperCase } from "./lib/isUpperCase.ts";

interface ExportMap {
    [key: string]: Function
}

const exportMap: ExportMap = {
    equals,
    isEmpty,
    isFullWidth,
    isHalfWidth,
    isLowerCase,
    isUpperCase,
}

export default exportMap;