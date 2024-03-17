const news_form=$("#news_form");
const get_news_api="../../php scripts/getnews.php";
const post_news="../../php scripts/createnews.php ";
//im still suffer from the same error from last assignment so i implement this assignment without see results :')
fetch(get_news_api,{
    method:"GET"
})
.then(res=>res.json())
.then(res=>{
const news=res.map(el=>{
    const {news_title,news_text,date}=el;
    return(`<li><div class="to-column Gap">
    <div class="flex-items">
    <h1>${news_title}</h1><span>${date}</span></div>
     <p>${news_text}</p>
    </div></li>`)
})
$("#news_list").append(news.join(''))
})
.catch(err=>console.log(err))

news_form.on("submit",()=>{
    const title=$("#title").val();
    const news=$("#news").val();
    const formData= new FormData();
    formData.append("title",title)
    formData.append("news",news)
    if (title!='' && news !=''){
    $("#news_list").append(`<li><div class="to-column Gap">
    <div class="flex-items">
    <h1>${title}</h1><span>${new Date()}</span></div>
     <p>${news}</p>
    </div></li>`);

    fetch(post_news,{
        method:"POST",
        body:formData
    })
    .then(res=>res.json())
    .then(res=>{
    const news=res.map(el=>{
        const {news_title,news_text,date}=el;
        return(`<li><div class="to-column Gap">
        <div class="flex-items">
        <h1>${news_title}</h1><span>${date}</span></div>
         <p>${news_text}</p>
        </div></li>`)
    })
})
}

});
