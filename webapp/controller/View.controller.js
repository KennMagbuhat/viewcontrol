sap.ui.define(['sap/m/MessageToast','sap/ui/core/mvc/Controller'],
	function(MessageToast, Controller) {
	"use strict";

	var PageController = Controller.extend("sap.m.sample.Button.Page", {
		onAddItem: function (evt) {
			MessageToast.show("Add to Cart is Pressed");
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
            var oInputFNameValue = this.getView().byId("idInptFName").getValue();
            var oInputLNameValue = this.getView().byId("oidLblLName").getValue();
            // Check if first name is blank
            if (oInputFNameValue === "" && oInputLNameValue === ""){
                sap.m.MessageToast.show("Required Field is blank"); 
            }
        },
	});
	return PageController;
});