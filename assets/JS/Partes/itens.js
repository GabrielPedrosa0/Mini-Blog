document.addEventListener('DOMContentLoaded', () => {
    const itens = document.querySelectorAll('.iten')

    itens.forEach(iten => {
        iten.addEventListener('click', () => {
            // Remove a classe 'active' de todos os itens e adiciona a classe 'active' ao item clicado
            iten.forEach(i => i.classList.remove('active'))
            // Adiciona a classe 'active' ao item clicado
            iten.classList.add('active')
        })
    })
})