let Bestproducts = [{
        name: 'Nike Product 1',
        brand: 'Nike',
        size: '36',
        price: 20,
        availableSizes: ['35', '32', '36'],
        availableColors: ['Червоний', 'Синій', 'Зелений']
    },
    {
        name: 'Adidas Product 1',
        brand: 'Adidas',
        size: '36',
        price: 30,
        availableSizes: ['36', '37', '38'],
        availableColors: ['Червоний', 'Синій', 'Зелений']
    },
    {
        name: 'Puma Product 1',
        brand: 'Puma',
        size: '38',
        price: 15,
        availableSizes: ['36', '37', '38'],
        availableColors: ['Червоний', 'Синій', 'Зелений']
    }
    // Додайте інші дані за необхідності
];
let products = [{
        name: 'Nike Product 1',
        brand: 'Nike',
        size: '36',
        price: 20,
        availableSizes: ['35', '32', '36'],
        availableColors: ['Червоний', 'Синій', 'Зелений']
    },
    {
        name: 'Adidas Product 1',
        brand: 'Adidas',
        size: '36',
        price: 30,
        availableSizes: ['36', '37', '38'],
        availableColors: ['Червоний', 'Синій', 'Зелений']
    },
    {
        name: 'Nike Product 2',
        brand: 'Nike',
        size: '37',
        price: 25,
        availableSizes: ['36', '37', '38'],
        availableColors: ['Червоний', 'Синій', 'Зелений']
    },
    {
        name: 'Puma Product 1',
        brand: 'Puma',
        size: '38',
        price: 15,
        availableSizes: ['36', '37', '38'],
        availableColors: ['Червоний', 'Синій', 'Зелений']
    }, {
        name: 'Nike Product 2',
        brand: 'Nike',
        size: '37',
        price: 25,
        availableSizes: ['36', '37', '38'],
        availableColors: ['Червоний', 'Синій', 'Зелений']
    }, {
        name: 'Puma Product 1',
        brand: 'Puma',
        size: '38',
        price: 15,
        availableSizes: ['36', '37', '38'],
        availableColors: ['Червоний', 'Синій', 'Зелений']
    }
    // Додайте інші дані за необхідності
];

let filtersConfig = {
    brand: ['Nike', 'Adidas', 'Puma'],
    size: ['36', '37', '38']
};

const cart = JSON.parse(localStorage.getItem('cart')) || {};

console.log(cart)

// cart = JSON.parse(localStorage.getItem('cart')) || {};

function createFilterUI(filterType, filterValues) {
    const filterContainer = document.createElement('div');
    filterContainer.innerHTML = `<label>Оберіть ${filterType}:</label>`;

    filterValues.forEach(value => {
        const id = `${filterType.toLowerCase()}Checkbox${value.toLowerCase()}`;
        const {
            checkbox,
            checkboxLabel
        } = createCheckbox(id, value, `${filterType} ${value}`);

        filterContainer.appendChild(checkbox);
        filterContainer.appendChild(checkboxLabel);
        filterContainer.appendChild(document.createElement('br'));
    });

    return filterContainer;
}

function createCheckbox(id, value, label) {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = id;
    checkbox.value = value;
    checkbox.name = label.split(' ')[0].toLowerCase(); // Додаємо назву атрибута name

    const checkboxLabel = document.createElement('label');
    checkboxLabel.htmlFor = id;
    checkboxLabel.textContent = label;

    return {
        checkbox,
        checkboxLabel
    };
}

function renderFilters() {
    const filtersContainer = document.getElementById('filters');
    filtersContainer.innerHTML = '';

    for (const filterType in filtersConfig) {
        const filterValues = filtersConfig[filterType];
        const filterUI = createFilterUI(filterType, filterValues);
        filtersContainer.appendChild(filterUI);
    }
}

