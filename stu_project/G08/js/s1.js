
const s1 = {
key: 's1',
preload: function(){
	this.load.image('story1', 'img/story1.png');
	this.load.spritesheet('continueBtn', 'img/continueBtn.png', {frameWidth: 120, frameHeight: 40});

	this.load.audio('s1_bg','audio/s1.mp3');//載入背景音樂
},
create: function(){
   //把他們都畫上去
	
    story1 = this.physics.add.staticSprite(450, 350, 'story1');


	let next = this.add.sprite(800, 645, 'continueBtn');
	next.setInteractive();
	next.on('pointerover', () => {
		next.setFrame(1);
	})
	next.on('pointerout', () => {
		next.setFrame(0);
	})
	next.on('pointerdown', () => {
		next.setFrame(2);
	})
	next.on('pointerup', () => {
		next.setFrame(0);
		this.scene.start('s2');
	})
	
	s1_bg = this.sound.add('s1_bg',{
		volume:0.5,
	});
	s1_bg.play();
	
	
},
update: function(){}
	
}