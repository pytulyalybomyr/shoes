let Bestproducts = [{
    name: 'Adidas Product 1',
    Бренд: 'Adidas',
    Розмір: '36',
    price: 5000,
    availableSizes: ['36', '37', '38'],
    availableColors: ['Червоний', 'Синій', 'Зелений']
},
{
    name: 'Nike Product 2',
    Бренд: 'Nike',
    Розмір: '37',
    price: 2500,
    availableSizes: ['36', '37', '38'],
    availableColors: ['Червоний', 'Синій', 'Зелений']
},
{
    name: 'Puma Product 1',
    Бренд: 'Puma',
    Розмір: '38',
    price: 4300,
    availableSizes: ['36', '37', '38'],
    availableColors: ['Червоний', 'Синій', 'Зелений']
},
    // Додайте інші дані за необхідності
];
let products = [{
    name: 'Nike Product 1',
    Бренд: 'Nike',
    Розмір: '36',
    price: 3000,
    availableSizes: ['35', '32', '36'],
    availableColors: ['red', '#000', '#fff']
},
{
    name: 'Adidas Product 1',
    Бренд: 'Adidas',
    Розмір: '36',
    price: 5000,
    availableSizes: ['36', '37', '38'],
    availableColors: ['Червоний', 'Синій', 'Зелений']
},
{
    name: 'Nike Product 2',
    Бренд: 'Nike',
    Розмір: '37',
    price: 2500,
    availableSizes: ['36', '37', '38'],
    availableColors: ['Червоний', 'Синій', 'Зелений']
},
{
    name: 'Puma Product 1',
    Бренд: 'Puma',
    Розмір: '38',
    price: 4300,
    availableSizes: ['36', '37', '38'],
    availableColors: ['Червоний', 'Синій', 'Зелений']
}, {
    name: 'Nike Product 2',
    Бренд: 'Nike',
    Розмір: '37',
    price: 2900,
    availableSizes: ['36', '37', '38'],
    availableColors: ['Червоний', 'Синій', 'Зелений']
}, {
    name: 'Puma Product 1',
    Бренд: 'Puma',
    Розмір: '38',
    price: 2341,
    availableSizes: ['36', '37', '38'],
    availableColors: ['Червоний', 'Синій', 'Зелений']
},
{
    name: 'Nike Product 1',
    Бренд: 'Nike',
    Розмір: '36',
    price: 3000,
    availableSizes: ['35', '32', '36'],
    availableColors: ['Червоний', 'Синій', 'Зелений']
},
{
    name: 'Adidas Product 1',
    Бренд: 'Adidas',
    Розмір: '36',
    price: 5000,
    availableSizes: ['36', '37', '38'],
    availableColors: ['Червоний', 'Синій', 'Зелений']
},
    // Додайте інші дані за необхідності
];

let filtersConfig = {
    Бренд: ['Nike', 'Adidas', 'Puma'],
    Розмір: ['36', '37', '38']
};

const cart = JSON.parse(localStorage.getItem('cart')) || {};

console.log(cart)


