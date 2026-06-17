function calculatePrice() {
    let price = Number(document.getElementById("price").value);
    let quantity = Number(document.getElementById("quantity").value);

    let total = price * quantity;

    document.getElementById("result").textContent =
        `Total: ₹${total}`;
}