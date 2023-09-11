define(["require","exports"],function(e,o){o.audiopath="Content/audio/",o.basepath="Content/",function(e){e[e.none=0]="none",e[e.left=1]="left",e[e.up=2]="up",e[e.right=3]="right",e[e.down=4]="down"}(o.Direction||(o.Direction={}));o.Direction;!function(e){e[e.normal=0]="normal",e[e.fire=1]="fire"}(o.MarioState||(o.MarioState={}));o.MarioState;!function(e){e[e.small=1]="small",e[e.big=2]="big"}(o.SizeState||(o.SizeState={}));o.SizeState;!function(e){e[e.none=0]="none",e[e.left=1]="left",e[e.top=2]="top",e[e.right=4]="right",e[e.bottom=8]="bottom",e[e.all=15]="all"}(o.GroundBlocking||(o.GroundBlocking={}));o.GroundBlocking;!function(e){e[e.none=0]="none",e[e.horizontal=1]="horizontal",e[e.vertical=2]="vertical"}(o.CollisionType||(o.CollisionType={}));o.CollisionType;!function(e){e[e.normal=0]="normal",e[e.shell=1]="shell"}(o.DeathMode||(o.DeathMode={}));o.DeathMode;!function(e){e[e.mushroom=0]="mushroom",e[e.plant=1]="plant"}(o.MushroomMode||(o.MushroomMode={}));o.MushroomMode;o.images={enemies:o.basepath+"mario-enemies.png",sprites:o.basepath+"mario-sprites.png",objects:o.basepath+"mario-objects.png",peach:o.basepath+"mario-peach.png"},o.setup={interval:20,bounce:15,cooldown:20,gravity:2,start_lives:3,max_width:400,max_height:15,jumping_v:27,walking_v:5,mushroom_v:3,ballmonster_v:2,spiked_turtle_v:1.5,small_turtle_v:3,big_turtle_v:2,shell_v:10,shell_wait:25,star_vx:4,star_vy:16,bullet_v:12,max_coins:100,pipeplant_count:150,pipeplant_v:1,invincible:11e3,invulnerable:1e3,blinkfactor:5}});