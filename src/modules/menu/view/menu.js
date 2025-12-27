document.querySelectorAll('.category').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelector('.category.active')?.classList.remove('active');
    item.classList.add('active');
  });
});
document.querySelectorAll(".food-card").forEach(card => {
  card.addEventListener("click", () => {
    const product = {
      id: Number(card.dataset.id),
      name: card.dataset.name,
      price: Number(card.dataset.price),
      image: card.dataset.image
    };
    if (!product.id) return;
    addToCart(product);
  });
});
