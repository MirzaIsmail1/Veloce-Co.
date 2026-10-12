const products = [
    {
        id: 1,
        catagory: "Bags",
        name: "Veloce Leather Tote",
        price: "$299.00",
        image: "Images/catbag1.jpeg",

    },
    {
        id: 2,
        catagory: "Shoes",
        name: "Black Sneakers",
        price: "$199.00",
        image: "Images/catshoes1.jpeg",

    },
    {
        id: 3,
        catagory: "Watches",
        name: "Classic Noir Watch",
        price: "$349.00",
        image: "Images/catwatch1.jpeg",

    },

    {
        id: 4,
        catagory: "Headphones",
        name: "Veloce Air pro",
        price: "$99.00",
        image: "Images/cathead1.jpeg",

    },
    {
        id: 5,
        catagory: "Watches",
        name: "Vintage Oyster",
        price: "$249.00",
        image: "Images/catwatch2.jpeg",

    },
    {
        id: 6,
        catagory: "Headphones",
        name: "Wirelesss Headset",
        price: "$120.00",
        image: "Images/cathead2.jpeg",

    },
    {
        id: 7,
        catagory: "Bags",
        name: "Leather Crossbody",
        price: "$749.00",
        image: "Images/catbag2.jpeg",

    },
    {
        id: 8,
        catagory: "Shoes",
        name: "Vogue White",
        price: "$449.00",
        image: "Images/catshoes2.jpeg",
    },
]


function renderProducts(productSort) {
    const productgrid = document.getElementById('productgrid')

    const cardHtml = productSort.map(products => {
        return `<div class="${products.catagory} flex flex-col gap-3  font-jakarta text-left">
            <div class="relative rounded-xl overflow-hidden shadow-lg border-2 border-gray-200">
                <img src="${products.image}" alt="${products.catagory}"
                    class="w-36 h-40 object-cover md:h-48 md:w-48 md:object-cover">
            </div>
            <div class="flex flex-col gap-1 px-1">
                <span class="text-[10px] font-medium text-gray-500 tracking-wide md:text-sm">${products.catagory}</span>
                <h3 class="text-sm font-semibold text-black tracking-tight leading-tight md:text-base">${products.name}</h3>
                <span class="text-md font-bold text-black md:text-lg">${products.price}</span>
            </div>
            <button
                class="cart w-full bg-black text-white text-xs md:text-sm font-semibold py-2.5 rounded-lg hover:bg-zinc-800 transition-colors duration-200 shadow-sm">
                Add to Cart
            </button>
        </div>`;
    }).join('');

    productgrid.innerHTML = cardHtml;


}

renderProducts(products);


// const allbtn = document.querySelector(".all");
// console.log(allbtn.innerHTML);

const shoesbtn = document.querySelector(".shoes");
// console.log(shoesbtn.innerHTML);
const watchbtn = document.querySelector(".watch");
// console.log(watchbtn.innerHTML);
const headbtn = document.querySelector(".head");
// console.log(headbtn.innerHTML);
const bagbtn = document.querySelector(".bag");
// console.log(bagbtn.innerHTML);

const bagcard = document.querySelector(".Bags");
// console.log(bagcard.innerHTML);
const shoescard = document.querySelector(".Shoes");
// console.log(shoescard.innerHTML);
const watchcard = document.querySelector(".Watches");
// console.log(watchcard.innerHTML);
const headcard = document.querySelector(".Headphones");
// console.log(headcard.innerHTML);


let activeCat = null;

function setupProduct(btnclass, catagory) {
    const button = document.querySelector(btnclass)
    if (!button) return;
    button.addEventListener("click", () => {
        if (activeCat === catagory) {
            activeCat = null;
            renderProducts(products);
        } else {
            activeCat = catagory;
            const filtered = products.filter(item => item.catagory === catagory);
            renderProducts(filtered);
        }
    })

}


setupProduct(".shoes", "Shoes");
setupProduct(".bag", "Bags");
setupProduct(".head", "Headphones");
setupProduct(".watch", "Watches");


const allbtn = document.querySelector(".all");
if (allbtn) {
    allbtn.addEventListener("click", () => {
        activeCat = null;
        renderProducts(products);
    });
}


const searchbar = document.querySelector("#searchbar");

if (searchbar) {
    searchbar.addEventListener("input", (e) => {
        const searchlet = e.target.value.toLowerCase().trim();
        
        if (searchlet === "") {
            renderProducts(products);
            return;
        }

        const searchProduct = products.filter(item => {
            const searchName = item.name.toLowerCase();
            const searchCatagory = item.catagory.toLowerCase();
            
            return searchName.includes(searchlet) || searchCatagory.includes(searchlet);
        });

        renderProducts(searchProduct);
    });
}

const carts = document.querySelectorAll(".cart");
carts.forEach((button) => {
    button.addEventListener("click", () => {
        if(button.innerText === "Added"){
            button.innerText = "Add to Cart"
        } else {
            button.innerText = "Added"
        }
    })
});


const wishicon = document.querySelectorAll(".wish");

wishicon.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.classList.toggle('fill-red-500');
        btn.classList.toggle('text-red-500'); 
    });
});
