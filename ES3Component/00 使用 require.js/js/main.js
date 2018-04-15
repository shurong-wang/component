require.config({
	paths: {
		tabview: 'module/tabview',
		treeview: 'module/treeview',
		animate: 'module/animate'
	}
});

require(['tabview', 'treeview'], function (tab, tree) {
	var tabView = new tab.TabView();
	var treeView = new tree.TreeView();

	document.write('<h1>The ' + tabView.name + ' module is loaded!</h1>');
	document.write('<h1>The ' + treeView.name + ' module is loaded!</h1>');
	document.write('<h1>The ' + tabView.animate.name + ' module is loaded!</h1>');
});