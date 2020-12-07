$(function () {
    var ds = [];
    $.getJSON("js/data.json", function (items) {
        console.log(items);
        ds = items;
        displayImages(data);

    });
    
    //lap trinh su kien search
    $("#formSearch").submit(function (e) {
        e.preventDefault();

        let search = $("#search").val();
        let re = new RegExp(search, "ig");
        let subdata = data.filter(item => item.name.search(re) >= 0);

        displayImages(subdata);

    });

    
    //lap trinh su kien click chon TYPE/BRAND san pham
    $("input[type=checkbox]").click(function () {

        var types =
            $('input:checkbox[name="type"]:checked')
                .map(function () {
                    return $(this).val();
                }).get();

        types = types.toString();
        if (types == "Purse" || types == "Wallet") {
            let subdata = (types.length == 0) ? data : data.filter(item => types.search(item.type) >= 0);

            displayImages(subdata);

        }
        else {
            let subdata = (types.length == 0) ? data : data.filter(item => types.search(item.brand) >= 0);

            displayImages(subdata);

        }

    });

    /* control dropdown*/
    // Function: append product 
    function myAppend() {
        var i;
        var s='';
        for (i = 0; i < ds.length; ++i) {

            // $("#showshop").append(
            //     '<div class="col-sm-4 image  ' + ds[i].type + ' ' + ds[i].brand + '" style = "margin-bottom: 2em">' +
            //     '<a href = "' + ds[i].id + '.html" target = "_blank"><img src="images\\' + ds[i].link + '" class="img-responsive ep_fade ep_fade_0 card" style="width:100%" alt="Image"></a>' +
            //     '<p>' + ds[i].name + '</p>' +
            //     '<p>' + ds[i].cost + '</p>' +
            //     '<input type="checkbox" class="checkbox mark" name = "product" value = "' + ds[i].id + '">' +
            //     '</div>'
            // )

            s = s+ '<div class="col-sm-4 image  ' + ds[i].type + ' ' + ds[i].brand + '" style = "margin-bottom: 2em">' +
                '<a href = "' + ds[i].id + '.html" target = "_blank"><img src="images\\' + ds[i].link + '" class="img-responsive ep_fade ep_fade_0 card" style="width:100%" alt="Image"></a>' +
                '<p>' + ds[i].name + '</p>' +
                '<p>' + ds[i].cost + '</p>' +
                '<input type="checkbox" class="checkbox mark" name = "product" value = "' + ds[i].id + '">' +
                '</div>'
            
        }
        $("#showshop").append(s);
    };
    // Function: compare product
    function myCompare() {
        var product = document.getElementsByName("product");
        var mark = new Array();
        for (var i = 0; i < product.length; ++i) {
            if (product[i].checked == true) {
                mark.push(product[i].value);
            }
        }

        if (mark.length < 2 || mark.length > 4) {
            alert("Please take at least 2 products and at most 4 products !" + "\n");
            $("#note").append(
                '<div class = "alert alert-danger"><strong>You have chosen "' + mark.length + '" product !</strong>' +
                '<p>Click RESET to COMPARE again!</p>' +
                '</div>'
            )
            $("#information, #product").hide(function () {
                $(".Image").show();
                $("#showshop").fadeIn(1000);
            })
        } else {
            var arr = new Array();
            for (var i = 0; i < mark.length; ++i) {
                for (var j = 0; j < ds.length; ++j) {
                    if (ds[j].id == mark[i]) {
                        arr.push(ds[j]);
                        break;
                    }
                }
            }
            $("#information").append(
                '<div class="row border rowImage">' +
                '<p style="line-height:10em">Image</p>' +
                '</div>' +
                '<div class="row border">' +
                '<p>Name</p><br>' +
                '</div>' +
                '<div class="row border">' +
                '<p>Color</p>' +
                '</div>' +
                '<div class="row border">' +
                '<p>Size</p><br>' +
                '</div>' +
                '<div class="row border">' +
                '<p>Made in</p>' +
                '</div>' +
                '<div class="row border">' +
                '<p>Price</p>' +
                '</div>'
            );
            var n = Math.floor(12 / mark.length);
            for (var i = 0; i < mark.length; ++i) {
                $("#product").append(
                    '<div class="col-xs-' + n + '">' +
                    '<div class="row border rowImage">' +
                    '<img src="images\\' + arr[i].link + '" alt="img" height = "100%">' +
                    '</div>' +
                    '<div class="row border">' +
                    '<p>' + arr[i].name + '</p><br>' +
                    '</div>' +
                    '<div class="row border">' +
                    '<p>' + arr[i].color + '</p>' +
                    '</div>' +
                    '<div class="row border">' +
                    '<p>' + arr[i].size + '</p>' +
                    '</div>' +
                    '<div class="row border">' +
                    '<p>' + arr[i].made + '</p>' +
                    '</div>' +
                    '<div class="row border">' +
                    '<p>' + arr[i].cost + '</p>' +
                    '</div>' +
                    '</div>'
                );
            }
        }

    };
    // Function: reset product checkbox
    function myReset() {
        var product = document.getElementsByName("product");
        for (var i = 0; i < product.length; ++i) {
            product[i].checked = false;
        }
        $("#note").empty();
    }

    $(function () {

        /* append product */
        myAppend();

        /*display*/
        $('#purse').click(function () {
            $("#information, #product").hide(function () {
                $(".Image").hide();
                $(".purse").show();
                $("#showshop").fadeIn(1000);
            })
        })

        $('#wallet').click(function () {
            $("#information, #product").hide(function () {
                $(".Image").hide();
                $(".wallet").show();
                $("#showshop").fadeIn(1000);
            })
        })

        $("#L").click(function () {
            $("#information, #product").hide(function () {
                $(".Image").hide();
                $(".L").show();
                $("#showshop").fadeIn(1000);
            })
        })

        $("#G").click(function () {
            $("#information, #product").hide(function () {
                $(".Image").hide();
                $(".G").show();
                $("#showshop").fadeIn(1000);
            })
        })

        $("#D").click(function () {
            $("#information, #product").hide(function () {
                $(".Image").hide();
                $(".D").show();
                $("#showshop").fadeIn(1000);
            })
        })

        $("#F").click(function () {
            $("#information, #product").hide(function () {
                $(".Image").hide();
                $(".F").show();
                $("#showshop").fadeIn(1000);
            })
        })

        $("#C").click(function () {
            $("#information, #product").hide(function () {
                $(".Image").hide();
                $(".C").show();
                $("#showshop").fadeIn(1000);
            })
        })

        $("#P").click(function () {
            $("#information, #product").hide(function () {
                $(".Image").hide();
                $(".P").show();
                $("#showshop").fadeIn(1000);
            })
        })

        $("#BB").click(function () {
            $("#information, #product").hide(function () {
                $(".Image").hide();
                $(".BB").show();
                $("#showshop").fadeIn(1000);
            })
        })

        $("#L").click(function () {
            $("#information, #product").hide(function () {
                $(".Image").hide();
                $(".L").show();
                $("#showshop").fadeIn(1000);
            })
        })
        /* compare */
        $("#compare").click(function () {
            $("#information, #product").empty();
            $("#showshop").hide(function () {
                myCompare();
                $("#information, #product").fadeIn(1000);
            });

        })

        /* reset */
        $("#reset").click(function () {
            myReset();
            $("#information, #product").fadeOut();
            $("#showshop").fadeIn(1000);
            $("#product").empty();
        })

    })
    /* scoll to top */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#on_top').fadeIn();
        } else {
            $('#on_top').fadeOut();
        }
    });
    $('#on_top').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

})
