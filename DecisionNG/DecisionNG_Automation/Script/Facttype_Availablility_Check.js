function Facttype_Availablility_Check(FactTypeName)
{
  let Item = FactTypeName
  let PtableCount = Aliases.browser.PageSapiensDecision.FindElement("//p-table/div").ChildCount;
  //Log.Message(PtableCount);
  let flag = 0;
  let hasNext = true;
  
  if(PtableCount>1)
  {
    Log.Message("Pagination is available");
  }  
  
  do
  {    
    ItemCount = Aliases.browser.pageSapiensDecision.FindElements("//tbody/tr");
    
    //Iterate through all the rows and finding the desired Task
    for(var j = 1; j <= ItemCount.length ; j++)
    {
          var HighlightedItemName = Aliases.browser.pageSapiensDecision.FindElement("//tbody/tr["+j+"]/td[1]//a");
          
          var FTName = HighlightedItemName.textContent.trim();
//          Log.Message(FTName)
//          let Name = FTName.split('[')[0]
//          Name.trim()        
//          Log.Message(Name.trim())
          
          //If the Item Name matches 
          if(FTName == Item )
          {
                 //HighlightedItemName.click();
                 flag =1;
                Log.Checkpoint("Item is available");     
           }
           if(flag == 1)
           {
              break;
           }
      }
      if(flag ==1)
      {
        break;
      }
      
      if(PtableCount>1)
      {      
        
        var Next_Page_Button = Aliases.browser.pageSapiensDecision.FindElement("//a[@ng-reflect-klass='ui-paginator-next ui-paginator']");
      
        if(Next_Page_Button.getAttribute("class") == "ui-paginator-next ui-paginator-element ui-state-default ui-corner-all")
        {
          Next_Page_Button.click();          
        }
    
        else
        {
            hasNext = false;
        }
      
      }else
      {
        hasNext = false;
      }
     
  }
  while(hasNext == true)
  
  if(flag == 0)
  {
    Log.Checkpoint("Item is not found");
  }
  
//  var FirstPage = Aliases.browser.pageSapiensDecision.FindElement("//a[contains(@class,'ui-paginator-first')]");
//  FirstPage.click();
}
module.exports.Facttype_Availablility_Check = Facttype_Availablility_Check;