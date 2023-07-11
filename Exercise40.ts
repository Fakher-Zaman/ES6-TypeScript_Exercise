// Decorators

@Component({
    selector: 'my-app',
    template: `<h1>Codevolution Tutorial</h1>`
})

export class AppComponent {
    constructor() {
        console.log("I am a constructor");
    }
}