const fileInput = document.querySelector("input");
const downloadBtn = document.querySelector("button");

async function fetchFile(url){
    let response = await fetch(url);
    let data = await response.blob();
    
    let tempUrl = URL.createObjectURL(data);
    let aTag = document.createElement("a");
    aTag.href = tempUrl;
    aTag.download = url.replace(/^.*[\\\/]/, '');
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove(); 
    URL.revokeObjectURL(tempUrl); 
    downloadBtn.innerText = "Downloaded file...";
};
downloadBtn.addEventListener("click", e => {
    e.preventDefault();
    downloadBtn.innerText = "Downloading file...";
    fetchFile(fileInput.value);
});

