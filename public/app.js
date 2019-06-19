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
            alert(data);
        })
    };

    function handleArticleClear() {
        $.get("/clear").then(function () {
            $("#scraped-articles").empty();
            homePage(); 
        })
    };

    function handleArticleSave() {
        var articleToSave =
            $(this).parents(".card").data();
        $(this).parents(".card").remove();

        articleToSave.saved = true;

        $.ajax({
            method: "PUT",
            url: "/articles/" + articleToSave._id,
            data: articleToSave
        }).then(function (data) {
            if (data.saved) {
                console.log(data);
               homePage();
            }
        })
    };

});