function renderProducts(filteredProducts) {
    const productsContainer = document.getElementById('productsContainer');
    productsContainer.innerHTML = '';

    if (filteredProducts.length === 0) {
        productsContainer.textContent = 'Товари не знайдено';
        return;
    }

    filteredProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML += `

                <div class="card" style="    width: 334.297px;
    height: 504.297px;">
                    <img class="card-img"
                        src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/vans.png"
                        alt="Vans">
                    <div class="card-img-overlay d-flex justify-content-end">
                        <a href="#" class="card-link text-danger like">
                            <i class="fas fa-heart"></i>
                        </a>
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">${product.name}</h4>
                        <h6 class="card-subtitle mb-2 text-muted">Brand: ${product.brand}</h6>
                        <p class="card-text">
                            The Vans All-Weather MTE Collection features footwear and apparel designed to withstand the
                            elements whilst still looking cool. </p>
                        <div class="options d-flex flex-fill" style="margin-top: 10px;">
                            <select class="custom-select" id="sizeDropdown" onchange="selectSize('${product.name}', this.value)">
                                <option value="">Оберіть розмір</option>
                                ${product.availableSizes.map(size => `<option value="${size}">${size}</option>`).join('')}
                            </select>

                            <select class="custom-select ml-1" id="colorDropdown" onchange="selectColor('${product.name}', this.value)">
                                <option value="">Оберіть колір</option>
                                ${product.availableColors.map(color => `<option value="${color}">${color}</option>`).join('')}
                            </select>
                        </div>
                        <div class="buy d-flex justify-content-between align-items-center">
                            <div class="price text-success">
                                <h5 class="mt-4">${product.price}$</h5>
                            </div>
                            <button onclick="addToCart('${product.name}')" class="btn btn-danger mt-3"><i class="fas fa-shopping-cart"></i> Add to Cart</button>
                        </div>
                    </div>
                </div>

        `
        productsContainer.appendChild(productElement);
    });
}

var selectedSizes = {}; // Зберігає вибрані розміри для кожного товару

function selectSize(productName, size) {
    selectedSizes[productName] = size;

    // Знайти усі кнопки розмірів для цього товару
    const buttons = document.querySelectorAll(`.size-button[data-product='${productName}']`);
    buttons.forEach(button => {
        if (button.textContent === size) {
            button.classList.add('selected-size');
        } else {
            button.classList.remove('selected-size');
        }
    });
}

var selectedColors = {}; // Object to store selected colors for each product

var selectedColors = {}; // Object to store selected colors for each product

function selectColor(productName, color) {
    selectedColors[productName] = color;
}

function addToCart(productName) {
    const selectedSize = selectedSizes[productName];
    const selectedColor = selectedColors[productName] || ''; // Default to empty string if no color is selected

    if (!selectedSize) {
        alert('Будь ласка, виберіть розмір.');
        return;
    }

    if (!selectedColor) {
        alert('Будь ласка, виберіть колір.');
        return;
    }

    const product = products.find(p => p.name === productName);
    if (product) {
        const cartKey = productName + ' - ' + selectedSize + ' - ' + selectedColor;
        if (!cart[cartKey]) {
            cart[cartKey] = {
                ...product,
                size: selectedSize,
                color: selectedColor, // Add color to the cart item
                quantity: 1
            };

            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    location.href = "../cart.html";
                }
            });
        } else {
            cart[cartKey].quantity++;
        }
    }
    updateCart(); // Оновлюємо відображення кошику
}

function removeFromCart(productName) {
    delete cart[productName];
    updateCart(); // Оновлюємо відображення кошика
}

function openProductPage(productName) {
    // Ваша логіка для відкриття сторінки товару
}

function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
    // updateTotalPrice(); // Оновлюємо відображення загальної суми
}

function renderCart() {
    const cartContent = document.getElementById('cartContent');
    cartContent.innerHTML = '';

    let totalSum = 0; // Змінна для збереження загальної суми

    Object.keys(cart).forEach(productKey => {
        const cartItem = cart[productKey];
        totalSum += cartItem.price * cartItem.quantity; // Додаємо вартість товару до загальної суми
        const cartItemElement = document.createElement('div');
        cartItemElement.innerHTML = `
            ${cartItem.name} (${cartItem.size}, ${cartItem.color}) x ${cartItem.quantity}
            <button onclick="changeQuantity('${productKey}', -1)">-</button>
            <button onclick="changeQuantity('${productKey}', 1)">+</button>
            <label for="sizeDropdown_${productKey}">Розмір:</label>
            <select id="sizeDropdown_${productKey}" onchange="changeSize('${productKey}', this.value)">
                ${cartItem.availableSizes.map(size => `<option value="${size}" ${size === cartItem.size ? 'selected' : ''}>${size}</option>`).join('')}
            </select>

            <label for="colorDropdown_${productKey}">Колір:</label>
            <select id="colorDropdown_${productKey}" onchange="changeColor('${productKey}', this.value)">
                ${cartItem.availableColors.map(color => `<option value="${color}" ${color === cartItem.color ? 'selected' : ''}>${color}</option>`).join('')}
            </select>

            <button onclick="removeFromCart('${productKey}')">Видалити</button>
        `;
        cartContent.appendChild(cartItemElement);
    });

    updateTotalPrice(totalSum);
}

