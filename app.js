function toggleStatus() {
    const btns = Array.from(document.querySelectorAll('.accordion'))
   
    btns.map(btn => {
        btn.addEventListener('click', function(){
            this.classList.toggle('active')
            let panel = this.nextElementSibling;
            console.log(panel.scrollHeight)
            if(panel.style.maxHeight){
                panel.style.maxHeight = null
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px"
            }
        })
    })
}
toggleStatus() 