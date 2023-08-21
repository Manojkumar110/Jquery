// Heading :-
$(document).ready(function () {

    var heading = getLocalStorage("Heading");
    if (heading) {
        $("#mainContainer").append(heading);
    }

    $(':input[type="submit"]').prop('disabled', true);
    $('input[type="text"]').keyup(function () {
        if ($(this).val() != '') {
            $(':input[type="submit"]').prop('disabled', false);
        }
    });

    $(".select-heading").on('submit', function (e) {
        var heading = $('input').val()
        $("main").append('<section><h1>' + heading + '<button class="remove btn btn-danger" onclick="removeFun(this)"><img src="img/delete.png" alt="" width="10" height="10"></button></h1></section>')
        // $("main").append('<section><h1> ' + heading + '<button class="remove btn btn-danger" onclick="removeFun(this)"><img src="img/delete.png" alt="Girl in a jacket" width="10" height="10"></button><div class="container"></div></h1></section>')
        $('.select-sub-heading option').remove()
        $('.select-sub-heading select').append("<option value='' selected disabled>Please Select Heading</option>")
        $('.select-form #headings option').remove()
        $('.select-form #headings').append("<option value='' selected disabled> Please Select Heading</option>")
        $('section h1').each(function (key) {
            key = key + 1
            var heading_in_sub_heading = $(this).text()
            $('.select-form #headings').append("<option value=" + key + ">" + heading_in_sub_heading + "</option>")
            $('.select-sub-heading select').append("<option value=" + key + ">" + heading_in_sub_heading + "</option>")
        })
        e.preventDefault();
        e.target.reset();
        setLocalStorage();
    })
});

// new heading start here:-
$("#headingTextModel").click(function (e) {
    $(':input[type="submit"]').prop('disabled', true);
    $('input[type="text"]').keyup(function () {
        if ($(this).val() != '') {
            $(':input[type="submit"]').prop('disabled', false);
        }
    });
    e.target.resSet();
})

// new heading end here:-

// -----------------------Heading End Here-------------------------------

//Sub Heading Section(New) :-
$("#SubSeadingId").click(function () {
    $(':input[type="submit"]').prop('disabled', true);
    $('input[type="text"]').keyup(function () {
        if ($(this).val() != '') {
            $(':input[type="submit"]').prop('disabled', false);
        }
    });
    var heading = getLocalStorage("Heading");
    $('.select-sub-heading option').remove()
    $('.select-sub-heading select').append("<option value='' selected disabled>Please Select Heading</option>")
    $('.select-form #headings option').remove()
    $('.select-form #headings').append("<option value='' selected disabled> Please Select Heading</option>")
    $('section h1').each(function (key) {
        key = key + 1
        var heading_in_sub_heading = $(this).text()
        $('.select-form #headings').append("<option value=" + key + ">" + heading_in_sub_heading + "</option>")
        $('.select-sub-heading select').append("<option value=" + key + ">" + heading_in_sub_heading + "</option>")
    })
    // e.preventDefault();
    // e.target.reset();
    setLocalStorage();
});


// -------------------------Sub Heading New End Here---------------------------------


// sub heading (old)
$(document).ready(function () {
    getLocalStorage("Heading")
    $(".select-sub-heading").on('submit', function (e) {
        var heading_in_sub_heading = $('select option:selected', this).val()
        var sub_heading = $('input', this).val()
        $("section:nth-child(" + heading_in_sub_heading + ")").append('<div class="container  mt-1"><h4 class="subheadingtxt">' + sub_heading + '<button class="remove btn btn-danger" onclick="removeFun(this)"><img src="img/delete.png" alt="" width="10" height="10"></button></h4></div>')
        // $("section h1:nth-child(" + heading_in_sub_heading + ")").append('<h4 class="subheadingtxt">' + sub_heading + '<button class="remove btn btn-danger" onclick="removeFun(this)"><img src="img/delete.png" alt="delete button" width="10" height="10"></button></h4>')
        $('.select-form #sectionTagId option').remove()
        $('.select-form #sectionTagId').append("<option value='' selected disabled>Select Sub Heading</option>")
        $('section .container h4').each(function (key) {
            key = key + 1
            $(this).text()
            e.preventDefault();
            e.target.reset();
            setLocalStorage();
        })
    })
});
// ------------------------------Sub Heading old End Here-------------------------

