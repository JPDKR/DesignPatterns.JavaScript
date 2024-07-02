class Either {
    constructor(left, right) {
        this.left = left;
        this.right = right;
        this.isLeft = left !== null && left !== undefined;
    }

    static left(value) {
        return new Either(value, null);
    }

    static right(value) {
        return new Either(null, value);
    }

    isRight() {
        return !this.isLeft;
    }
}
