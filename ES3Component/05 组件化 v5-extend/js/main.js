require.config({
	paths: {
		jquery: 'lib/jquery-2.1.1.min',
		jqueryUI: 'lib/jquery-ui.min',
		Widget: 'module/widget',
		Modal: 'module/modal'
	}
});

require(['jquery', 'Modal'], function ($, Modal) {
	var modal = new Modal();

	$('.btn_alert').click(function () {
		modal
			.alert({
				title: '提示',
				content: 'Good-bye Component!',
				width: 300,
				height: 150,
				y: 250,
				x: 600,
				hasCloseBtn: true,
				text4AlertBtn: 'OK',
				dragHandle: '.window_header',
				skinClassName: 'window_skin_a',
				// handler4AlertBtn:function(){
				// 	alert('你点击了确定按钮');
				// },
				// handler4CloseBtn:function(){
				// 	alert('你点击了关闭按钮');
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

	$('.btn_confirm').click(function () {
		modal
			.confirm({
				title: '系统消息',
				content: '您确定要删除这个文件吗',
				width: 300,
				height: 150,
				y: 50,
				x: 600,
				text4ConfirmBtn: '是',
				text4CancelBtn: '否',
				dragHandle: '.window_header'
			})
			.on('confirm', function () {
				console.log('确定');
			})
			.on('cancel', function () {
				console.log('取消');
			});
	});

	$('.btn_prompt').click(function () {
		modal
			.prompt({
				title: '请输入您的名字',
				content: '我们将会为您保密您输入的信息',
				width: 300,
				height: 150,
				y: 50,
				text4PromptBtn: '输入',
				text4CancelBtn: '取消',
				defaultValue4PromptInput: '张三',
				dragHandle: '.window_header',
				handler4PromptBtn: function (inputVlaue) {
					alert('您输入的内容是：' + inputVlaue);
				},
				handler4CancelBtn: function () {
					alert('取消');
				}
			});
	});

	$('.btn_common').click(function () {
		modal
			.common({
				content: '这是一个通用弹窗',
				width: 300,
				height: 150,
				hasCloseBtn: true
			});
	});
});