$(function() {
	$('.del').click(function(e) {
		var target = $(e.target)
		var id = target.data('id')
		var tr = $('.item-id-' + id)
		if (confirm("确定删除？")) {
			$.ajax({
				type: 'DELETE',
				url: '/admin/list?id=' + id,

			}).done(function(result) {
				if (result.success === 1) {
					if (tr.length > 0) {
						tr.remove()
					}
				}
			})
		}


	})
})