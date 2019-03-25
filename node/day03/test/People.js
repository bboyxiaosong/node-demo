


function People(name,sex,age) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}


People.prototype = {
    sayHello : function () {
        console.log(this.name + this.age + this.sex)
    }
}


module.exports = People;