class Vector{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    add(x, y){
        let newX = this.x + x;
        let newY = this.y + y;
        return new Vector(newX, newY);
    }

    add(vector){
        let newX = this.x + vector.x;
        let newY = this.y + vector.y;
        return new Vector(newX, newY);
    }

    sub(x,y){
        let newX = this.x - x;
        let newY = this.y - y;
        return new Vector(newX, newY);
    }

    sub(vector){
        let newX = this.x - vector.x;
        let newY = this.y - vector.y;
        return new Vector(newX, newY);
    }

    mult(x,y){
        let newX = this.x * x;
        let newY = this.y * y;
        return newX + newY;
    }

    mult(vector){
        let newX = this.x * vector.x;
        let newY = this.y * vector.y;
        return newX + newY;
    }

    mag(){
        //square root
        return Math.sqrt((this.x * this.x)+(this.y * this.y));
    }

    angleBetween(v2){
        let v1 = new Vector(this.x,this.y);
        return Math.acos(v1.mult(v2)/(v1.mag()*v2.mag())) * (180/Math.PI);
    }
}

export default Vector;