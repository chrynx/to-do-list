$(() => {
  const $items = $('.items');
  const items = [];
  const $newItem = $('.newItem');
  $newItem.on('change', (e) => {
    e.preventDefault();
    items.push(e.target.value);
  });
  const $addNew = $('.addNew');
  $addNew.on('submit', (e) => {
    e.preventDefault();
    $items.text(items);
  });




});
