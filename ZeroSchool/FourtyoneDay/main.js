function Restaurant({cash,seats,staff}){
    this.cash=cash;
    this.seats=seats;
    this.staff=staff;
}

Restaurant.prototype.hire=function(employee){
    this.staff.push(employee);
}
Restaurant.prototype.fire=function(emloyee){
    for(let i in this.staff){
        if(this.staff[i].name===emloyee.name){
            this.staff[i]=null;
            break;
        }
    }
}

function Employee(name,wage){
    this.name=name
    this.wage=wage;
}

Employee.prototype.working=function(){
    if(this.prototype.constructor.name==='Waiter'){
        if(arguments.length===1){
            this.write(arguments[0]);
        }else{
            this.serve();
        }
    }
    if(this.prototype.constructor.name==='Chef'){
        this.cook();
    }

    this.write=function(array){
    }
    this.serve=function(){

    }
}

function Waiter(name,wage){
    Employee.call(this,name,wage);

}
Waiter.prototype=Object.create(Employee);
Waiter.prototype.constructor = Waiter;

function Cook(name,wage){
    Employee.call(this,name,wage);
}

function Customer(){

}
Customer.prototype.book=function(){
    
}
Customer.prototype.eat=function(){

}
function Menu(name,cost,price){
    this.name=name;
    this.cost=cost;
    this.price=price;
}