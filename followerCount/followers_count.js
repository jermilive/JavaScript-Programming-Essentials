let count = 0; // Initialize count to 0
function increaseCount() {
    count++; // Increment count by 1
    displayCount();
    checkCountValue();
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML = count; // Display the count in the HTML
}


function checkCountValue() {
    if (count === 10) {
        alert('Your post gained 10 followers!')
    } else if (count === 20) {
        alert('You now have 20 followers!!!')
    }
}