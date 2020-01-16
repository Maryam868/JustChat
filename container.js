const dependable= require('dependable');
const path= require('path'); 

const container= dependable.container();
const simpleDependencies=[
['_','lodash'],
['mongoose','mongoose'],
['passport', 'passport'] //not in video
];
/*using cdependable for injection of modules*/

 simpleDependencies.forEach(function(val) {
	container.register(val[0],function(){
		return require(val[1]);
	});
	// body...
})

/*for using files multiple times we dont need to know their names to access via register*/
container.load(path.join(__dirname,'/controllers'));
container.load(path.join(__dirname,'/helpers'));

container.register('container', function(){
	return container;
});

module.exports=container;

