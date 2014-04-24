TextFieldHTML.prototype.constructor= TextFieldHTML;

/**
 * Instanciable class that manages and renders a text in an html div
 * @param configuration configuration Object with parameters (x, y, width, text, fontColor, fontSize, fontName, fontStyle, linkFunction, target…)
 * @constructor
 */
function TextFieldHTML(configuration){
	configuration = configuration==null?new Object():configuration;
	
	this.x=configuration.x==null?300:configuration.x;
    this.y=configuration.y==null?2:configuration.y;
    this.width=configuration.width==null?200:configuration.width;
	
	this.textColor =  configuration.textColor==null?'black':configuration.textColor;
	
	this.backgroundColor = configuration.backgroundColor;
	
	this.linkFunction = configuration.linkFunction;
	this.target = configuration.target;
	
	this.fastHTMLactive = configuration.fastHTMLactive==null?true:configuration.fastHTMLactive;
	
	this.text;
	
	//////////
    
    this._prevX;
    this._prevY;
    this._prevWidth;
    this._prevHeight;
    
    this.zIndex = 33;
	
	this.main = document.getElementById('maindiv');
	this.div = document.createElement('div2');
	this.div.setAttribute('style', 'position:absolute;top:'+this.y+'px;left:'+this.x+'px;z-index:'+this.zIndex+';');
	this.main.appendChild(this.div);
	
	this.setText(configuration.text==null?'':configuration.text);
	
	this.draw();
	
	var thisTextField = this;
	var linkFunction = this.linkFunction;
	var target = this.target;
	
	if(this.target!=null && this.linkFunction!=null){
		FastHtml.target = this.target;
		FastHtml.linkFunction = this.linkFunction;
	}
}



TextFieldHTML.prototype.draw = function() {
	//c.log('this.width, this._prevWidth', this.width, this._prevWidth);
 	if(this.x!=this._prevX || this.y!=this._prevY || this.width!=this._prevWidth || this.height!=this._prevHeight){
 		this._prevX = this.x;
    	this._prevY = this.y;
    	this._prevWidth = this.width;
    	this._prevHeight = this.height;
		//this.div.setAttribute('style', 'position:absolute;top:'+this.y+'px;left:'+this.x+'px;z-index:'+this.zIndex+'; width:'+this.width+'px;');//height:'+this.height+'px;');
		this.div.setAttribute('style', 'position:absolute;top:'+this.y+'px;left:'+this.x+'px;z-index:'+this.zIndex+'; width:'+this.width+'px; height:'+this.height+'px;');
	}
}

TextFieldHTML.prototype.setText=function(text){
	if(this.text!=text){
		this.text = text;
		this.div.innerHTML = this.fastHTMLactive?FastHtml.expand(text):text;
	}
}

TextFieldHTML.prototype.getText=function(){
	return this.DOMtext.value;
}

//


