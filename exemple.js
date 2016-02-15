var test = require ('tape');

// test('addition', function (t) {
// 	t.equal(true, true);
// 	t.notEqual(true, true);
// 	t.end();
// });
function mr(){
	this.pos = {
		X: 0,
		Y: 0,
		dir: 'N',
	}

	this.droite = function(){
		this.pos.X ++;
	}

	this.gauche = function(){
		this.pos.Y --;
	}

	this.front = function(){
		this.pos.X ++;
		this.pos.Y ++;
	}

	this.back =function(){
		this.pos.X --;
		this.pos.Y --;
	}

}


test('point de départ', function (t){
	var rover = new mr();

	t.equal(rover.pos.X,0);
	t.equal(rover.pos.Y,0);
	t.equal(rover.pos.dir,'N');

	rover.droite();
	t.equal(rover.pos.X,1);
	t.equal(rover.pos.Y,0);
	t.equal(rover.pos.dir,'N');


	rover.droite();
	t.equal(rover.pos.X,2);
	t.equal(rover.pos.Y,0);
	t.equal(rover.pos.dir,'N');


	rover.droite();
	rover.droite();
	rover.droite();

	t.equal(rover.pos.X,5);
	t.equal(rover.pos.Y,0);
	t.equal(rover.pos.dir,'N');

	t.end();
});

test('gauche', function (t){
	var rover = new mr();

	rover.gauche();
	t.equal(rover.pos.X,0);
	t.equal(rover.pos.Y,-1);
	t.equal(rover.pos.dir,'N');

	rover.gauche();
	rover.gauche();

	rover.gauche();
	t.equal(rover.pos.X,0);
	t.equal(rover.pos.Y,-4);
	t.equal(rover.pos.dir,'N');
	
	t.end();
});

test('front', function (t){
	var rover = new mr();

	rover.front();
	t.equal(rover.pos.X,1);
	t.equal(rover.pos.Y,1);
	t.equal(rover.pos.dir,'N');

	t.end();
});

test('back', function (t){
	var rover = new mr();

	rover.back();
	t.equal(rover.pos.X,-1);
	t.equal(rover.pos.Y,-1);
	t.equal(rover.pos.dir, 'N');

	t.end();
});
