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
            textarea.value = "" //limpar o campo
        }

        function createPost(text){
            const post = document.createElement('div')
            post.className = "post"
            post.style.whiteSpace = "pre-wrap" 

            const postText = document.createElement('span')
            postText.textContent = text

            post.appendChild(postText)
            document.getElementById('publish-content').appendChild(post)
        }
    })



    //Botão de delet
    deletButonn.textContent = "Remover Campo"
    deletButonn.addEventListener("click", () => container.remove())

    container.append(textarea, publishButonn, deletButonn)


    document.getElementById('container-textsUsers').appendChild(container) 

})