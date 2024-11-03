const side1Slots = [];
const side2Slots = [];
const total1 = document.getElementById('total1');
const total2 = document.getElementById('total2');
const demand1Stars = document.getElementById('demand1-stars');
const demand2Stars = document.getElementById('demand2-stars');
const profitLoss = document.getElementById('profit-loss');
const itemModal = document.getElementById('itemModal');
const gradeModal = document.getElementById('gradeModal');
const itemList = document.getElementById('itemList');
const gradeList = document.getElementById('gradeList');
const searchInput = document.getElementById('searchInput');
const closeBtns = document.querySelectorAll('.close-btn');
let currentSlot = null;
let currentItem = null;

document.querySelectorAll('.cash-input').forEach(input => {
    input.addEventListener('input', () => {
        updateTotals();
    });
});

function displayStars(element, average) {
    element.innerHTML = ''; // Clear previous content
    const starCount = Math.round(average); // Round to nearest whole number
    for (let i = 0; i < 5; i++) {
        const star = document.createElement('span');
        star.textContent = i < starCount ? '★' : '☆'; // Filled or empty star
        element.appendChild(star);
    }
}

function updateTotals() {
    let totalValue1 = 0;
    let totalValue2 = 0;
    let totalDemand1 = 0;
    let totalDemand2 = 0;
    let itemCount1 = 0;
    let itemCount2 = 0;

    side1Slots.forEach(slot => {
        const value = parseFloat(slot.dataset.value) || 0;
        const popularity = parseFloat(slot.dataset.popularity) || 0;
        if (value > 0) {
            totalValue1 += value;
            totalDemand1 += popularity;
            itemCount1++;
        }
    });

    side2Slots.forEach(slot => {
        const value = parseFloat(slot.dataset.value) || 0;
        const popularity = parseFloat(slot.dataset.popularity) || 0;
        if (value > 0) {
            totalValue2 += value;
            totalDemand2 += popularity;
            itemCount2++;
        }
    });

    const cashInput1 = parseFloat(document.querySelector('#side1 .cash-input').value) || 0;
    const cashInput2 = parseFloat(document.querySelector('#side2 .cash-input').value) || 0;
    totalValue1 += cashInput1;
    totalValue2 += cashInput2;

    const averageDemand1 = itemCount1 > 0 ? (totalDemand1 / itemCount1).toFixed(2) : 0;
    const averageDemand2 = itemCount2 > 0 ? (totalDemand2 / itemCount2).toFixed(2) : 0;

    total1.textContent = formatValue(totalValue1);
    total2.textContent = formatValue(totalValue2);

    // Display stars for average demand
    displayStars(demand1Stars, averageDemand1);
    displayStars(demand2Stars, averageDemand2);

    const profit = totalValue1 - totalValue2;
    profitLoss.innerHTML = `${profit >= 0 ? 'רווח' : 'הפסד'}:<br>${formatValue(Math.abs(profit))}`;
    profitLoss.className = profit >= 0 ? 'profit-loss green' : 'profit-loss red';
}

// Format value with K/M
function formatValue(value) {
    if (value >= 1000000) {
        return (value / 1000000).toFixed(1) + 'M';
    } else if (value >= 1000) {
        return (value / 1000).toFixed(1) + 'K';
    }
    return value.toString();
}

// Initialize slots
function initSlots() {
    const side1Grid = document.querySelector('#side1 .grid');
    const side2Grid = document.querySelector('#side2 .grid');

    for (let i = 0; i < 9; i++) {
        const slot1 = createSlot();
        side1Grid.appendChild(slot1);
        side1Slots.push(slot1);

        const slot2 = createSlot();
        side2Grid.appendChild(slot2);
        side2Slots.push(slot2);
    }
}

// Create a slot
function createSlot() {
    const slot = document.createElement('div');
    slot.className = 'slot';
    slot.addEventListener('click', () => handleSlotClick(slot));
    return slot;
}

// Handle slot click
function handleSlotClick(slot) {
    if (slot.dataset.value) {
        // Remove item from slot
        slot.innerHTML = '';
        delete slot.dataset.value;
        delete slot.dataset.popularity;
        updateTotals();
    } else {
        currentSlot = slot;
        itemModal.style.display = 'block';
        searchInput.value = '';
        filterItems('');
    }
}

// Close modals
closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        itemModal.style.display = 'none';
        gradeModal.style.display = 'none';
    });
});

// Filter items based on search
searchInput.addEventListener('input', (e) => {
    filterItems(e.target.value);
});

// Filter and display items
function filterItems(query) {
    itemList.innerHTML = '';
    const filteredItems = items.filter(item => item.name.includes(query));
    filteredItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        const img = document.createElement('img');
        img.src = `https://assetdelivery.roblox.com/v1/asset/?id=${item.imageId}`;
        const name = document.createElement('span');
        name.textContent = `${formatValue(item.value)} - ${item.name}`;
        itemDiv.appendChild(name);
        itemDiv.appendChild(img);
        itemDiv.addEventListener('click', () => handleItemClick(item));
        itemList.appendChild(itemDiv);
    });
}

// Handle item click
function handleItemClick(item) {
    currentItem = item;
    itemModal.style.display = 'none';
    if (item.hasGold || item.hasDiamond) {
        showGradeSelection(item);
    } else {
        selectItem(item, 'regular');
    }
}

// Show grade selection with images
function showGradeSelection(item) {
    gradeModal.style.display = 'block';
    gradeList.innerHTML = '';

    const regularOption = createGradeOption('רגיל', item.imageId, 1);
    gradeList.appendChild(regularOption);

    if (item.hasGold) {
        const goldOption = createGradeOption('זהב', item.goldImageId, 4);
        gradeList.appendChild(goldOption);
    }

    if (item.hasDiamond) {
        const diamondOption = createGradeOption('יהלום', item.diamondImageId, 16);
        gradeList.appendChild(diamondOption);
    }
}

// Create a grade option with images
function createGradeOption(gradeName, imageId, multiplier) {
    const gradeDiv = document.createElement('div');
    gradeDiv.className = 'grade';
    const img = document.createElement('img');
    img.src = `https://assetdelivery.roblox.com/v1/asset/?id=${imageId}`;
    gradeDiv.appendChild(img);
    const text = document.createElement('span');
    text.textContent = gradeName;
    gradeDiv.appendChild(text);
    gradeDiv.addEventListener('click', () => {
        selectItem(currentItem, gradeName.toLowerCase(), multiplier, imageId);
        gradeModal.style.display = 'none';
    });
    return gradeDiv;
}

// Select item and put it in the slot
function selectItem(item, grade, multiplier = 1, imageId) {
    currentSlot.innerHTML = '';
    const img = document.createElement('img');
    img.src = `https://assetdelivery.roblox.com/v1/asset/?id=${imageId || item.imageId}`;
    currentSlot.appendChild(img);
    currentSlot.dataset.value = item.value * multiplier;
    currentSlot.dataset.popularity = item.popularity;
    updateTotals();
}

// Initialize the slots on page load
initSlots();
