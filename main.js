$("#wrapper>div").each(function() {
	$(this).on("click", function() {
		$(this).css("z-index", "100");
	});
});

$(".box>p:nth-child(3)").css("cursor", "pointer");

$(".box>p:nth-child(3)").click(function() {
	location.reload(true);
});

$("#titles").click(function() {
	location.reload(true);
});