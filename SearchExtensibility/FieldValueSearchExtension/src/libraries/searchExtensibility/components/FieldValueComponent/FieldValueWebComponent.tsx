import { BaseWebComponent } from "@pnp/modern-search-extensibility";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { PageContext } from "@microsoft/sp-page-context"
import { IDataService } from "../../../../common/services/IDataService";
import { SPFI, spfi, SPFx as spSPFx } from "@pnp/sp";
import { DataService } from "../../../../common/services/DataService";
import FieldValueComponent from "./FieldValueComponent";
import { IFieldValueItem } from "../../../../common/models/IFieldValueItem";

export class FieldValueWebComponent extends BaseWebComponent {

  private _dataService: IDataService;
  private _sp: SPFI;

  public async connectedCallback() {

    // Get properties from the handlebar
    let props: IFieldValueItem = this.resolveAttributes() as IFieldValueItem;

    console.log("PROPS FROM HANDLEBAR", props);

    // Get the service scope from the base web component
    this._serviceScope.whenFinished(async () => {

      // Get the page context from the service scope
      const pageContext = this._serviceScope.consume(PageContext.serviceKey as any) as any;
      
      // Get the SPFI object using the pageContext object
      this._sp = spfi().using(spSPFx({ pageContext }));

      // initialize the dataservice
      this._dataService = new DataService(this._sp, null, pageContext.httpClient, props.siteUrl);

      // TODO: vi borde kanske inte hårdkoda "Beslutslogg", hämtas via listor som har rätt innehållstyp?
      const listId = props.listName; 
      const listItem = await this._dataService.getListItem(listId, parseInt(props.listItemId));

      // Render the component for ItemActions
      return this.doRender(listItem, props);

    });
  }

  private doRender(listItem: any, props: IFieldValueItem) {
    const customComponent = <FieldValueComponent fieldValue={listItem[props.fieldName]} fieldItem={props} />;
    ReactDOM.render(customComponent, this);
    return Promise.resolve();
  }
  // ListItemID, SPSiteUrl, ListId
}
