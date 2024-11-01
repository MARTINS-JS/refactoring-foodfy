const links = document.querySelectorAll('.links a')
const cards = document.querySelectorAll('.card')

const list = document.querySelectorAll('.list')
const buttons = document.querySelectorAll('.subtitle span')

for (let link of links) {
  if (link.pathname === window.location.pathname) {
    link.classList.add('bold')
  }
}

for (let [index, card] of cards.entries()) {
  card.addEventListener('click', function() {
    window.location.href = `/receita/${index}`
  })
}

for (let [index, button] of buttons.entries()) {
  button.addEventListener('click', function() {
    if (button.textContent == 'ESCONDER') {
      button.textContent = 'MOSTRAR'
    } else {
      button.textContent = 'ESCONDER'
    }
    
    list[index].classList.toggle('list--hidden')
  })
}
