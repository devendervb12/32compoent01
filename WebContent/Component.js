
sap.ui.core.UIComponent.extend("smax.batch32.A1.Component", {
	
	metadata : {
		manifest : "json"
	},
	init : function(){
		//framework will create a Router for smax.batch31.A1 Component
		sap.ui.core.UIComponent.prototype.init.apply(this);
		
		//getting the reference of Router
		var oRouter = this.getRouter();
		oRouter.initialize();
	}
});