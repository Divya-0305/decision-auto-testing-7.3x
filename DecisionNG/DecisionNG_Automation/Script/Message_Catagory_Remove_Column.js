var SelectingOptionfromDropdown_UL_LI = require("SelectingOptionfromDropdown_UL_LI");
var Verify_Category_Exist_Not_Exists = require("Verify_Category_Exist_Not_Exists");
function Message_Catagory_Remove_Column(category)
{
  let page= Aliases.browser.pageSapiensDecision2
  let catagoryColumn= page.FindElement("//div[contains(@class,'spec_category-column-header')]//div//span[contains(text(),'"+category+"')]")
  
  if (catagoryColumn.Exists)
  {
    if (catagoryColumn.VisibleOnScreen == false)
    {
      let root = page.FindElement("//*[@wj-part='root']")
          root.scrollLeft += 1000;
          catagoryColumn.ClickR();
    }
    else{
      //catagoryColumn.scrollIntoView(true);
      catagoryColumn.ClickR();
    }
  }
      
  SelectingOptionfromDropdown_UL_LI.SelectingOptionfromDropdown("Remove")
  page.FindElement("//button[text()=' Remove ']").Click();
  //verify message category
  Verify_Category_Exist_Not_Exists.Verify_Category_Exist_Not_Exists(category,"","Yes")
     
}