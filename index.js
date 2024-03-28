const para = document.querySelector("#Quotes");
const head = document.querySelector("h3");
let idx = -1;
async function getHadith(){
    idx++
    para.innerHTML = "loading...."
    head.innerHTML = ""
    let response = await fetch("https://www.hadithapi.com/public/api/hadiths?apiKey=$2y$10$3n4WWtNj7PRlSl561zuf7uE8abADUqqI1pV9YUrdGSnWVmxCtVtFu");
    let data = await response.json();
    data.hadiths
    head.innerHTML = data.hadiths.data[idx].englishNarrator;
    para.innerHTML = data.hadiths.data[idx].hadithEnglish;

}