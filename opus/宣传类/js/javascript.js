const pictures = document.querySelectorAll('.picture')

pictures.forEach(picture => {			//遍历picture
    picture.addEventListener('click', () => {		//点击picture触发事件
        removeActiveClasses()
        picture.classList.add('active')			//类(class) 由picture => picture active
			
						
    })
})


function removeActiveClasses() {
    pictures.forEach(picture => {
        picture.classList.remove('active')
    })
}


