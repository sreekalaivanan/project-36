class Food{
    constructor(){}


display(){
    var x=80, y=100;

    imageMode(CENETR);
    image(this.image,720,220,70,70);

    if(this.foodStock!=0){
        for(var i=0; i<this.foodStock; i++){
            if(i%10==0){
                x=80;
                y= y+50;
            }
            image(this.image,x,y,50,50)
            x= x+30;
        }
    }
}   
}



function updateFoodStock(){
    dog.addImage(happyDog);
}

if(foodObj.getFoodStock()<= 0){
    foodObj.updateFoodStock(foodObj.getFoodStock()*0);
}
else{
    foodObj.updateFoodStock(foodObj.getFoodStock()-1);
} 







