export const showLoading = () => {
    var mainLoader = document.getElementById("mainLoaderElement");
    console.log('show');
    if (mainLoader != null) {
        mainLoader.classList.remove("d-none");
    }
}

export const hideLoading = () => {
    var mainLoader = document.getElementById("mainLoaderElement");
    console.log('hide');
    if (mainLoader != null) {
        mainLoader.classList.add("d-none");
    }
}
