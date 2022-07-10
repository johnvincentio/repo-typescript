
enum Responses {
    no = `No`,
    yes = `Yes`,
    maybe = `Maybe`
}

enum OrderStatus {
    PENDING,        // 1
    SHIPPED,         // 2
    DELIVERED,      // 3
    RETURNED        // 4
}

const stat = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus): boolean {
    return status === OrderStatus.DELIVERED;
}

