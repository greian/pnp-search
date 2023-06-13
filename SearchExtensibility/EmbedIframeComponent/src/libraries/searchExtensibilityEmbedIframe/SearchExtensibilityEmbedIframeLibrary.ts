import { IAdaptiveCardAction, IComponentDefinition, IExtensibilityLibrary, ILayoutDefinition, ISuggestionProviderDefinition } from '@pnp/modern-search-extensibility';
import { EmbedIframeWebComponent } from '../EmbedIframeWebComponent/EmbedIframeComponent';

export class SearchExtensibilityEmbedIframeLibrary implements IExtensibilityLibrary {

  public getCustomWebComponents(): IComponentDefinition<any>[] {
    return [
      {
        componentName: 'embedded-iframe',
        componentClass: EmbedIframeWebComponent
      }
    ];
  }

  getCustomLayouts(): ILayoutDefinition[] {
    return [];
  }


  public registerHandlebarsCustomizations?(handlebarsNamespace: typeof Handlebars): void {
  }

  public getCustomSuggestionProviders(): ISuggestionProviderDefinition[] {
    return [];
  }

  public invokeCardAction(action: IAdaptiveCardAction): void {
    
  }

  public name(): string {
    return 'SearchExtensibilityEmbedIframeLibrary';
  }
}
