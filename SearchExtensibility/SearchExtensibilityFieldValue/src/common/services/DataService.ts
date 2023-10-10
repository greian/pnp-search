import { HttpClient, IHttpClientOptions, HttpClientResponse } from '@microsoft/sp-http';

import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/files";
import "@pnp/sp/folders";
import "@pnp/sp/security";
import "@pnp/sp/hubsites/web";
import "@pnp/sp/site-users/web";

import { SPFI, spfi } from "@pnp/sp";
import { GraphFI } from "@pnp/graph";
import { IWeb, Web } from "@pnp/sp/webs";
// import { IItem } from "@pnp/sp/items";
import { AssignFrom } from "@pnp/core";
import { IHubSiteWebData } from "@pnp/sp/hubsites";
import { IInvokable } from "@pnp/odata";

import { PermissionKind } from "@pnp/sp/security";
import { ISiteUserInfo } from "@pnp/sp/site-users/types";
import { IDataService } from '.';

export class DataService implements IDataService {

  private _sp: SPFI;
  private _httpClient: HttpClient;

  constructor(sp: SPFI, graph: GraphFI, httpClient: HttpClient, siteUrl?: string) {
    this._sp = sp;
    this._httpClient = httpClient;

    if (siteUrl !== null) {
      this._sp = spfi(siteUrl).using(AssignFrom(this._sp.web));
    }

  }

  public async getCurrentUser(): Promise<ISiteUserInfo> {
    const siteUser = await this._sp.web.currentUser();
    return siteUser;
  }

  public async getUserPermissions(listName: string): Promise<boolean> {

    try {

      const perms = await this._sp.web.lists.getByTitle(listName).getCurrentUserEffectivePermissions();

      if (this._sp.web.hasPermissions(perms, PermissionKind.EditListItems)) {
        return true;
      }
      return false;

    } catch (err) {
      console.log('An error occured', err);
    }
  }


  public async getHubSiteWebData(): Promise<Partial<IHubSiteWebData>> {
    return await this._sp.web.hubSiteData();
  }

  public getHubWeb(hubSiteUrl: string): IWeb & IInvokable<any> {
    return Web(hubSiteUrl);
  }

  async getListItem(listName: string, itemId: number, select?: string, expand?: string): Promise<any> {

    const cacheKey = `listItem_${itemId}`;
    const latestAccessKey = `latest_access_${itemId}`;

    // Check if the item is in sessionStorage and if it's not too old (e.g., cached within the last 60 seconds)
    const cachedItem = sessionStorage.getItem(cacheKey);
    const latestAccess = sessionStorage.getItem(latestAccessKey);

    if (cachedItem && latestAccess) {
      const currentTime = new Date().getTime();
      if (currentTime - parseInt(latestAccess, 10) < 60000) { // Cache valid for 60 seconds
        return JSON.parse(cachedItem);
      }
    }

    // If not cached or the cache is too old, fetch the item
    const item = await this._sp.web.lists.getByTitle(listName).items.getById(itemId)();

    // Cache the fetched item and update the access timestamp
    sessionStorage.setItem(cacheKey, JSON.stringify(item));
    sessionStorage.setItem(latestAccessKey, new Date().getTime().toString());

    return item;

  }

  async getListItemVersions(listName: string, itemId: number, select?: string, expand?: string): Promise<any> {
    const versions = await this._sp.web.lists.getByTitle(listName)
      .items.getById(itemId).select('Versions').expand('Versions')();


    const changes = await this._sp.web.lists.getByTitle(listName).getListItemChangesSinceToken({ChangeToken: null});

    console.log(changes);

    return versions;
  }

  async getDocumentItem(listName: string, itemId: number, select?: string, expand?: string): Promise<any> {

    try {

      const item = await this._sp.web.lists.getByTitle(listName).items.getById(itemId)();
      return item;

    }
    catch (error) {
      console.log(error);
    }
  }




  public async startFlow(flowUrl: string, data: any): Promise<HttpClientResponse> {

    const requestHeaders: Headers = new Headers();
    requestHeaders.append('Content-type', 'application/json');
    requestHeaders.append('Cache-Control', 'no-cache');

    const httpClientOptions: IHttpClientOptions = {
      body: JSON.stringify(data),
      headers: requestHeaders
    };
    return this._httpClient.post(flowUrl, HttpClient.configurations.v1, httpClientOptions);
  }

}
