// (2) write JavaScript function that accepts a price and discount as numbers and returns the dicounted price
//     Note: handle possible test cases

function getDiscount(price, discount) {
    if (typeof price != "number" || price < 0 || isNaN(price)) {
        throw new Error(
            "excpected positive price number but got " + typeof price
        );
    }

    if (
        typeof discount != "number" ||
        discount < 0 ||
        discount > 100 ||
        isNaN(price)
    ) {
        throw new Error(
            "excpected positive number between 1 and 100 but got " +
                typeof price
        );
    }

    return (price - (price * discount) / 100).toFixed(2);
}

try {
    console.log(getDiscount(100, 10));
    console.log(getDiscount(100, -10));
} catch (error) {}
