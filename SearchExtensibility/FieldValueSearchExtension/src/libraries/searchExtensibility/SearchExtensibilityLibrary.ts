import { IComponentDefinition, IDataSourceDefinition, IExtensibilityLibrary, ILayoutDefinition, ISuggestionProviderDefinition } from "@pnp/modern-search-extensibility";
import { FieldValueWebComponent } from "./components/FieldValueComponent/FieldValueWebComponent";

export class SearchExtensibilityLibrary implements IExtensibilityLibrary {


  getCustomDataSources?(): IDataSourceDefinition[] {
    return [];
  }

  public getCustomWebComponents(): IComponentDefinition<any>[] {
    return [
      {
        componentName: 'field-value-component',
        componentClass: FieldValueWebComponent
      }
    ];
  }

  getCustomLayouts(): ILayoutDefinition[] {
    return [];
  }


  public registerHandlebarsCustomizations?(handlebarsNamespace: typeof Handlebars): void {
    // Register custom Handlebars helpers
    // Usage {{myHelper 'value'}}
    handlebarsNamespace.registerHelper('multiUserField', (value: string, className?: string) => {

      let output = '';

      if (value) {

        output += '<ul class="' + className + '">'

        const rows = value.split('\n\n');

        for (let row of rows) {
          const rowValues = row.split(' | ');

          const rowEmail = rowValues[0];
          const rowName = rowValues[1];

          output += '<li>';
          output += '<a href="' + rowEmail + '">' + rowName + '</a>';
          output += '</li>';

        }

        output += '</ul>'
      }
      return new handlebarsNamespace.SafeString(output);

      // return new handlebarsNamespace.SafeString(value.toUpperCase());
    });

    handlebarsNamespace.registerHelper('hasValue', (value: string) => {
      if (value) {
        return true;
      } else {
        return false;
      }
  });
  }

  public getCustomSuggestionProviders(): ISuggestionProviderDefinition[] {
    return [];
  }

  public name(): string {
    return 'SearchExtensibilityLibrary';
  }
}
