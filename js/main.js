const elForm = document.querySelector(".form-js")
const elInput = document.querySelector(".input-js")
const elInputYear = document.querySelector(".input-year-js")
const elSelect = document.querySelector(".form-select")
const elList  = document.querySelector(".list-js");
const elTemplaate  = document.querySelector(".template-js").content;
const elFragment = document.createDocumentFragment();

function renderFunc(value, selcvalue, yearvalue){
    fetch(`https://www.omdbapi.com/?apikey=d4ca8e84&s=${value}&type=${selcvalue}&y=${yearvalue}`)
    .then(respons => respons.json())
    .then(data => {
        movFunc(data.Search)
    })
    .catch(err => elList.innerHTML = "Not Found !!!")
}
function movFunc(data){
    elList.innerHTML = "";
    data.forEach(item =>{
        const temClone = elTemplaate.cloneNode(true);
        temClone.querySelector(".search-img").src = item.Poster;
        temClone.querySelector(".text-js").textContent = item.Title;
        temClone.querySelector(".year").textContent = item.Year;
        temClone.querySelector(".type").textContent = item.Type;
        
        elFragment.appendChild(temClone);
    })
    elList.appendChild(elFragment)
}

elForm.addEventListener("submit", (evt) =>{
    evt.preventDefault();
    const inputValue = elInput.value;
    const selctValue = elSelect.value;
    const inputYearValue = elInputYear.value;
    renderFunc(inputValue, selctValue, inputYearValue)
})