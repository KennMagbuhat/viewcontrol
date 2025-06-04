sap.ui.define(['sap/m/MessageToast','sap/ui/core/mvc/Controller'],
	function(MessageToast, Controller) {
	"use strict";

	var PageController = Controller.extend("sap.m.sample.Button.Page", {
		onAddItem: function (evt) {
			//MessageToast.show("Add to Cart is Pressed");
            if (!this.oDialog) {
                // By using loadFragment, we are adding the fragment as a dependent to the View
                // By doing so, we can use the functions inside the view's controller
                this.oDialog = this.loadFragment({
                    name: "com.training.exer1magbuhat.fragment.ProductDialog"
                });
            } 
            this.oDialog.then(function(oDialog) {
                oDialog.open();
            });

		},
        onCloseDialog: function (){
            this.getView().byId("idProductDialog").close();
        },
        fnDisplayMsg: function (sMsg){
            MessageToast.show(sMsg);
        },
        onChangeMOP: function (oEvent) {
            var sSelectedKey = oEvent.getParameter("selectedItem").getProperty("key");
            var oMobileLabel = this.getView().byId("idLblPhone");
            var oMobileInput = this.getView().byId("idInputPhone");

            var oCCNumLabel = this.getView().byId("idCrdNum");
            var oCCNumInput = this.getView().byId("idInputCrdNum");
            var oCCDateLabel = this.getView().byId("idValidDate");
            var oCCDateInput = this.getView().byId("idInputValidDate");
            var oCVVLabel = this.getView().byId("idCVV");
            var oCVVInput = this.getView().byId("idInputCVV");
        
            if (sSelectedKey === "GCASH"){
                // show the mobile field
                oMobileLabel.setVisible(true);
                oMobileInput.setVisible(true);
                MessageToast.show("GCASH Selected");
            } else {
                oMobileLabel.setVisible(false);
                oMobileInput.setVisible(false);
            }
            if (sSelectedKey === "CC"){
                // show the mobile field
                oCCNumLabel.setVisible(true);
                oCCNumInput.setVisible(true);
                oCCDateLabel.setVisible(true);
                oCCDateInput.setVisible(true);
                oCVVLabel.setVisible(true);
                oCVVInput.setVisible(true);
                MessageToast.show("Credit Card Selected");
            } else {
                oCCNumLabel.setVisible(false);
                oCCNumInput.setVisible(false);
                oCCDateLabel.setVisible(false);
                oCCDateInput.setVisible(false);
                oCVVLabel.setVisible(false);
                oCVVInput.setVisible(false);
            }
            if (sSelectedKey === "COD"){
                MessageToast.show("Cash on Delivery Selected");
            }
        },
        onPressCheckout: function (){
           // var oInputFNameValue = this.getView().byId("idInptFName").getValue();
           // var oInputLNameValue = this.getView().byId("idInptLName").getValue();
           // // Check if first name is blank
           // if (oInputFNameValue === "" || oInputLNameValue === ""){
           //     sap.m.MessageToast.show("Required Field is blank"); 
           var oInputFName = this.getView().byId("idInptFName");
           var oInputLName = this.getView().byId("idInptLName");
           var oInputFNameValue = oInputFName.getValue();
           var oInputLNameValue = oInputLName.getValue();
           var oRouter = this.getOwnerComponent().getRouter();

           // Check if first name and last name is blank
           if (oInputFNameValue === "" || oInputLNameValue === ""){   
           // set value state to Error
               oInputFName.setValueState("Error");
               oInputLName.setValueState("Error");
           } else {
               oInputFName.setValueState("None");
               oInputLName.setValueState("None");

               //Navigate to review page passing first
               oRouter.navTo("RouteReviewPage", {
                   firstName: oInputFNameValue
               });
            }
        },
	});
	return PageController;
});