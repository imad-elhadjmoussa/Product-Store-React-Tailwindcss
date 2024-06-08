
// Function to fetch products with a specific category
export const fetchProducsByCategory = async (category) => {
    const res = await fetch(`https://fakestoreapi.com/products${category === "All" ? "" : `/category/${category}`}`);
    const data = await res.json();
    return data;
}

// Function to fetch products categories
export const fetchCategories = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/categories`);
    const data = await res.json();
    return data;
}

// Function to filter products By Title
export const filterByTitle = (products, title) => {
    const filtered = products?.filter((ele) => {
        return ele?.title.toUpperCase().includes(title.toUpperCase());
    })
    return filtered;
}

// Filte by price
export const filterByPrice = (products, price) => {
    if (price === "All") {
        return products
    } else {
        const filtered = products?.filter((ele) => {
            return ele.price >= price.min && ele.price <= price.max;
        })
        return filtered;
    }
}

// Filter by rate
export const filterByRate = (products,rate) => {
    if (rate === 0) {
        return products;
    } else {
        const filtered = products.filter((ele) => {
            return Math.round(ele.rating.rate) === Number(rate);
        })
        return filtered;
    }
}