function createFilterUI(filterType, filterValues) {
    const filterContainer = document.createElement('div');
    filterContainer.classList.add('filter-accordion');
    filterContainer.innerHTML = `
        <button class="accordion-button">
            ${filterType}
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="12" viewBox="0 0 23 12" fill="none">
                <path d="M22.2538 1.71013L12.2538 11.7101C12.161 11.8031 12.0507 11.8769 11.9293 11.9272C11.8079 11.9775 11.6777 12.0034 11.5463 12.0034C11.4149 12.0034 11.2848 11.9775 11.1634 11.9272C11.042 11.8769 10.9317 11.8031 10.8388 11.7101L0.838832 1.71013C0.651192 1.52249 0.545776 1.268 0.545776 1.00263C0.545776 0.737267 0.651192 0.482771 0.838832 0.295131C1.02647 0.10749 1.28097 0.0020752 1.54633 0.0020752C1.8117 0.0020752 2.06619 0.10749 2.25383 0.295131L11.5463 9.58888L20.8388 0.295131C20.9317 0.202221 21.042 0.12852 21.1634 0.0782375C21.2848 0.0279549 21.4149 0.0020752 21.5463 0.0020752C21.6777 0.0020752 21.8078 0.0279549 21.9292 0.0782375C22.0506 0.12852 22.1609 0.202221 22.2538 0.295131C22.3467 0.388041 22.4204 0.498342 22.4707 0.619735C22.521 0.741128 22.5469 0.871236 22.5469 1.00263C22.5469 1.13403 22.521 1.26413 22.4707 1.38553C22.4204 1.50692 22.3467 1.61722 22.2538 1.71013Z" fill="black"/>
            </svg>
        </button>
        <div class="panel">
            ${filterValues.map(value => {
        const id = `${filterType.toLowerCase()}Checkbox${value.toLowerCase()}`;
        return `<div>
                            <input type="checkbox" id="${id}" name="${filterType}" value="${value}">
                            <label for="${id}">${value}</label>
                        </div>`;
    }).join('')}
        </div>
    `;

    // Додаємо обробники подій для акордеонів
    const accButton = filterContainer.getElementsByClassName("accordion-button")[0];
    const panel = accButton.nextElementSibling;
    accButton.addEventListener("click", function () {
        this.classList.toggle("active");
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });

    // Додаємо обробники подій для чекбоксів
    // const checkboxes = filterContainer.querySelectorAll(`input[type='checkbox']`);
    // checkboxes.forEach(checkbox => {
    //     checkbox.addEventListener('change', applyFilters);
    // });

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

        // Додати обробники подій для вибору брендів та розмірів
        const checkboxes = filterUI.querySelectorAll('input[type="checkbox"]');
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

                <div class="card" style="    width: 300px;
    height: 504px;">
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
                        <h6 class="card-subtitle mb-2 text-muted">Brand: ${product.Бренд}</h6>
                        <p class="card-text">
                            The Vans All-Weather MTE Collection features footwear and apparel designed to withstand the
                            elements whilst still looking cool. </p>
                        <div class="options d-flex flex-fill" style="margin-top: 10px;">
                            <select class="custom-select" id="sizeDropdown" onchange="selectSize('${product.name}', this.value)">
                                <option value="">Оберіть розмір</option>
                                ${product.availableSizes.map(Розмір => `<option value="${Розмір}">${Розмір}</option>`).join('')}
                            </select>

                            <select class="custom-select ml-1" id="colorDropdown" onchange="selectColor('${product.name}', this.value)">
                                <option value="">Оберіть колір</option>
                                ${product.availableColors.map(color => `<option style="background: ${color}" value="${color}">
                                </option>`).join('')}
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

function selectSize(productName, Розмір) {
    selectedSizes[productName] = Розмір;

    // Знайти усі кнопки розмірів для цього товару
    const buttons = document.querySelectorAll(`.size-button[data-product='${productName}']`);
    buttons.forEach(button => {
        if (button.textContent === Розмір) {
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
                Розмір: selectedSize,
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
            ${cartItem.name} (${cartItem.Розмір}, ${cartItem.color}) x ${cartItem.quantity}
            <button onclick="changeQuantity('${productKey}', -1)">-</button>
            <button onclick="changeQuantity('${productKey}', 1)">+</button>
            <label for="sizeDropdown_${productKey}">Розмір:</label>
            <select id="sizeDropdown_${productKey}" onchange="changeSize('${productKey}', this.value)">
                ${cartItem.availableSizes.map(Розмір => `<option value="${Розмір}" ${Розмір === cartItem.Розмір ? 'selected' : ''}>${Розмір}</option>`).join('')}
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
    cart[productKey].Розмір = newSize;
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

function getURLParameters1() {
    const params = new URLSearchParams(window.location.search);
    const searchQuery = params.get('search') || '';
    document.getElementById('searchQuery').value = searchQuery;
    applyFilters(); // Застосувати фільтри після ініціалізації
}

window.onload = getURLParameters1;

function updateActiveFilters() {
    const activeFiltersContainer = document.getElementById('activeFilters');
    activeFiltersContainer.innerHTML = '';

    const selectedBrands = getSelectedCheckboxes('Бренд');
    const selectedSizes = getSelectedCheckboxes('Розмір');

    // Додаємо активні фільтри в контейнер
    selectedBrands.forEach(brand => {
        const filterElement = createActiveFilterElement('Бренд', brand);
        activeFiltersContainer.appendChild(filterElement);
    });

    selectedSizes.forEach(Розмір => {
        const filterElement = createActiveFilterElement('Розмір', Розмір);
        activeFiltersContainer.appendChild(filterElement);
    });
}

function createActiveFilterElement(filterType, value) {
    const filterElement = document.createElement('div');
    filterElement.classList.add('active-filter');
    filterElement.innerHTML = `
        ${value}
        <button onclick="removeActiveFilter('${filterType}', '${value}')">&times;</button>
    `;
    return filterElement;
}

function removeActiveFilter(filterType, value) {
    // Знайти відповідний чекбокс і зняти відмітку
    const checkbox = document.querySelector(`input[name='${filterType}'][value='${value}']`);
    if (checkbox) {
        checkbox.checked = false;
    }

    // Оновити фільтри та активні фільтри
    applyFilters();
    updateActiveFilters();
}

function sortProductsAscending() {
    products.sort((a, b) => a.price - b.price);
    applyFilters();
}

function sortProductsDescending() {
    products.sort((a, b) => b.price - a.price);
    applyFilters();
}

function renderPagination(totalItems, itemsPerPage, currentPage) {
    console.log(currentPage)
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const pageLink = createPageLink(i, i);

        if (i === currentPage) {
            pageLink.classList.add('is-active');
        }

        paginationContainer.appendChild(pageLink);
    }

    // Додавання стрілок для навігації
    if (currentPage > 1) {
        const prevLink = createPageLink(currentPage - 1, '<');
        paginationContainer.insertBefore(prevLink, paginationContainer.firstChild);
    }

    if (currentPage < totalPages) {
        const nextLink = createPageLink(currentPage + 1, '>');
        console.log(nextLink)
        paginationContainer.appendChild(nextLink);
    }
}


function createPageLink(page, text) {
    const link = document.createElement('a');
    const url = new URL(window.location.href);
    url.searchParams.set('page', page);
    link.href = url.href; // Важливо використовувати url.href
    link.innerText = text;
    return link;
}

function applyFilters(currentPage = 1) {
    const minPrice = document.querySelector('.min').innerHTML;
    const maxPrice = document.querySelector('.max').innerHTML;

    console.log(minPrice)
    console.log(maxPrice)
    const searchQuery = new URLSearchParams(window.location.search).get('search') || '';
    // Отримати значення із поля введення

    const selectedBrands = getSelectedCheckboxes('Бренд');
    const selectedSizes = getSelectedCheckboxes('Розмір');

    const filteredProducts = products.filter(product => {
        return (
            product.price >= minPrice &&
            product.price <= maxPrice &&
            (selectedBrands.length === 0 || selectedBrands.includes(product.Бренд)) &&
            (selectedSizes.length === 0 || selectedSizes.includes(product.Розмір)) &&
            (product.name.toLowerCase().includes(searchQuery))
        );
    });
    const itemsPerPage = 4;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const productsToShow = filteredProducts.slice(startIndex, endIndex);
    renderProducts(productsToShow);
    renderPagination(filteredProducts.length, itemsPerPage, currentPage);

    updateActiveFilters();
}

window.onload = () => {
    updateActiveFilters();
}

function getURLParameters() {
    const params = new URLSearchParams(window.location.search);
    const searchQuery = params.get('search') || '';
    const currentPage = parseInt(params.get('page') || '1', 10);

    document.getElementById('searchQuery').value = searchQuery;
    applyFilters(currentPage);
}

window.onload = getURLParameters;

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
                        <h6 class="card-subtitle mb-2 text-muted">Brand: ${product.Бренд}</h6>
                        <p class="card-text">
                            The Vans All-Weather MTE Collection features footwear and apparel designed to withstand the
                            elements whilst still looking cool. </p>
                        <div class="options d-flex flex-fill" style="margin-top: 10px;">
                            <select class="custom-select" id="sizeDropdown" onchange="selectSize('${product.name}', this.value)">
                                <option value="">Оберіть розмір</option>
                                ${product.availableSizes.map(Розмір => `<option value="${Розмір}">${Розмір}</option>`).join('')}
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

