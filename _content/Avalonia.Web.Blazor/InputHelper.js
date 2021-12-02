export class InputHelper {
    static clear(inputElement) {
        inputElement.value = "";
    }
    static focus(inputElement) {
        inputElement.focus();
    }
    static setCursor(inputElement, kind) {
        inputElement.style.cursor = kind;
    }
    static hide(inputElement) {
        inputElement.style.display = 'none';
    }
    static show(inputElement) {
        inputElement.style.display = 'block';
    }
}
//# sourceMappingURL=InputHelper.js.map