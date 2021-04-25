import Vector from '../classes/Vector';

window.addEventListener('load', ()=>{
    const triangle = document.querySelector('.triangle');
    const trianglePos = new Vector(0, 0);

    let counter = 0;
    let interval = 10;

    document.addEventListener('mousemove', (event)=>{
        if(counter % interval == 0){
            //console.log(event);
            let mousePos = new Vector(event.x - (window.innerWidth/2), event.y - (window.innerWidth/2));
            const angle = mousePos.angleBetween(new Vector(0,-1));
            //console.log(angle);
            if(mousePos.x <0){
                triangle.style.transform = 'rotate(' + (-angle) + 'deg)';
            } else {
                triangle.style.transform = 'rotate(' + angle + 'deg)';
            }
        }
        counter++;
    })
})