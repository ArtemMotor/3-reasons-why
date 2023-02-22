// Соберите все кнопки в один список. Затем обратитесь к каждой панели после кнопки (используйте nextElementSibling) и добавьте ей переключатель класса show. При нажатии на кнопку секция должна появляться, а при повторном нажатии на кнопку секция должна исчезать:

const buttons = document.querySelectorAll('.accordion')

buttons.forEach((btn) =>
  btn.addEventListener('click', () => {
    const panel = btn.nextElementSibling
    panel.classList.toggle('show')
  })
)
