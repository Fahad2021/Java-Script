class Man {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    play() {
        console.log(`${this.name} is playing`);
    }
}

const man1 = new Man("fahad", 45);
const man2 = new Man("Rakib", 90);

man1.play();
man2.play()