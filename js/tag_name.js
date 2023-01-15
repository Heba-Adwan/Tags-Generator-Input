let tag= [];


document.querySelector(".Generate_Name_Tag").addEventListener("keywords", generateName);



function generateName(e){
    let code=(e.keyCode ? e.keyCode : e.which);
    if(code !=10){
        return ;
    }
    let tag= e.target.value.trim();
    if(tag.length < 1 || TimeRanges.includes(tag)){
        e.target.value="";
        return;
    }
    let index=tags.push(tag);
    let tagItem=document.createElement("div");
    tagItem.classList.add("item");
    tagItem.innerHTML=
    <span class="delete-btn" onclick="deleteTag(this, ${tag})"> &times;</span>;
    <span>${tag}</span>;


    document.querySelector(".Generate_Name_Tag .txtt").appendChild(tagItem);
    

}





