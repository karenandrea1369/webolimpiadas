import BolitaInventario from "../classes/BolitaInventario";

window.addEventListener('load', ()=>{

    const selectors  = document.querySelectorAll('.circleInv');
    let balls = [];
    let offsetX = 0;
    let offsetY = 0;

    selectors.forEach((selector, index) =>{
        console.log(selector);
        const ball = new BolitaInventario(selector, (index-1)*100, 0);
        balls.push(ball);
    })

    balls.forEach(ball=>{
        const ballElement = ball.getElement();
        ballElement.addEventListener('mousedown',(event) =>{
            balls.forEach(ball =>{
                ball.setSelected(false);
            })
            ball.setSelected(true);
            offsetX = event.offsetX + 5;
            offsetY = event.offsetY + 5;
        });

    });

    document.addEventListener('mousemove',(event) =>{
        balls.forEach(ball =>{
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

    document.addEventListener('mouseup', (event)=>{
        balls.forEach(ball =>{
            ball.setSelected(false);
        });
        offsetX = 0;
        offsetY = 0;
    });

});