var Character = /** @class */ (function () {
    function Character(partOfPassword, char) {
        this.partOfPassword = partOfPassword;
        if (char.length > 1) {
            throw new Error('constructor expects char (string with length of 1), string given');
        }
        this.char = char;
    }
    return Character;
}());
export { Character };
//# sourceMappingURL=Character.js.map