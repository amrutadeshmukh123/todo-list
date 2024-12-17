document.addEventListener('DOMContentLoaded',()=>{
    setTimeout(() => {
        loadData()

    },5000)
})

function loadData(){
    var container = document .querySelector('.container')
    container.innerHTML=''

    for(let i=0;i<4;i++){
        var card = document.createElement('div')
        card.className='card'

        var image = document.createElement('div')
        image.className='image'
        if(i===0){
            image.style.background='url(image.jpg)'
        }else if(i===1){
            image.style.background='url(image2.jpg)'
        }else if(i===2){
            image.style.background='url(image7.avif)'
        }else if(i===3){
            image.style.background='url(image4.webp)'
        }

        var title = document.createElement('div')
        title.className='title'
        var heading2 = document.createElement('h2')
        if(i===0){
            heading2.innerHTML='Calulator'
        }else if(i===1){
            heading2.innerHTML='User Ganerator'
        }else if(i===2){
            heading2.innerHTML='Portfolio'
        }else if(i===3){
            heading2.innerHTML='Image Gallary'
        }
        
        title.append(heading2)

        var text = document.createElement('div')
        text.className='text'
        if(i===0){
            text.innerHTML='A web-based calculator project that performs basic arithmetic operations with a clean, responsive design, enhancing user experience through intuitive functionality.'
        }else if(i===1){
            text.innerHTML='A web-based project that generates random user profiles with details like names, emails, and avatars using dynamic data and responsive design.'
        }else if(i===2){
            text.innerHTML='A responsive, multi-page portfolio website showcasing professional skills, projects, and experience, with clean design and seamless user navigation.'
        }else if(i===3){
            text.innerHTML='An image gallery project in web development showcases a dynamic, responsive collection of images, allowing users to view, filter,  photos seamlessly across devices.'
        }

        card.append(image)
        card.append(title)
        card.append(text)

        container.append(card)
    }
}