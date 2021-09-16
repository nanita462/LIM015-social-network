export const homeView = () => {
    const view = `
    <section>
        En construcción muro
    </section>`;

    const mainHome = document.getElementById('mainContainer');
    mainHome.innerHTML = '';
    mainHome.innerHTML = view;
    return mainHome;
}