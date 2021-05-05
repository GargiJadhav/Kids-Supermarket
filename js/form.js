class Form{
    constructor(){
        this.title = createElement('h1');
        this.greeting = createElement('h2');
        this.list1 = createElement('h3');
        this.list2 = createElement('h3');
        this.list3 = createElement('h3');
        this.list4 = createElement('h3');
        this.list5 = createElement('h3');
        this.button = createButton("PLAY");
    }
    hide(){
        this.greeting.hide();
        this.list1.hide();
        this.list2.hide();
        this.list3.hide();
        this.list4.hide();
        this.list5.hide();
        this.button.hide();
    }
    display(){
        background(bg);
        rect(displayWidth/2-100,100,500,500);
this.title.html("THE SUPER KIDS MARKET");
this.title.position(displayWidth/2,50);
this.greeting.html("List of Items to be bought");
this.greeting.position(displayWidth/2,200);
this.list1.html("1. Chocolate-Ice cream");
this.list1.position(displayWidth/2,250);
this.list2.html("2. Mango-Ice cream");
this.list2.position(displayWidth/2,300);
this.list3.html("3. Strawberry-Ice cream");
this.list3.position(displayWidth/2,350);
this.list4.html("4. Kesar Pista-Ice cream");
this.list4.position(displayWidth/2,400);
this.list5.html("5. Vanilla-Ice cream");
this.list5.position(displayWidth/2,450);
this.button.position(displayWidth/2+300,450);
this.button.mousePressed(()=>{
    this.hide();
    gameState = 1;

})

    }
}