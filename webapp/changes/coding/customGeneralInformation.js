/***
@controller Name:sap.suite.ui.generic.template.ObjectPage.view.Details,
*@viewId:mdm.cmd.supplier.ops1::sap.suite.ui.generic.template.ObjectPage.view.Details::C_SupplierFs
*/
sap.ui.define([
		'sap/ui/core/mvc/ControllerExtension'
		// ,'sap/ui/core/mvc/OverrideExecution'
	],
	function (
		ControllerExtension
		// ,OverrideExecution
	) {
		"use strict";
		return ControllerExtension.extend("customer.z.mdm.cmd.supplier.ops1.a1.customGeneralInformation", {
			metadata: {
			// 	// extension can declare the public methods
			// 	// in general methods that starts with "_" are private
				methods: {
			// 		publicMethod: {
			// 			public: true /*default*/ ,
			// 			final: false /*default*/ ,
			// 			overrideExecution: OverrideExecution.Instead /*default*/
			// 		},
			// 		finalPublicMethod: {
			// 			final: true
			// 		},
			// 		onMyHook: {
			// 			public: true /*default*/ ,
			// 			final: false /*default*/ ,
			// 			overrideExecution: OverrideExecution.After
			// 		},
			// 		couldBePrivate: {
			// 			public: false
			// 		}
			onAttachNavigate:function(oEvent){
				// debugger;
			}
				}
			
			},

			// // adding a private method, only accessible from this controller extension
			// _privateMethod: function() {},
			// // adding a public method, might be called or overridden from other controller extensions as well
			// publicMethod: function() {},
			// // adding final public method, might be called but not overridden from other controller extensions as well
			// finalPublicMethod: function() {},
			// // adding a hook method, might be called or overridden from other controller extensions.
			// // override these method does not replace the implementation, but executes after the original method.
			// onMyHook: function() {},
			// // method per default public, but made private per metadata
			// couldBePrivate: function() {},
			// // this section allows to extend lifecycle hooks or override public methods of the base controller
			override: {
			// 	/**
			// 	 * Called when a controller is instantiated and its View controls (if available) are already created.
			// 	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
			// 	 * @memberOf customer.z.mdm.cmd.supplier.ops1.a1.customGeneralInformation
			// 	 */
			// 	onInit: function() {
			// 	},

			// 	/**
			// 	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
			// 	 * (NOT before the first rendering! onInit() is used for that one!).
			// 	 * @memberOf customer.z.mdm.cmd.supplier.ops1.a1.customGeneralInformation
			// 	 */
			// 	onBeforeRendering: function() {
			// 	},

			// 	/**
			// 	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
			// 	 * This hook is the same one that SAPUI5 controls get after being rendered.
			// 	 * @memberOf customer.z.mdm.cmd.supplier.ops1.a1.customGeneralInformation
			// 	 */
				onAfterRendering: function() {
					// debugger;
					var customGroup = this.getView().byId("mdm.cmd.supplier.ops1::sap.suite.ui.generic.template.ObjectPage.view.Details::C_SupplierFs--id-1668053505502-173");
					var subSection = this.getView().byId("mdm.cmd.supplier.ops1::sap.suite.ui.generic.template.ObjectPage.view.Details::C_SupplierFs--82493::SubSection");
					var objectPage =  this.getView().byId("mdm.cmd.supplier.ops1::sap.suite.ui.generic.template.ObjectPage.view.Details::C_SupplierFs--objectPage");
					var smartTable = this.getView().byId("mdm.cmd.supplier.ops1::sap.suite.ui.generic.template.ObjectPage.view.Details::C_SupplierFs--customer.z.mdm.cmd.supplier.ops1.a1.LineItemsSmartTable");
					// var smartTable_supplierAddress = this.getView().byId("mdm.cmd.supplier.ops1::sap.suite.ui.generic.template.ObjectPage.view.Details::C_SupplierFs--customer.z.mdm.cmd.supplier.ops1.a1.idSuppAddTable");
						var smartForm = this.getView().byId("mdm.cmd.supplier.ops1::sap.suite.ui.generic.template.ObjectPage.view.Details::C_SupplierFs--customer.z.mdm.cmd.supplier.ops1.a1.smartForm");

					var subSection =  objectPage.getSections()[0].getSubSections()[0];
					var osectionNew =  objectPage.getSections()[0];
					// var sPath = this.getView().getBindingContext().sPath;
					// smartTable.setModel(objectPage.getModel());
					if(objectPage.getBindingContext()){
					var sPath =objectPage.getBindingContext().sPath;

					smartTable.setTableBindingPath(sPath+"/to_Supplierpurchasingorg");
					if(!smartForm.getElementBinding()){
					smartForm.bindElement(sPath+"/to_SupplierAddress");
					smartForm.bindElement("");
					}
				}


		// Start of Change on 08.02.2023 by Rgnanendra
var oModel = new sap.ui.model.odata.v2.ODataModel({serviceUrl: "/sap/opu/odata/sap/ZEXT_C_SUPPLIER_FS_SRV"});
var objectPage = this.getView().byId("mdm.cmd.supplier.ops1::sap.suite.ui.generic.template.ObjectPage.view.Details::C_SupplierFs--objectPage");
var locTbl = this.getView().byId("mdm.cmd.supplier.ops1::sap.suite.ui.generic.template.ObjectPage.view.Details::C_SupplierFs--customer.z.mdm.cmd.supplier.ops1.a1.BusinessPartner1");
var oModel = new sap.ui.model.odata.v2.ODataModel({serviceUrl: "/sap/opu/odata/sap/ZEXT_C_SUPPLIER_FS_SRV"});
var oModel1 = this.getView().getModel("customer.NEW_MODEL");
	
locTbl.setModel(oModel1);
		locTbl.setEntitySet("ZC_BPSupplierPartnerFunction");
		// End of Change

			 
				},
			

			// 	/**
			// 	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
			// 	 * @memberOf customer.z.mdm.cmd.supplier.ops1.a1.customGeneralInformation
			// 	 */
			// 	onExit: function() {
			// 	},
			onExit: function () {
				// this._oTPC.destroy();
			},

			// 	override public method of the base controller
			//	"templateBaseExtension": {
			/**
			 * Can be used to make sure that certain fields will be contained in the select clause of the table binding. 
			 * This should be used, when custom logic of the extension depends on these fields.
			 * sControlId is the ID of the control on which extension logic to be applied.
			 * For each custom field the extension must call fnEnsureSelectionProperty(oControllerExtension, sFieldname).
			 * oControllerExtension must be the ControllerExtension instance which ensures the field to be part of the select clause.				
			 * sFieldname must specify the field to be selected. Note that this must either be a field of the entity set itself or a field which can be reached via a :1 navigation property.
			 * In the second case sFieldname must contain the relative path.
			 */
			//	ensureFieldsForSelect: function(fnEnsureSelectionProperty, sControlId){
			//myControlId is the Id of the control to which the extension has been added
			/*if(myControlId == sControlId) {
				fnEnsureSelectionProperty(oControllerExtension, sFieldname);
			}*/
			//	},
			/**
			 * Can be used to add filters. They will be combined via AND with all other filters
			 * sControlId is the ID of the control on which extension logic to be applied.
			 * For each filter the extension must call fnAddFilter(oControllerExtension, oFilter)
			 * oControllerExtension must be the ControllerExtension instance which adds the filter
			 * oFilter must be an instance of sap.ui.model.Filter
			 */
			//addFilters: function(fnAddFilter, sControlId){
			//myControlId is the Id of the control to which the extension has been added
			/*if(myControlId == sControlId) {
				var oFilter = new sap.ui.model.Filter(vFilterInfo, vOperator?, vValue1?, vValue2?),
				fnAddFilter(oControllerExtension, oFilter);	
			}*/
				},
				onBeforeRebindTableForPartnerFunction:function(oEvent){
                    // Start of Change on 24.02.2023 by Rgnanendra
                    var sPath = window.location.hash.split("C_SupplierFs")[1].split("/")[0];
                        var SupplierCode = sPath.split("'")[1];
                    var oBindingParams = oEvent.getParameter("bindingParams");
                    oBindingParams.filters.push(new sap.ui.model.Filter("BusinessPartner", "EQ", SupplierCode));
                    // End of Change
                },
			/**
			 * Can be used to store specific state. Therefore, the implementing controller extension must call fnSetExtensionStateData(oControllerExtension, oExtensionState).
			 * oControllerExtension must be the ControllerExtension instance for which the state should be stored. oExtensionState is the state to be stored.
			 * Note that the call is ignored if oExtensionState is faulty
			 */
			//provideExtensionStateData: function(fnSetExtensionStateData){
			/*var oExtensionState = Object.create(null);//Create a new object
				oExtensionState.<myKeyName> = {
						data: <myPropertyValue>,
						lifecycle: {//provide values for lifecycle parameters
							permanent : true,
							page : false,
							session : true,
							pagination : false
						}
				}
			fnSetExtensionStateData(this, oExtensionState);*/
			//},
			/**
			 * Can be used extensions to restore their state according to a state which was previously stored.
			 * Therefore, the implementing controller extension can call fnGetExtensionStateData(oControllerExtension) in order to retrieve the state information which has been stored in the current state for this controller extension.
			 * undefined will be returned by this function if no state or a faulty state was stored.
			 * bIsSameAsLast is a boolean and a value of true indicates that the state needs not to be adapted, since view is like we left it the last time
			 */
			//restoreExtensionStateData: function(fnGetExtensionStateData, bIsSameAsLast){				
			//var oExtensionState = fnGetExtensionStateData(this);//get extensionState object
			//}
			//	}
			// }
		});
	});