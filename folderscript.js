function loadContent() {
    $.get("folders.JSON",function(data){
        $.each(data.data, function() {
            var node = $(".sample").clone();
            node.removeClass("sample");
            node.find("A").attr("href",(this.name) + "/");
            node.find("STRONG").text(this.name.substring(0,8));
            $("#list").append(node); 
        });
    });
}
    
        