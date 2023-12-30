const menuItems = document.querySelectorAll('.menu_item');

menuItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.classList.add('hover');
  });
  
  item.addEventListener('mouseout', () => {
    item.classList.remove('hover');
  });
});
