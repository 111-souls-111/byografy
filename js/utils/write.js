function write(el){
document.addEventListener('DOMContentLoaded', () => {
   

    if (!el) return;

    const text = el.dataset.text || ''
    const speed = 5;
    const start = 5

    let i = 0;

    function type() {
        if (i < text.length) {
            el.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
        // else{
        //     el.style.borderRight = 'none'
        // }
    }

    setTimeout(type,start)

})
}

const el1 = document.querySelector('.header-desc');
const el2 = document.querySelector('.stud-desc');
write(el1)
write(el2)
