require.config({
	paths: {
		jquery: 'lib/jquery-2.1.1.min',
		jqueryUI: 'lib/jquery-ui.min',
		Modal: 'module/modal'
	}
});

require(['jquery', 'Modal'], function ($, Modal) {
	$('.btn').click(function () {
		var modal = new Modal();
		
		modal.alert({
			title: '提示',
			content: 'Welcome Require.js!',
			handler: function () {
				console.log('you click the button');
			},
			width: 300,
			height: 150,
			y: 250,
			x: 600,
			hasCloseBtn: true,
			text4AlertBtn: 'OK',
			dragHandle: '.window_header',
			skinClassName: 'window_skin_a',
			handler4AlertBtn: function () {
				console.log('你点击了确定按钮');
			},
			handler4CloseBtn: function () {
				console.log('你点击了关闭按钮');
			}
		});
		
	});
});