function changeSize(productKey, newSize) {
    cart[productKey].size = newSize;
    updateCart();
}

function changeColor(productKey, newColor) {
    cart[productKey].color = newColor;
    updateCart();
}

function updateTotalPrice(totalSum = 0) {
    const totalPriceElement = document.getElementById('totalPrice');
    totalPriceElement.textContent = `Загальна сума: $${totalSum.toFixed(2)}`;
}

function changeQuantity(productName, change) {
    if (cart[productName]) {
        cart[productName].quantity += change;
        if (cart[productName].quantity <= 0) {
            removeFromCart(productName);
        } else {
            updateCart();
        }
    }
}

function applyFilters() {
    const minPrice = document.getElementById('minPrice').value;
    const maxPrice = document.getElementById('maxPrice').value;
    const searchQuery = document.getElementById('searchQuery').value
        .toLowerCase(); // Отримати значення із поля введення

    const selectedBrands = getSelectedCheckboxes('brand');
    const selectedSizes = getSelectedCheckboxes('size');

    const filteredProducts = products.filter(product => {
        return (
            product.price >= minPrice &&
            product.price <= maxPrice &&
            (selectedBrands.length === 0 || selectedBrands.includes(product.brand)) &&
            (selectedSizes.length === 0 || selectedSizes.includes(product.size)) &&
            (product.name.toLowerCase().includes(
                searchQuery)) // Додайте умову для пошуку за назвою товару
        );
    });
    renderProducts(filteredProducts);
}

function getSelectedCheckboxes(filterType) {
    return Array.from(document.querySelectorAll(`input[name='${filterType}' ]:checked`)).map(input => input
        .value);
}


function renderBest() {
    console.log(Bestproducts)
    let BestproductsConatiner = document.querySelector(".best__products")
    Bestproducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML += `

                <div class="card" style="    width: 334.297px;
    height: 504.297px;">
                    <img class="card-img"
                        src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/vans.png"
                        alt="Vans">
                    <div class="card-img-overlay d-flex justify-content-end">
                        <a href="#" class="card-link text-danger like">
                            <i class="fas fa-heart"></i>
                        </a>
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">${product.name}</h4>
                        <h6 class="card-subtitle mb-2 text-muted">Brand: ${product.brand}</h6>
                        <p class="card-text">
                            The Vans All-Weather MTE Collection features footwear and apparel designed to withstand the
                            elements whilst still looking cool. </p>
                        <div class="options d-flex flex-fill" style="margin-top: 10px;">
                            <select class="custom-select" id="sizeDropdown" onchange="selectSize('${product.name}', this.value)">
                                <option value="">Оберіть розмір</option>
                                ${product.availableSizes.map(size => `<option value="${size}">${size}</option>`).join('')}
                            </select>

                            <select class="custom-select ml-1" id="colorDropdown" onchange="selectColor('${product.name}', this.value)">
                                <option value="">Оберіть колір</option>
                                ${product.availableColors.map(color => `<option value="${color}">${color}</option>`).join('')}
                            </select>
                        </div>
                        <div class="buy d-flex justify-content-between align-items-center">
                            <div class="price text-success">
                                <h5 class="mt-4">${product.price}$</h5>
                            </div>
                            <button onclick="addToCart('${product.name}')" class="btn btn-danger mt-3"><i class="fas fa-shopping-cart"></i> Add to Cart</button>
                        </div>
                    </div>
                </div>

        `
        BestproductsConatiner.appendChild(productElement);
    })
}


renderFilters();
renderProducts(products);