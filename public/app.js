$(document).ready(function () {
    //alert("scrape")

    //var articleContainer = $("#scraped-articles");
    $(".scrape").on("click", handleArticleScrape);
    $("#clear-all").on("click", handleArticleClear);
    $("#save-article").on("click", handleArticleSave);

    function  homePage(){

        $.get("/articles?saved=false").then(function(data){
            alert("welcome")
            $("#scraped-article").empty();
            if(data && data.length){
                //renderArticles(data);
                console.log("we have something")
            }else{
                //renderEmpty()
                console.log("it's empty")
            }
        })
    }

    function handleArticleScrape() {
        $.get("/scrape").then(function (data) {
            //alert("scrape is success")
            homePage();
            location.reload(true);
           console.log(data);
        })
    };

    function handleArticleClear() {
        $.get("/clear").then(function () {
            $("#scraped-articles").empty();
            homePage(); 
        })
    };

    function handleArticleSave() {
        // var articleToSave =
        //     $(this).parents(".card").data();
        // $(this).parents(".card").remove();
        var articleId;
        $(document).on("click", ".saved", function(){
            
            articleId = $(this).data("id");
            console.log(articleId);
            console.log(this)
            $.ajax({
                    method: "PUT",
                    url: "/articles/" + articleId,
                    data: articleId
                }).then(function (data) {
                    if (data.saved) {
                        console.log(data);
                       homePage();
                    }
                }).catch(function(err){
                    console.log(err)
                })
        })
        // console.log(articleToSave);

        // articleToSave.saved = true;

        // $.ajax({
        //     method: "PUT",
        //     url: "/articles/" + articleToSave._id,
        //     data: articleToSave
        // }).then(function (data) {
        //     if (data.saved) {
        //         console.log(data);
        //        homePage();
        //     }
        // })
    };

});