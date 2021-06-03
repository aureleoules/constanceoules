export const getLanguage = () => {
    const navigatorLang = navigator.language.substr(0, 2);
    let lang = localStorage.getItem("language") || navigatorLang;
    if(lang !== "fr" && lang !== "en") {
        lang = "en";
    }
    return lang;
}

export const setLanguage = lang => {
    localStorage.setItem("language", lang);
    window.dispatchEvent(new CustomEvent("language"), {
        detail: {
            language: lang
        }
    });
}

export const lowQuality = url => {
    if(url) return url.replace('upload/', 'upload/c_limit,h_750,q_auto:good/');
    return undefined;
}

export const highQuality = url => {
    if(url) return url.replace('upload/', 'upload/q_auto:best/');
    return undefined;
}