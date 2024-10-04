
class StaticTest {

    state = "Vårt interna tillstånd";

    nonStaticMethod(str) {
        console.log(str);
    }

    static staticMethod(str) {
        console.log(str);
    }

}

export default function StaticExample() {

    StaticTest.staticMethod('Hej baberiba!');
    //StaticTest.nonStaticMethod('Hur funkar det nu då?');

    return <>Static Example</>;
}