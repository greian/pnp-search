import { ServiceKey, ServiceScope } from "@microsoft/sp-core-library";
// import { PageContext } from "@microsoft/sp-page-context";
// import { SPHttpClient, SPHttpClientResponse } from "@microsoft/sp-http";
import {
  IExtensibilityLibrary,
  IComponentDefinition,
  ISuggestionProviderDefinition,
  ILayoutDefinition,
  IAdaptiveCardAction,
  IQueryModifierDefinition,
  IDataSourceDefinition,
} from "@pnp/modern-search-extensibility";

import * as Handlebars from "handlebars";
import { FieldValueWebComponent } from "./components/FieldValueWebComponent";

export class FieldValueLibrary implements IExtensibilityLibrary {

  public static readonly serviceKey: ServiceKey<FieldValueLibrary> =
    ServiceKey.create<FieldValueLibrary>('SPFx:FieldValueLibrary', FieldValueLibrary);

  // private _spHttpClient: SPHttpClient;
  // private _pageContext: PageContext;
  // private _currentWebUrl: string;

  constructor(serviceScope: ServiceScope) {
    serviceScope.whenFinished(() => {
      // this._spHttpClient = serviceScope.consume(SPHttpClient.serviceKey);
      // this._pageContext = serviceScope.consume(PageContext.serviceKey);
      // this._currentWebUrl = this._pageContext.web.absoluteUrl;
    });
  }



  getCustomLayouts(): ILayoutDefinition[] {
    return [];
  }
  getCustomWebComponents(): IComponentDefinition<any>[] {
    return [
      {
        componentName: 'field-value',
        componentClass: FieldValueWebComponent
      }
    ];
  }
  getCustomSuggestionProviders(): ISuggestionProviderDefinition[] {
    return [];
  }
  registerHandlebarsCustomizations?(handlebarsNamespace: typeof Handlebars): void {
    
  }
  invokeCardAction(action: IAdaptiveCardAction): void {
    
  }
  getCustomQueryModifiers?(): IQueryModifierDefinition[] {
    return [];
  }
  getCustomDataSources?(): IDataSourceDefinition[] {
    return [];
  }
  public name(): string {
    return 'FieldValueLibrary';
  }
}
