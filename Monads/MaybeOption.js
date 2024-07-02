class Maybe {
    constructor(value) {
        this.value = value;
    }

    static some(value) {
        return new Maybe(value);
    }

    static none() {
        return new Maybe(null);
    }

    isPresent() {
        return this.value !== null && this.value !== undefined;
    }

    get() {
        if (!this.isPresent()) {
            throw new Error("No value present");
        }
        return this.value;
    }
}
