var Item_offset = 0;

$("#AddItem_button").on("click", function(e){
    var name = $("#Input_box").val();
    $("#MyList").append(
    `<div class ="marginElement" id = "marginElement${Item_offset}">
        <li class="listItem" id="listItem${Item_offset}">
            <p class="unCorssed" id="itemDescription${Item_offset}"> ${name} </p>

            <button class="CrossItem" id="Ck${Item_offset}" > check </button>

            <button class = "DeleteItem" id="Delete${Item_offset} "> delete </button>
        </li>
    </div>`);
    Item_offset++;
    e.preventDefault();
});

$("#MyList").on("click", ".CrossItem", function(e){
    var Offset = $(this).attr("id").substr(2);
    console.log(Offset);
    var currentClass = $("#itemDescription"+Offset).attr("class");
    if(currentClass == "unCorssed"){
        $("#itemDescription"+Offset).attr("class", "crossed");
    }
    else{
        $("#itemDescription"+Offset).attr("class", "unCorssed");
    }
    e.preventDefault();
});

$("#MyList").on("click", ".DeleteItem", function(e){
    // Getting the offset of the element we want to delete
    var Offset = $(this).attr("id").substr(6);
    console.log(Offset)
    //Removing the element by the class (the hole class) and the offset
    $("#marginElement"+Offset).remove();
    e.preventDefault();
});