//your api key: b6cdaafb43c84cf0bd83533bcbe93e4c
dateArray = []
refinedDateArray = []
function apiTest() {
    var query = document.getElementById("queryInput").value;
    var page = document.getElementById("pageInput").value;
    for (var i = 0; i<1; i++) {

        url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param({

                'api-key': "b6cdaafb43c84cf0bd83533bcbe93e4c",
                'q': query,
                'sort': 'oldest',
                // 'fl': 'lead_paragraph',
                'fl': 'pub_date',
                'page': i,
                'begin_date': '19900101'

            });


        $.ajax({
            url: url,
            type: 'GET',
            crossDomain: true,
            dataType: 'json',
            // headers: {
            //     'Access-Control-Allow-Origin': "true"
            // },
            success: function (result) {

                console.log(result);
                initialPush(result);


            },
            error: function () {

                alert('Failed!');

            }

        });
    }
}

function initialPush(result) {

    for (var i = 0; i<=9; i++) {
        dateArray.push(result.response.docs[i].pub_date);

    }

}


function DateSet(string) {

    this.year = string.substring(0,3) - 1990;
    this.month = string.substring(5, 6);
    this.finalDate = this.year + this.month/12;
}

function refineDates() {
    for (var i = 0; i < dateArray.length; i++) {
        eval("var date" + i + " = new DateSet(dateArray[" + i + "])");
        refinedDateArray.push(eval("date"  + i));
    }
    console.log(refinedDateArray);
}/**
 * Created by h205p3 on 3/8/17.
 */
