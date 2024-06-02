let cookieCount = 0;
let cursors = 0;
let grandmas = 0;

document.getElementById('cookie').onclick = function() {
    cookieCount++;
    updateCookieCount();
};

function buyUpgrade(upgrade) {
    if (upgrade === 1 && cookieCount >= 10) {
        cursors++;
        cookieCount -= 10;
    } else if (upgrade === 2 && cookieCount >= 100) {
        grandmas++;
        cookieCount -= 100;
    }
    updateCookieCount();
}

function updateCookieCount() {
    document.getElementById('cookie-count').innerText = cookieCount;
    document.getElementById('upgrade1').disabled = cookieCount < 10;
    document.getElementById('upgrade2').disabled = cookieCount < 100;
}

// Generate cookies from upgrades
setInterval(function() {
    cookieCount += cursors;
    cookieCount += grandmas * 5;
    updateCookieCount();
}, 1000);
