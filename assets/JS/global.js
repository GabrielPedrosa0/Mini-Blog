
document.getElementById('createText').addEventListener("click", () => {
    const container = document.createElement('div')
    const textarea = document.createElement('textarea')
    const publishButonn = document.createElement('button')
    const deletButonn = document.createElement('button')


    container.className = "container-userText"
    container.appendChild(textarea)

    //Configuração do textarea
    textarea.className = "userText" 
    textarea.placeholder = "Digite aqui..."
    textarea.setAttribute("maxlengh", "500")

    //Botão publicar
    publishButonn.textContent = "Publicar"
    publishButonn.addEventListener("click", () => {
        if(textarea.value.trim() !== ''){
            createPost(textarea.value)
            container.remove() //Linha adicionada para que quando o usuario publique o campo de digitação desapareça
        }
    })

    function createPost(text){
        const publishContent = document.createElement('div')
        const post = document.createElement('div')
        post.className = "post"
        post.style.whiteSpace = "pre-wrap" 

        publishContent.className = "publish-content"
        publishContent.id = "publish-content"

        const postText = document.createElement('span')
        postText.textContent = text

        post.appendChild(postText)
        document.getElementById('container-textsUsers').appendChild(publishContent)
        document.getElementById('publish-content').appendChild(post)
    }

    //Botão de delet
    deletButonn.textContent = "Remover Campo"
    deletButonn.addEventListener("click", () => container.remove())

    container.append(textarea, publishButonn, deletButonn)


    document.getElementById('container-textsUsers').appendChild(container) 

})

window.onscroll = function() {
    mostrarBotão()
}

function mostrarBotão() {
    const btn = document.getElementById('btnTop')
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = 'block'
    } else {
        btn.style.display = 'none'
    }
}

function btnTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}