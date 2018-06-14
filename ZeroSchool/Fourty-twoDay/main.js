//餐厅
function Restaurant({cash,seats,staff}) {
    this.cash = cash;
    this.seats = seats;
    this.staff = staff;
}

Restaurant.prototype.hire = function(employee) {
    this.staff.push(employee);
}
Restaurant.prototype.fire = function(emloyee) {
    for(let i in this.staff) {
        if(this.staff[i].name===emloyee.name) {
            this.staff[i] = null;
            break;
        }
    }
}

//雇员
function Employee(name,wage) {
    this.name = name
    this.wage = wage;
}
Employee.prototype.working = function() {
    console.log('working...');
}

//服务员
function Waiter(name,wage) {
    Employee.call(this,name,wage);
}
Waiter.prototype=Object.create(Employee.prototype);
Waiter.prototype.constructor = Waiter;
Waiter.prototype.worders = function(customer) {
        return customer.Corders();
    }
    /*['Salad Nicoise','Cream of Mushroom Soup','T-Bone Steak','Roast Beef','Seafood Pizza','Mashed Potatoes','Italian Tiramisu','Chocolate Milk Shake'],[16,18,48,38,59,12,22,24]*/ 
Waiter.prototype.ordered = function(dishName,dishCost){
    var menu = createMenu(dishName,dishCost);
    //
    console.log('Waiter: This is your menu.');
    for(let i of menu){
        console.log('Waiter: '+i.name+' : '+i.price+'$');
           }
    //
    return menu;
}
Waiter.prototype.serve = function() {
    var dish = true;
    return dish;
}
Waiter.prototype.toCm = function (dishName,dishCost,customer) {
    //
    console.log('Customer: May I have a menu,please?');
    //
    var menu = this.ordered(dishName,dishCost);
    var dish=customer.Corders(menu);
    return dish;
}
Waiter.prototype.toCc = function(cook,dish) {
    cook.cooking(dish);
}
Waiter.prototype.toCd = function(dish) {
    //
    console.log('Waiter: This is your '+dish.name+',have yourself!');
    //
}
Waiter.prototype.toClear = function(customer) {
    var finish = customer.eat();
    var count = setInterval(function() {
        if(finish){
            customer = null;
            clearInterval(count);
        }
    },1000);
}

//厨师
function Cook(name,wage) {
    Employee.call(this,name,wage);
}
Cook.prototype=Object.create(Employee.prototype);
Cook.prototype.constructor = Cook;
Cook.prototype.cooking = function(dish) {
    console.log('Cook: the '+dish.name+' is well!');
}
Cook.prototype.toWd = function(waiter,dish) {
    waiter.toCd(dish);
}

function Customer(name) {
    this.name = name;
}
Customer.prototype.Corders = function(menu) {
    var i = createRandom(menu.length-1,0);
    //
    console.log(this.name+': I want '+menu[i].name+'.');
    //
    return menu[i];
}
Customer.prototype.eat = function(dish) {
        console.log(this.name+': '+dish.name+' tastes well,This is the money.');
}
function Dish(name,price) {
    this.name = name;
    //this.cost=cost;
    this.price = price;
}
//单例模式
var getSingle = function(fn){
    var instance;
    return function(){
      if(!instance){
        instance = new fn(...arguments);
      }
      return instance;
    }
};
var getSingleW = getSingle(Waiter);
var getSingleCu = getSingle(Customer);
var getSingleCo = getSingle(Cook);
//细节
function createMenu(dishName,dishCost) {
    var menu = [];
    for(let i=0;i<dishCost.length;i++){
        menu.push(new Dish(dishName[i],dishCost[i]));
    }
    return menu;
}
function createRandom(max,min) {
    return Math.round((max - min)* Math.random()) + min;
}

//console

//todo:
var kan = getSingleW('kan',4000);
var Ming = getSingleCo('Ming',9000);
var names = ['Anne','Alisa','Kerry','Ailsa','leo','Oliver']
var customers=[];
for(let i=0;i<4;i++){
    customers.push(new Customer(names[i]));
}
console.log(customers)

function open(){
    var customer=customers.pop();
    if(customer) {
        var dish=kan.toCm(['Salad Nicoise','Cream of Mushroom Soup','T-Bone Steak','Roast Beef','Seafood Pizza','Mashed Potatoes','Italian Tiramisu','Chocolate Milk Shake'],[16,18,48,38,59,12,22,24],customer);
    kan.toCc(Ming,dish);
    Ming.toWd(kan,dish);
    customer.eat(dish);
    open();
    }
}
open();



