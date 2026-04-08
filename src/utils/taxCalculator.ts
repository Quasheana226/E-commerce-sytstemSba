// checking if category is grocries
function calculateTax(price: number, category: string): number {
    
    // Gonna use  a lower tax rate 
    // Products with categorory should be taxed at 3%
    if (category === "groceries") {
        return (price * 3) / 100;

    } else {
        return (price * 4.75) / 100;
    }
}