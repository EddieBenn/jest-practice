class Host {
    greet(name?: any) {
        return name ? `Hello ${name}`  : "Hello Stranger"
    }

    farewell(name?: any) {
        return name ? `Goodbye ${name}`  : "Goodbye Stranger"
    }
}

export default Host