sap.ui.controller("smax.batch32.A1.controller.Page1", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf Page1
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf Page1
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf Page1
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf Page1
*/
//	onExit: function() {
//
//	}
	gotoPage2 : function(oEvent) {
	 
	//	debugger;
		//get productID
	//	var productId = oEvent.getSource().getTitle();
		
		this.getOwnerComponent().getRouter().navTo("p2", {pId : oEvent.getSource().getTitle() });
	}
});






