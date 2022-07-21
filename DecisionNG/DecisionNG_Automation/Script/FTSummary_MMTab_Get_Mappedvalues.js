let AllowedValue_array=[];
let AlloweValueafterEdit_array=[]
function Get_MappedValues()
{
  //Delay(2000)
  let AllowedValue_subarray=[];
  
  let MappedValueExist=Aliases.browser.pageSapiensDecision.FindElement("//dcn-model-mapping-allowed-values//div//div//div").Child(0).getAttribute("class")
  Log.Message(MappedValueExist);
  
  if(!MappedValueExist.includes('spec-no-data no-data'))
  {
    let AllowedValues_count;
    let page=Aliases.browser.pageSapiensDecision2;

          AllowedValues_count= page.FindElements("//dcn-model-mapping-allowed-values//fx-field//label");
          Log.Message(AllowedValues_count.length)
          for(i=0; i< AllowedValues_count.length; i++)
          {
            let AllowedValue= page.FindElement("//dcn-model-mapping-allowed-values//fx-field["+(i+1)+"]//label").textContent.trim();

              let AllowedValuetextbox= page.FindElement("//dcn-model-mapping-allowed-values//fx-field["+(i+1)+"]//div//span//input");
              if(page.FindElement("//dcn-model-mapping-allowed-values//fx-field["+(i+1)+"]//div//span//input").Enabled==true)
              {
               let AllowedValueText = AllowedValuetextbox.Text; 
               Log.Message(AllowedValueText);
                AllowedValue_subarray.push(AllowedValueText);                
              }
              else
              {
                  Log.Error("Allowed Value "+AllowedValue+" feild textbox is Disabled");
              }
                           
            
          
          }
          AllowedValue_array.push(AllowedValue_subarray);
          var Allowedvalue_Text_array= new Array();
          Allowedvalue_Text_array=AllowedValue_array.toString().split(",");  
          Project.Variables.MM_AllowedValues = Allowedvalue_Text_array;
          
    
        
  }
  
  else
  {
    Log.Message("Fact Type has no allowed values ")
    let textNode = Aliases.browser.pageSapiensDecision2.textnodeFactTypeHasNoAllowedValu;
    aqObject.CheckProperty(textNode, "Exists", cmpEqual, true);
    aqObject.CheckProperty(textNode, "contentText", cmpEqual, "Fact Type has no allowed values");
    
  }
  
}


function GetMappedValuesafterEdit ()
{
  Delay(3000)
  let AllowedValue_subarray=[];
  let MappedValueExist= Aliases.browser.pageSapiensDecision.FindElement("//dcn-model-mapping-allowed-values//div//div//div").Child(0).getAttribute("class")
  Log.Message(MappedValueExist);
  
  if(!MappedValueExist.includes('spec-no-data no-data'))
  {
    let AllowedValues_count;
    let page=Aliases.browser.pageSapiensDecision2;

          AllowedValues_count= page.FindElements("//dcn-model-mapping-allowed-values//fx-field//label");
          Log.Message(AllowedValues_count.length)
          for(i=0; i< AllowedValues_count.length; i++)
          {
            let AllowedValue= page.FindElement("//dcn-model-mapping-allowed-values//fx-field["+(i+1)+"]//label").textContent.trim();

              let AllowedValuetextbox= page.FindElement("//dcn-model-mapping-allowed-values//fx-field["+(i+1)+"]//div//span//input");
              if(page.FindElement("//dcn-model-mapping-allowed-values//fx-field["+(i+1)+"]//div//span//input").Enabled==true)
              {
               let AllowedValueText = AllowedValuetextbox.Text; 
               Log.Message(AllowedValueText);
                AllowedValue_subarray.push(AllowedValueText);                
              }
              else
              {
                  Log.Error("Allowed Value "+AllowedValue+" feild textbox is Disabled");
              }
                           
            
          
          }
          AlloweValueafterEdit_array.push(AllowedValue_subarray);
          var Allowedvalue_Text_after_array= new Array();
          Allowedvalue_Text_after_array=AlloweValueafterEdit_array.toString().split(",");  
          Project.Variables.MM_AllowedValues_AfterEdit = Allowedvalue_Text_after_array;
          
    
        
  }
  
  else
  {
    Log.Message("Fact Type has no allowed values ")
    let textNode = Aliases.browser.pageSapiensDecision2.textnodeFactTypeHasNoAllowedValu;
    aqObject.CheckProperty(textNode, "Exists", cmpEqual, true);
    aqObject.CheckProperty(textNode, "contentText", cmpEqual, "Fact Type has no allowed values");
    
  }  
}