// form section(New)
$("#formModelId").click(function () {
    formReset()
    $(':input[type="submit"]').prop('disabled', true);
    $('input[type="text"]').keyup(function () {
        if ($(this).val() != '') {
            $(':input[type="submit"]').prop('disabled', false);
        }
    });
    // var heading = getLocalStorage("Heading");
    $('.select-sub-heading option').remove()
    $('.select-sub-heading select').append("<option value='' selected disabled>Please Select Heading</option>")
    $('.select-form #headings option').remove()
    $('.select-form #headings').append("<option value='' selected disabled> Please Select Heading</option>")
    $('section h1').each(function (key) {
        key = key + 1
        var heading_in_sub_heading = $(this).text()
        $('.select-form #headings').append("<option value=" + key + ">" + heading_in_sub_heading + "</option>")
        $('.select-sub-heading select').append("<option value=" + key + ">" + heading_in_sub_heading + "</option>")
    })
    // e.preventDefault();
    // e.target.reset();
    // setLocalStorage();

    var subheading = [];
    $('.formheading').on("change", function (e) {
        var heading_in_sub_heading = $('.formheading option:selected').val()
        $('.select-form #sectionTagId option').remove()
        $('.select-form #sectionTagId').append("<option value='' selected disabled>Select Sub Heading</option>")
        subheading = []
        $("section:nth-child(" + heading_in_sub_heading + ") div h4").each(function (key) {
            subheading.push($(this).text())
        })

        $.each(subheading, function (index, itemData) {
            $('#sectionTagId').append($("<option></option>")
                .attr("value", index + 2)
                .text(itemData));
        });
    })
    // e.preventDefault();
    // e.target.reset();

});

// ------------------Form(New)End Here----------------------------

// form section(old) :- 
$(document).ready(function () {
    $('section h1').each(function (key) {
        key = key + 1
        var heading_in_sub_heading = $(this).text()
        $('.select-sub-heading select').append("<option value=" + key + ">" + heading_in_sub_heading + "</option>")
        $('.formheading').append("<option value=" + key + ">" + heading_in_sub_heading + "</option>")
    })
    var subheading = [];
    $('.formheading').on("change", function (e) {
        var heading_in_sub_heading = $('.formheading option:selected').val()
        $('.select-form #sectionTagId option').remove()
        $('.select-form #sectionTagId').append("<option value='' selected disabled>Select Sub Heading</option>")
        subheading = []
        $("section:nth-child(" + heading_in_sub_heading + ") div h4").each(function (key) {
            subheading.push($(this).text())
        })
        $.each(subheading, function (index, itemData) {
            $('#sectionTagId').append($("<option></option>")
                .attr("value", index + 2)
                .text(itemData));
        });
    })

    $(".select-form").on('submit', function (e) {
        var frmheading = $('.formheading option:selected').val()
        var frmsh = $('.subheadingform option:selected').val()
        $('.select-input').change(function () {
            var frmchngvalue = $(this).val()
            console.log("options :", frmchngvalue)
        })
        var controlType = $('#controlType').val();
        var inputLabel = $('.labels').val()
        // var inputFor = $('.for').val()
        var inputClass = $('.classes').val()
        var InputId = $('.ids').val()
        var inputPlaceholder = $('.placeholders').val()
        var inputValue = $('.values').val()
        var inputName = $('.names').val()
        // var inputActIion = $('.actions').val()
        // var inputOption = $('.options').val()
        // var element = '<input type="' + controlType + '"  " label="' + inputLabel + '" class="' + inputClass + '" id="' + InputId + '" placeholder="' + inputPlaceholder + '" value="' + inputValue + '" name="' + inputName + '" action="' + inputActIion + '" option="' + inputOption + '" /><br>'
        var element = '<label >' + inputLabel + '</label > <input type="' + controlType + '"  label="' + inputLabel + '" class="' + inputClass + '" id="' + InputId + '" value="' + inputValue + '" name="' + inputName + '" placeholder="' + inputPlaceholder + '"  />'
        $('main section:nth-child(' + frmheading + ') div:nth-child(' + frmsh + ')').append('<p>' + element + '<span class="" onclick="removed(this)"><img src="img/delete.png" class="img-fluid" alt="" width="10" height="10"></span></p>')
        // $("section:nth-child(" + heading_in_sub_heading + ")").append('<div class="container  mt-1"><h4 class="subheadingtxt">' + sub_heading + '<button class="remove btn btn-danger" onclick="removeFun(this)"><img src="img/delete.png" alt="" width="10" height="10"></button></h4></div>')
        // $('main section:nth-child(' + frmheading + ')button:nth-child(' + frmsh + ')').append('<p>' + element + '</p>')
        setLocalStorage();
        e.preventDefault();
        e.target.reset();
    })
});

