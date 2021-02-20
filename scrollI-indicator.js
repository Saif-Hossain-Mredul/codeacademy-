window.addEventListener("scroll", moveScrollIndicator)

const scrollElement = document.querySelector('#scrollIndicator') 

const maxHeight = window.document.body.scrollHeight - window.innerHeight


function moveScrollIndicator () {
    const percentage = (window.scrollY / maxHeight) * 100

    scrollElement.style.width = percentage + '%' 
    console.log(percentage)
}