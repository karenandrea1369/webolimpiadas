class bolitaMovSelector{

    constructor(element, x, y){
        this.element = element;
        this.selected = false;
        this.x = x;
        this.y = y;
    }

    updatePosition(){
        this.element.style.top = 'calc(50% + ' + this.y + 'px)';
        this.element.style.left = 'calc(50% + ' + this.x + 'px)';
    }

    getElement(){
        return this.element;
    }

    getX(){
        return this.x;
    }

    setX(x){
        this.x = x;
    }

    getY(){
        return this.y;
    }

    setY(y){
        this.y = y;
    }
    
    isSelected(){
        return this.selected;
    }

    setSelected(selected){
        this.selected = selected;
    }
}

export default bolitaMovSelector;