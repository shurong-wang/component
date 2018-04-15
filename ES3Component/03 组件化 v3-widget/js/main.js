require.config({
	paths: {
		jquery: 'lib/jquery-2.1.1.min',
		jqueryUI: 'lib/jquery-ui.min',
		widget: 'module/widget',
		Modal: 'module/modal'
	}
});

require(['jquery', 'Modal'], function ($, Modal) {
	$('.btn').click(function () {
		var modal = new Modal();
		modal
			.alert({
				title: '提示',
				content: 'Welcome Widget!',
				handler: function () {
					console.log('You click the button!');
				},
				width: 300,
				height: 150,
				y: 250,
				x: 600,
				hasCloseBtn: true,
				text4AlertBtn: 'OK',
				dragHandle: '.window_header',
				skinClassName: 'window_skin_a',
				// handler4AlertBtn: function () {
				// 	console.log('你点击了确定按钮');
				// },
				// handler4CloseBtn: function () {
				// 	console.log('你点击了关闭按钮');
				// }
			})
			.on('alert', function () {
				console.log('你点击了[确定]按钮')
			})
			.on('alert', function () {
				console.log('[确定]按钮第 2 次回调')
			})
			.on('alert', function () {
				console.log('[确定]按钮第 3 次回调')
			})
			.on('close', function () {
				console.log('你点击了[关闭]按钮')
			})
			.on('close', function () {
				console.log('[关闭]按钮第 2 次回调')
			});
	});
});