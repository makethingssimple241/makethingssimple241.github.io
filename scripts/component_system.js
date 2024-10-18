async function initialize_components() {
    let components_to_init = document.querySelectorAll("[component-name]");

    for (let component of components_to_init) {
        let name = component.getAttribute("component-name")
        let path = `components/${name}.html`
        
        await fetch(path)
            .then((resource) => resource.text())
            .then((text) => component.innerHTML = text)
            .catch((error) => console.error(`Failed to initialize component '${name}': ${error}`))
    }
}