class Page {
    constructor() {
        this.text_box = document.getElementById("text_box");
    }
    say_hello() {
        alert(this.text_box.value);
    }
}
export { Page };