// // testing start here:-

$('.select-input').on("change", function () {
    var frmchngvalue = $(this).val()
    var selectValue = frmchngvalue;
    $('#Labels').val("");
    $('#Ids').val("");
    $('#Classes').val("");
    $('#Placeholders').val("");
    $('#Values').val("");
    $('#Names').val("");
    resSet()
    switch (selectValue) {
        case 'button':
            resSet()
            $('.placeholders').attr('readonly', true);
            $('.labels').attr('readonly', true);
            break;
        case 'checkbox':
            resSet()
            $('.placeholders').attr('readonly', true);
            $('.values').attr('readonly', true);
            break;
        case 'color':
            resSet()
            $('.placeholders').attr('readonly', true);
            $('.values').attr('readonly', true);
            break;
        case 'date':
            resSet()
            $('.placeholders').attr('readonly', true);
            $('.values').attr('readonly', true);
            break;
        case 'datetime-local':
            resSet()
            $('.placeholders').attr('readonly', true);
            $('.values').attr('readonly', true);
            break;
        case 'radio':
            resSet()
            $('.placeholders').attr('readonly', true);
            $('.values').attr('readonly', true);
            break;
        case 'range':
            resSet()
            $('.placeholders').attr('readonly', true);
            break;
    }
})
// tesing end here :-


// ----------------------------Form Section(old) End Here----------------------------------

function setLocalStorage() {
    var selectValue = $('#mainContainer').html();
    localStorage.setItem("Heading", selectValue);
};

function getLocalStorage(property) {
    return localStorage.getItem(property);
};

// dragdrop

// $(document).ready(function () {
//     $('#mainContainer').sortable({
//         change: function (event, ui) { setLocalStorage() },
//         update: function (event, ui) { setLocalStorage() },
//         connectWith: '#mainContainer',
//         cancel: 'h4, button, p'
//     });

//     $('.container').sortable({
//         change: function (event, ui) { setLocalStorage() },
//         update: function (event, ui) { setLocalStorage() },
//         connectWith: '.container',
//         cancel: ''
//     });

//     $('section').sortable({
//         change: function (event, ui) { setLocalStorage() },
//         update: function (event, ui) { setLocalStorage() },
//         connectWith: 'section',
//         cancel: 'h1'
//     });
//     setLocalStorage();
// });

$(function () {
    $('#mainContainer').sortable({
        change: function (event, ui) { setLocalStorage() },
        update: function (event, ui) { setLocalStorage() },
        connectWith: '#mainContainer'
    });

    $('section').sortable({
        change: function (event, ui) { setLocalStorage() },
        update: function (event, ui) { setLocalStorage() },
        connectWith: 'section',
        cancel: 'h1, button',
    });

    $('.container').sortable({
        change: function (event, ui) { setLocalStorage() },
        update: function (event, ui) { setLocalStorage() },
        connectWith: '.container',
        cancel: 'h4, button',
    });
    setLocalStorage();
})


function removeFun(remove) {
    $(remove).parent().siblings().remove();
    $(remove).parent().parent().remove();
    setLocalStorage();
    location.reload();

}


function removed(remove) {
    // $(remove).parent().siblings().remove();
    $(remove).parent().remove();
    setLocalStorage();
    location.reload();

}

$(".smtbtn").click(function () {
    location.reload();

});


function resSet() {
    $('.placeholders').attr('readonly', false);
    $('.labels').attr('readonly', false);
    $('.values').attr('readonly', false);
}


function formReset() {
    $('.select-form')[0].reset();
}


