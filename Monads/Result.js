class Result {
    constructor(value, error, isSuccess) {
        this.value = value;
        this.error = error;
        this.isSuccess = isSuccess;
    }

    static success(value) {
        return new Result(value, null, true);
    }

    static failure(error) {
        return new Result(null, error, false);
    }
}

// Ejemplo de uso
function divide(numerator, denominator) {
    if (denominator === 0) {
        return Result.failure("Division by zero error.");
    } else {
        return Result.success(numerator / denominator);
    }
}

const result = divide(10, 2);

if (result.isSuccess) {
    console.log(`Result: ${result.value}`);
} else {
    console.log(`Error: ${result.error}`);
}