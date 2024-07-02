class Try {
    constructor(value, error, isSuccess) {
        this.value = value;
        this.error = error;
        this.isSuccess = isSuccess;
    }

    static success(value) {
        return new Try(value, null, true);
    }

    static failure(error) {
        return new Try(null, error, false);
    }

    isFailure() {
        return !this.isSuccess;
    }
}