document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const itemId = urlParams.get('item');
    const itemName = urlParams.get('name');
    const currentBidAmount = urlParams.get('current');
    const itemImage = urlParams.get('image');
    
    
    if (itemId && itemName && currentBidAmount) {
        document.getElementById('itemTitle').textContent = itemName;
        document.getElementById('itemId').textContent = itemId;
        
        const formattedBid = `$${Number(currentBidAmount).toLocaleString()}`;
        document.getElementById('currentBid').textContent = formattedBid;
        document.getElementById('currentBidForm').textContent = formattedBid;
        
        const minBidAmount = Math.ceil((Number(currentBidAmount) * 1.05) / 50) * 50;
        document.getElementById('minBid').textContent = `$${minBidAmount.toLocaleString()}`;
        document.getElementById('bidAmount').min = minBidAmount;
        document.getElementById('bidAmount').value = minBidAmount;
        
        if (itemImage) {
            document.getElementById('itemImage').style.backgroundImage = `url('${itemImage}')`;
        } else {
            document.getElementById('itemImage').style.backgroundImage = "url('/api/placeholder/600/300')";
        }
    } else {
        document.getElementById('itemTitle').textContent = "Item Not Found";
        document.getElementById('itemId').textContent = "N/A";
    }
});
