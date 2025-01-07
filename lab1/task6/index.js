// (6)
// You are given an array of order objects.
// Each object represents an e-commerce order and contains details in the following format:
// var orders = [
//   {
//     orderId: 'ORD001',
//     customer: 'John Doe',
//     items: 'item1:2,item2:1,item3:5',
//     orderDate: '2023-12-01',
//     deliveryDate: '2023-12-05',
//     deliveryAddress: '123, Main Street, Springfield, USA',
//   },
//   {
//     orderId: 'ORD002',
//     customer: 'Jane Smith',
//     items: 'itemA:3,itemB:4',
//     orderDate: '2023-11-15',
//     deliveryDate: '2023-11-20',
//     deliveryAddress: 'Flat 4B, Elmwood Apartments, New York, USA',
//   },
//   {
//     orderId: 'ORD003',
//     customer: 'Alice Johnson',
//     items: 'itemX:1',
//     orderDate: '2023-10-10',
//     deliveryDate: '2023-10-15',
//     deliveryAddress: '456, Pine Lane, Denver, USA',
//   }
// ];

// Transform the orders array into the following format:

// var formattedOrders = [
//   {
//     orderId: 'ORD001',
//     customer: 'John Doe',
//     totalItems: 8,
//     orderDate: '2023-12-01',
//     deliveryDate: '2023-12-05',
//     deliveryDuration: 4,
//     deliveryCountry: 'USA',
//     deliveryCity: 'Springfield',
//     deliveryStreet: 'Main Street',
//     buildingNumber: 123,
//   },
//   {
//     orderId: 'ORD002',
//     customer: 'Jane Smith',
//     totalItems: 7,
//     orderDate: '2023-11-15',
//     deliveryDate: '2023-11-20',
//     deliveryDuration: 5,
//     deliveryCountry: 'USA',
//     deliveryCity: 'New York',
//     deliveryStreet: 'Elmwood Apartments',
//     buildingNumber: 'Flat 4B',
//   },
//   {
//     orderId: 'ORD003',
//     customer: 'Alice Johnson',
//     totalItems: 1,
//     orderDate: '2023-10-10',
//     deliveryDate: '2023-10-15',
//     deliveryDuration: 5,
//     deliveryCountry: 'USA',
//     deliveryCity: 'Denver',
//     deliveryStreet: 'Pine Lane',
//     buildingNumber: 456,
//   }
// ];

// Notes:
// 1- The items string contains item names and their quantities in the format itemName:quantity. You need to calculate the total number of items.
// 2- The deliveryDuration is the number of days between orderDate and deliveryDate.
// 3- The deliveryAddress is always in the format: building number, street name, city, country.
// 4- If the buildingNumber is not a valid number (e.g., Flat 4B), include it as a string.
// 5- The original array should remain unchanged.

var orders = [
    {
        orderId: "ORD001",
        customer: "John Doe",
        items: "item1:2,item2:1,item3:5",
        orderDate: "2023-12-01",
        deliveryDate: "2023-12-05",
        deliveryAddress: "123, Main Street, Springfield, USA",
    },
    {
        orderId: "ORD002",
        customer: "Jane Smith",
        items: "itemA:3,itemB:4",
        orderDate: "2023-11-15",
        deliveryDate: "2023-11-20",
        deliveryAddress: "Flat 4B, Elmwood Apartments, New York, USA",
    },
    {
        orderId: "ORD003",
        customer: "Alice Johnson",
        items: "itemX:1",
        orderDate: "2023-10-10",
        deliveryDate: "2023-10-15",
        deliveryAddress: "456, Pine Lane, Denver, USA",
    },
];

var formattedOrders = orders.map(function (order) {
    var orderId = order.orderId;
    var customer = order.customer;

    var items = order.items.split(",");
    var totalItems = 0;
    items.forEach(function (item) {
        var quantity = parseInt(item.split(":")[1], 10);
        totalItems += quantity;
    });

    var orderDate = new Date(order.orderDate);
    var deliveryDate = new Date(order.deliveryDate);
    var deliveryDuration = Math.ceil(
        (deliveryDate - orderDate) / (1000 * 3600 * 24)
    );

    var addressParts = order.deliveryAddress.split(", ");
    var buildingNumber = addressParts[0];
    var deliveryStreet = addressParts[1];
    var deliveryCity = addressParts[2];
    var deliveryCountry = addressParts[3];

    buildingNumber = isNaN(buildingNumber)
        ? buildingNumber
        : parseInt(buildingNumber);

    return {
        orderId: orderId,
        customer: customer,
        totalItems: 1,
        orderDate: orderDate.toISOString().substring(0, 10),
        deliveryDate: deliveryDate.toISOString().substring(0, 10),
        deliveryDuration: deliveryDuration,
        deliveryCountry: deliveryCountry,
        deliveryCity: deliveryCity,
        deliveryStreet: deliveryStreet,
        buildingNumber: buildingNumber,
    };
});

console.log(formattedOrders);
