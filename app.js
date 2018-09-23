var TreeConstruct = function()
{
	var Node = function(data) 
	{
    	this.data = data;
    	this.left = null;
    	this.right = null;
	}

	Node.prototype.recurs = function(currentnode, maximum)
	{

    if(currentnode.data > maximum)
        maximum = currentnode.data;

    if(currentnode.left)
        maximum = this.recurs(currentnode.left, maximum);

    if(currentnode.right)
        maximum = this.recurs(currentnode.right, maximum);
    
    return maximum;
	}

	return {Node: Node}

}();

module.exports =  TreeConstruct;
