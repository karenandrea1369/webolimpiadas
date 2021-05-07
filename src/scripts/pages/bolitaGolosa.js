import BolitaInventario from "../classes/BolitaInventario";

window.addEventListener('load', ()=>{
    const food = document.querySelectorAll('.bolita');
    const golosa = document.querySelector('.golosa');
    const foodArray = [];

    food.forEach(f =>{
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;
        const size = (Math.random() *100) + 40;
        const newFood = new BolitaInventario(f, posX, posY, size);
        newFood.updatePosition();
        foodArray.push(newFood);
    });

    foodArray.forEach(ball=>{
        const ballElement = ball.getElement();
        ballElement.addEventListener('mousedown',(event) =>{
            foodArray.forEach(ball =>{
                ball.setSelected(false);
            })
            ball.setSelected(true);
            offsetX = event.offsetX + 5;
            offsetY = event.offsetY + 5;
        });

    });

    let offsetX = 0;
    let offsetY = 0;

    document.addEventListener('mousemove',(event) =>{
        foodArray.forEach(ball =>{
            if(ball.isSelected()){
                console.log("De lo que sea");
                let x = event.clientX - (offsetX - (ball.getElement().offsetWidth/2));
                let y = event.clientY - (offsetY - (ball.getElement().offsetHeight/2));
                //console.log(event);
                ball.setX(x);
                ball.setY(y);
                ball.updatePosition();
            }
        })
    });

})