
const s2 = {
key: 's2',
preload: function(){
	this.load.image('story2', 'img/story2.png');//載入說明
	this.load.spritesheet('continueBtn', 'img/continueBtn.png', {frameWidth: 120, frameHeight: 40});

	this.load.audio('s2_bg','audio/s2.mp3');//載入背景音樂
},
create: function(){
   //把他們都畫上去
	
    story2 = this.physics.add.staticSprite(450, 350, 'story2');
	


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
		this.scene.start('s3');
	})
	
	
	s2_bg = this.sound.add('s2_bg',{
		volume:0.5,
	});
	s2_bg.play();
	
},
update: function(){}
	
}