({
   
	getSelectedValue : function(component, event, helper) {
        //find autocomplete component using aura id
		const autoCompleteComponent = component.find("account-record");
        if(autoCompleteComponent){
            //get selected option from auto complete component's selectedOption attribute
            const selectedOption = autoCompleteComponent.get("v.selectedOption");
            //set selected value in component attribute
            component.set("v.selectedValue", selectedOption);
        }
	}
})
