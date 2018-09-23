const assert = require('chai').assert;
const TreeConstruc = require('../app');

var treeRoot = new TreeConstruc.Node(1);
treeRoot.left = new TreeConstruc.Node(3);
treeRoot.right = new TreeConstruc.Node(4);
treeRoot.right.left = new TreeConstruc.Node(7);


var treeRoot2 = new TreeConstruc.Node(1);
treeRoot2.left = new TreeConstruc.Node(3);
treeRoot2.right = new TreeConstruc.Node(53);
treeRoot2.right.left = new TreeConstruc.Node(7);


maxResult1 = function solve()
{
	return treeRoot.recurs(treeRoot, treeRoot.data);
    
}(); 


maxResult2 = function solve()
{
	return treeRoot2.recurs(treeRoot2, treeRoot2.data);
    
}(); 


describe('Test algo tree', function()
{
	
	describe('test tree max 7', function()
	{
		it('should return 7', function()
		{
			assert.equal(maxResult1, 7);
		});


	it('should return type number', function()
	{
		assert.typeOf(maxResult1, 'number');
	});

	})

	describe('test tree max 53', function()
	{
		it('should return 53', function()
		{
			assert.equal(maxResult2, 53);
		});


	it('should return type number', function()
	{
		assert.typeOf(maxResult2, 'number');
	});

	})
});
