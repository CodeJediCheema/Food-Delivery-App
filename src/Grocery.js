const Grocery = () =>{

    const groceryItems = [
        {
          id: 1,
          name: "Apples",
          price: 250,
          description: "Fresh and juicy apples",
        },
        {
          id: 2,
          name: "Bananas",
          price: 70,
          description: "Ripe and ready-to-eat bananas",
        },
        {
          id: 3,
          name: "Milk",
          price: 120,
          description: "Full-fat milk",
        },
        {
          id: 4,
          name: "Bread",
          price: 55,
          description: "Freshly baked bread",
        },
        {
            id: 5,
            name: "Eggs",
            price: 72,
            description: "Farm-fresh eggs",
          },
          {
            id: 6,
            name: "Cereal",
            price: 300,
            description: "Healthy breakfast cereal",
          },
          {
            id: 7,
            name: "Chicken",
            price: 200,
            description: "Boneless chicken breast",
          },
          {
            id: 8,
            name: "Pasta",
            price: 179,
            description: "Penne pasta",
          },
          {
            id: 9,
            name: "Tomatoes",
            price: 80,
            description: "Fresh vine-ripened tomatoes",
          },
          {
            id: 10,
            name: "Orange Juice",
            price: 130,
            description: "100% pure orange juice",
          },
          {
            id: 11,
            name: "Salmon",
            price: 450,
            description: "Wild-caught salmon fillet",
          },
          {
            id: 12,
            name: "Canned Soup",
            price: 129,
            description: "Assorted canned soups",
          },
          {
            id: 13,
            name: "Potatoes",
            price: 50,
            description: "Fresh russet potatoes",
          },
          {
            id: 14,
            name: "Yogurt",
            price: 45,
            description: "Low-fat yogurt",
          },
          {
            id: 15,
            name: "Toothpaste",
            price: 99,
            description: "Mint-flavored toothpaste",
          },
          {
            id: 16,
            name: "Laundry Detergent",
            price: 449,
            description: "Liquid laundry detergent",
          },
      ];
    
      return (
        <div className="bg-green-200 min-h-screen py-10">
          <h1 className="text-3xl font-bold text-center mb-6">Grocery Store</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {groceryItems.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-lg shadow-md"
              >
                <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                <p className="text-gray-600 mb-2">₹{item.price.toFixed(2)}</p>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
}

export default Grocery;