$(document).ready(function () {

    $(".scrape").on("click", handleArticleScrape);
    $("#clear-all").on("click", handleArticlesClear);
    $("#save-article").on("click", handleArticleSave);
    $("#delete-article").on("click", handleArticleDelete)

    function homePage() {
        $.get("/articles?saved=false").then(function (data) {
            //alert("welcome")
            //$("#scraped-article").empty();
            if (data && data.length) {
                //renderArticles(data);
                //console.log("we have something")
                location.reload(true);
            } else {
                //renderEmpty()
                //console.log("it's empty")
                location.reload(true);
            }
        })
    }

    function handleArticleScrape() {
        $.get("/scrape").then(function (data) {
            homePage();
            console.log(data);
        })
    };

    function handleArticlesClear() {
        $.get("/clear").then(function () {
            // homePage(); 
            location.reload(true);
        })
    };

    function handleArticleSave() {
        var articleId;
        $(document).on("click", ".saved", function () {
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
                    location.reload(true);
                }
            }).catch(function (err) {
                console.log(err)
            })
            homePage()

        })

    };

    function handleArticleDelete() {
        var savedArticleId;
        $(document).on("click", ".delete", function () {
            savedArticleId = $(this).data("id");
            console.log(savedArticleId);
            console.log(this)
            $.ajax({
                method: "DELETE",
                url: "/articles/" + savedArticleId,
                data: savedArticleId
            }).then(function (data) {
                location.reload(true);

            }).catch(function (err) {
                console.log(err)
            })
            homePage()
        })

    };

});