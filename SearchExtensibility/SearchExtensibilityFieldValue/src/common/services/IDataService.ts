import { IInvokable } from "@pnp/odata";
import { IHubSiteWebData } from "@pnp/sp/hubsites";
// import { IItem } from "@pnp/sp/items";
import { IWeb} from "@pnp/sp/webs";
import { HttpClientResponse } from '@microsoft/sp-http';
// import { SPFI } from "@pnp/sp";

import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { ISiteUserInfo } from "@pnp/sp/site-users/types";
// import { IBasePermissions } from "@pnp/sp/security";

export interface IDataService {
  
  getListItem(listId: string, itemId: number, select?: string, expand?: string): Promise<any>;
  getListItemVersions(listName: string, itemId: number, select?: string, expand?: string): Promise<any>;
  getDocumentItem(listName:string,itemId: number, select?: string, expand?: string): Promise<any>;
  getHubWeb(hubSiteUrl: string): IWeb & IInvokable<any>;
  getHubSiteWebData(): Promise<Partial<IHubSiteWebData>>;
  startFlow(flowUrl: string, data: any): Promise<HttpClientResponse>;
  getUserPermissions(listName: string): Promise<boolean>;
  getCurrentUser(): Promise<ISiteUserInfo>;
}
