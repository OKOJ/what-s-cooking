$(document).ready(function () {
    //alert("scrape")

    //var articleContainer = $("#scraped-articles");
    $(".scrape").on("click", handleArticleScrape);
    $("#clear-all").on("click", handleArticleClear);
    $("#save-article").on("click", handleArticleSave);

    function handleArticleScrape() {
        $.get("/scrape").then(function (data) {
            //alert("scrape is success")
            //initPage();
            alert(data);
        })
    };

    function handleArticleClear() {
        $.get("/clear").then(function () {
            $("#scraped-articles").empty();
            //initPage(); 
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
                // initPage();
            }
        })
    };

});