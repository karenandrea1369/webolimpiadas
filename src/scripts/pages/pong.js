window.addEventListener('load', ()=>{

    const rackets = document.querySelectorAll('.racket');

    const ball = {
        ball : document.querySelector('.ball'),
        x : window.innerWidth/2,
        y : window.innerHeight/2,
        speed : new Vector((Math.random()-0.5)*10, (Math.random()-0.5)*10)
    }

    setInterval(()=>{
        ball.x += ball.speed.x;
        ball.y += ball.speed.y;
        

    }, 16)

    document.addEventListener('keydown', event =>{
        console.log(event.code);
        switch(event.code){
            case 'KeyW':

            break;

            case 'KeyS':

            break;

            case 'ArrowUp':

            break;

            case 'ArrowDown':

            break;
        }
    });
});