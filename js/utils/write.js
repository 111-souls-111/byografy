'use strict'

export function write(el){
   
    

        if (!el) return;

        const text = (el.dataset.text || '').replace(/\s+/g, ' ').trim();
        const speed = 5;
        const start = 5

        let i = 0;

        function type() {
            if (i < text.length) {
                el.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }

        setTimeout(type,start)
}

