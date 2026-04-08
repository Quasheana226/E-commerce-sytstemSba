



/// Prodcut class with Properties that match with the API response


// Which should  have a Property for each field from the dummy api  
class Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPrecentage: number;
    rating: number;
    stock: number;
    tags: string[];

    // Now I need to make a constructor Method 
    // It should run autmatically when I create a new instance of the class  which set up the object data 
    // which should take raw Api data as a input 

    constructor(data: {
        id: number;
        title: string;
        description: string;
        category: string;
        price: number;
        discountPrecentage: number;
        rating: number;
        stock: number;
        tags: string[];

    }) {
        this.id = data.id;
        this.title = data.title;
        this.description = data.description;
        this.category = data.category;
        this.price = data.price;
        this.discountPrecentage = data.discountPrecentage;
        this.rating = data.rating;
        this.stock = data.stock;
        this.tags = data.tags;

    }

    // My Two methods
    displayDetails(): void{
        console.log(`Price: ${this.price}`);
    }
  
// declares the method with a return type
    getPriceWithDiscount(): number {
        
        const discountAmount = (this.price * this.discountPrecentage) / 100;
        return this.price - discountAmount;
    }

}