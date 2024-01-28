import { fabric } from "./fabric";

var canvas = new fabric.Canvas('myCanvas')
// Create canvas variable
 blockY=1;
 blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var block_image_object= "";

function new_Image(get_Image)
{
	fabric.Image.fromURL(get_Image, function(Img) {
		block_image_object = Img;

		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set({
        top:block_y,
		left:block_x,
		});
		canvas.add(block_image_object);
	    });
	}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // adicione os códigos adequados às teclas
	{
		new_Image('rr1.png');
		console.log("e");
	}
	if(keyPressed == '86')
	{
		blockX = 200;
		new_Image('pr.png');
		console.log("r");
	}
	
	if(keyPressed == '65')
	{
		blockX =350;
		new_Image('yr.png');
		console.log("i");
	}
	if(keyPressed == '82')
	{
		blockX = 600;
		new_Image('rr.png');
		console.log("a");
	}
	if(keyPressed == '73')
	{
		blockX = 700;
		new_Image('br.png');
		console.log("v");
	}
	
}

