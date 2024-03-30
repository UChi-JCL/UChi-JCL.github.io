

$(document).ready(function() {
    $('#user-list').on('click', '.toggle-description', function(){

        var $cell = $(this).closest("td");
        
        $cell.find(".short-description").toggle();
        $cell.find(".long-description").toggle();
        
        if ($(this).text() == "Read More") {
            $(this).text("Read Less");
        } else {
            $(this).text("Read More");
        }
    });
});