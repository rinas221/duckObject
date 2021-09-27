let duck = {
    name: 'Дональд',
    age: '1 год',
    color: 'белый',
    toStr: function () {
        return `${this.name}, ${this.color}, ${this.age}`
    },
    say: function () {
        return 'кря кря'
    }
}

console.log(duck.toStr())
console.log(duck.say())